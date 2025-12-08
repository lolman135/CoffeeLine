package com.example.CoffeeLine.service;

import com.example.CoffeeLine.common.OrderStatus;
import com.example.CoffeeLine.domain.Coffee;
import com.example.CoffeeLine.domain.Order;
import com.example.CoffeeLine.domain.OrderItem;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.order.OrderItemRequestDto;
import com.example.CoffeeLine.dto.order.OrderRequestDto;
import com.example.CoffeeLine.dto.order.UpdateOrderStatusRequestDto;
import com.example.CoffeeLine.service.exception.OrderNotFoundException;
import com.example.CoffeeLine.service.impl.OrderServiceImpl;
import com.example.CoffeeLine.service.repository.OrderRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.time.LocalDateTime;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest(classes = OrderServiceImpl.class)
class OrderServiceImplTest {

    @Autowired
    private OrderService orderService;

    @MockitoBean
    private OrderRepository orderRepository;

    @MockitoBean
    private UserService userService;

    @MockitoBean
    private CoffeeService coffeeService;

    private User createMockUser() {
        User user = new User();
        user.setId(UUID.randomUUID());
        user.setEmail("test@user.com");
        return user;
    }

    private Coffee createMockCoffee(double price) {
        return Coffee.builder()
                .id(UUID.randomUUID())
                .name("Test Coffee")
                .price(price)
                .build();
    }

    private Order createTestOrder(OrderStatus status) {
        return Order.builder()
                .id(UUID.randomUUID())
                .createdAt(LocalDateTime.now())
                .totalCost(100.0)
                .status(status)
                .user(createMockUser())
                .items(new HashSet<>())
                .build();
    }

    @Test
    @DisplayName("getAllOrders should invoke repository.findAll() when status is null")
    void getAllOrders_NoStatus_ReturnsAll() {
        Order order1 = createTestOrder(OrderStatus.CREATED);
        Order order2 = createTestOrder(OrderStatus.COMPLETED);

        when(orderRepository.findAll()).thenReturn(List.of(order1, order2));

        List<Order> result = orderService.getAllOrders(null);

        assertEquals(2, result.size());
        verify(orderRepository).findAll();
        verify(orderRepository, never()).getOrdersByStatus(any());
    }

    @Test
    @DisplayName("getAllOrders should invoke repository.getOrdersByStatus() and return filtered list when status is provided")
    void getAllOrders_WithStatus_ReturnsFiltered() {
        OrderStatus status = OrderStatus.CREATED;

        Order order1 = createTestOrder(status);
        Order order2 = createTestOrder(status);
        Order order3 = createTestOrder(status);

        when(orderRepository.getOrdersByStatus(status)).thenReturn(List.of(order1, order2, order3));

        List<Order> result = orderService.getAllOrders(status);

        assertEquals(3, result.size());
        assertEquals(status, result.get(0).getStatus());
        assertEquals(status, result.get(1).getStatus());
        assertEquals(status, result.get(2).getStatus());
        assertEquals(order1.getId(), result.get(0).getId());

        verify(orderRepository).getOrdersByStatus(status);
        verify(orderRepository, never()).findAll();
    }

    @Test
    @DisplayName("getOrdersByUserId should invoke repository.getOrdersByUserId()")
    void getOrdersByUserId_Success() {
        UUID userId = UUID.randomUUID();
        when(orderRepository.getOrdersByUserId(userId)).thenReturn(List.of(createTestOrder(OrderStatus.CREATED)));

        List<Order> result = orderService.getOrdersByUserId(userId);

        assertEquals(1, result.size());
        verify(orderRepository).getOrdersByUserId(userId);
    }

    @Test
    @DisplayName("getOrderById should return correct order with all fields populated when found")
    void getOrderById_Success() {
        Order order = createTestOrder(OrderStatus.COMPLETED);
        UUID orderId = order.getId();

        when(orderRepository.findById(orderId)).thenReturn(Optional.of(order));

        Order found = orderService.getOrderById(orderId);

        assertNotNull(found);
        assertEquals(orderId, found.getId());
        assertEquals(order.getCreatedAt(), found.getCreatedAt());
        assertEquals(order.getTotalCost(), found.getTotalCost());
        assertEquals(order.getStatus(), found.getStatus());
        assertEquals(order.getUser(), found.getUser());
        assertEquals(order.getItems(), found.getItems());
    }

    @Test
    @DisplayName("getOrderById should throw OrderNotFoundException when order does not exist")
    void getOrderById_NotFound() {
        UUID orderId = UUID.randomUUID();
        when(orderRepository.findById(orderId)).thenReturn(Optional.empty());

        assertThrows(OrderNotFoundException.class, () -> orderService.getOrderById(orderId));
    }

    @Test
    @DisplayName("createOrder should correctly calculate totalCost (price * quantity), set status CREATED and persist order with all fields")
    void createOrder_Success() {
        UUID userId = UUID.randomUUID();
        User user = createMockUser();
        user.setId(userId);

        Coffee coffee1 = createMockCoffee(50.0);
        UUID coffeeId1 = coffee1.getId();

        Coffee coffee2 = createMockCoffee(30.0);
        UUID coffeeId2 = coffee2.getId();

        OrderRequestDto requestDto = new OrderRequestDto(
                userId.toString(),
                Set.of(
                        new OrderItemRequestDto(coffeeId1.toString(), 2),
                        new OrderItemRequestDto(coffeeId2.toString(), 1)
                )
        );

        when(userService.getUserById(userId)).thenReturn(user);
        when(coffeeService.getCoffeeById(coffeeId1)).thenReturn(coffee1);
        when(coffeeService.getCoffeeById(coffeeId2)).thenReturn(coffee2);

        when(orderRepository.save(any(Order.class))).thenAnswer(i -> {
            Order o = i.getArgument(0);
            o.setId(UUID.randomUUID());
            return o;
        });

        Order createdOrder = orderService.createOrder(requestDto);

        assertNotNull(createdOrder);
        assertNotNull(createdOrder.getId());
        assertEquals(OrderStatus.CREATED, createdOrder.getStatus());
        assertNotNull(createdOrder.getCreatedAt());
        assertEquals(user, createdOrder.getUser());
        assertEquals(130.0, createdOrder.getTotalCost());
        assertEquals(2, createdOrder.getItems().size());

        ArgumentCaptor<Order> orderCaptor = ArgumentCaptor.forClass(Order.class);
        verify(orderRepository).save(orderCaptor.capture());

        Order captured = orderCaptor.getValue();
        assertNotNull(captured.getId());
        assertEquals(130.0, captured.getTotalCost());
        assertEquals(OrderStatus.CREATED, captured.getStatus());
        assertEquals(user, captured.getUser());
        assertNotNull(captured.getCreatedAt());
        assertEquals(2, captured.getItems().size());
    }

    @Test
    @DisplayName("updateOrderStatus should change status to target value and persist entity with all previous fields unchanged")
    void updateOrderStatus_Success() {
        Order existingOrder = createTestOrder(OrderStatus.CREATED);
        UUID orderId = existingOrder.getId();

        UpdateOrderStatusRequestDto dto = new UpdateOrderStatusRequestDto(
                orderId.toString(), "COMPLETED"
        );

        when(orderRepository.findById(orderId)).thenReturn(Optional.of(existingOrder));
        when(orderRepository.save(any(Order.class))).thenAnswer(i -> i.getArguments()[0]);

        Order updated = orderService.updateOrderStatus(dto);

        assertNotNull(updated);
        assertEquals(orderId, updated.getId());
        assertEquals(OrderStatus.COMPLETED, updated.getStatus());
        assertEquals(existingOrder.getCreatedAt(), updated.getCreatedAt());
        assertEquals(existingOrder.getTotalCost(), updated.getTotalCost());
        assertEquals(existingOrder.getUser(), updated.getUser());
        assertEquals(existingOrder.getItems(), updated.getItems());

        ArgumentCaptor<Order> orderCaptor = ArgumentCaptor.forClass(Order.class);
        verify(orderRepository).save(orderCaptor.capture());

        Order captured = orderCaptor.getValue();
        assertEquals(orderId, captured.getId());
        assertEquals(OrderStatus.COMPLETED, captured.getStatus());
        assertEquals(existingOrder.getCreatedAt(), captured.getCreatedAt());
        assertEquals(existingOrder.getTotalCost(), captured.getTotalCost());
        assertEquals(existingOrder.getUser(), captured.getUser());
        assertEquals(existingOrder.getItems(), captured.getItems());
    }

    @Test
    @DisplayName("deleteOrderById should invoke repository.deleteById()")
    void deleteOrderById_Success() {
        UUID orderId = UUID.randomUUID();
        doNothing().when(orderRepository).deleteById(orderId);

        orderService.deleteOrderById(orderId);

        verify(orderRepository).deleteById(orderId);
    }
}