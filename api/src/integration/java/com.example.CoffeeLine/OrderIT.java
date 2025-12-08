package com.example.CoffeeLine;

import com.example.CoffeeLine.common.OrderStatus;
import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.*;
import com.example.CoffeeLine.dto.order.OrderItemRequestDto;
import com.example.CoffeeLine.dto.order.OrderRequestDto;
import com.example.CoffeeLine.dto.order.UpdateOrderStatusRequestDto;
import com.example.CoffeeLine.service.OrderService;
import com.example.CoffeeLine.service.repository.CategoryRepository;
import com.example.CoffeeLine.service.repository.CoffeeRepository;
import com.example.CoffeeLine.service.repository.OrderRepository;
import com.example.CoffeeLine.service.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WithMockUser(username = "admin", roles = {"ADMIN"})
@DisplayName("INTEGRATION TESTS: Order Controller")
public class OrderIT extends BaseIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CoffeeRepository coffeeRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @SpyBean
    private OrderService orderService;

    @BeforeEach
    void setUp() {
        orderRepository.deleteAll();
        coffeeRepository.deleteAll();
        categoryRepository.deleteAll();
        userRepository.deleteAll();
    }

    @Test
    @DisplayName("[GET] /api/v1/orders - Should return list of all orders with full fields")
    void shouldGetAllOrders() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();
        createAndSaveOrder(user, coffee, OrderStatus.CREATED);
        createAndSaveOrder(user, coffee, OrderStatus.COMPLETED);

        mockMvc.perform(get("/api/v1/orders"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.orders", hasSize(2)))
                .andExpect(jsonPath("$.orders[0].id").exists())
                .andExpect(jsonPath("$.orders[0].status").exists())
                .andExpect(jsonPath("$.orders[0].totalCost").value(coffee.getPrice() * 2))
                .andExpect(jsonPath("$.orders[0].userId").value(user.getId().toString()))
                .andExpect(jsonPath("$.orders[0].items").isArray())
                .andExpect(jsonPath("$.orders[0].items[0].coffeeId").value(coffee.getId().toString()))
                .andExpect(jsonPath("$.orders[0].items[0].quantity").value(2));

        verify(orderService).getAllOrders(null);
    }

    @Test
    @DisplayName("[GET] /api/v1/orders?status={status} - Should filter orders by status")
    void shouldGetOrdersByStatus() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();
        createAndSaveOrder(user, coffee, OrderStatus.CREATED);
        createAndSaveOrder(user, coffee, OrderStatus.CANCELLED);

        mockMvc.perform(get("/api/v1/orders")
                        .param("status", "CREATED"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.orders", hasSize(1)))
                .andExpect(jsonPath("$.orders[0].status").value("CREATED"));

        verify(orderService).getAllOrders(OrderStatus.CREATED);
    }

    @Test
    @DisplayName("[GET] /api/v1/orders/by-userId/{userId} - Should return orders for specific user")
    void shouldGetOrdersByUserId() throws Exception {
        User targetUser = createAndSaveUser();
        User otherUser = userRepository.save(User.builder()
                .email("other@test.com")
                .name("Other")
                .password("pass")
                .phoneNumber("0990000000")
                .roles(Set.of(Role.ROLE_USER))
                .build());
        Coffee coffee = createAndSaveCoffee();

        createAndSaveOrder(targetUser, coffee, OrderStatus.CREATED);
        createAndSaveOrder(otherUser, coffee, OrderStatus.CREATED);

        mockMvc.perform(get("/api/v1/orders/by-userId/{userId}", targetUser.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.orders", hasSize(1)))
                .andExpect(jsonPath("$.orders[0].userId").value(targetUser.getId().toString()));

        verify(orderService).getOrdersByUserId(targetUser.getId());
    }

    @Test
    @DisplayName("[GET] /api/v1/orders/{id} - Should return full order details")
    void shouldGetOrderById() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();
        Order savedOrder = createAndSaveOrder(user, coffee, OrderStatus.CREATED);

        mockMvc.perform(get("/api/v1/orders/{id}", savedOrder.getId()))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(savedOrder.getId().toString()))
                .andExpect(jsonPath("$.status").value("CREATED"))
                .andExpect(jsonPath("$.totalCost").value(coffee.getPrice() * 2))
                .andExpect(jsonPath("$.createdAt").exists())
                .andExpect(jsonPath("$.userId").value(user.getId().toString()))
                .andExpect(jsonPath("$.items", hasSize(1)))
                .andExpect(jsonPath("$.items[0].coffeeId").value(coffee.getId().toString()))
                .andExpect(jsonPath("$.items[0].quantity").value(2));

        verify(orderService).getOrderById(savedOrder.getId());
    }

    @Test
    @DisplayName("[GET] /api/v1/orders/{id} - Should return 404 if order not found")
    void shouldReturn404WhenOrderNotFound() throws Exception {
        mockMvc.perform(get("/api/v1/orders/{id}", UUID.randomUUID()))
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("[POST] /api/v1/orders - Should create new order and return full DTO")
    void shouldCreateOrder() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();

        OrderItemRequestDto itemRequest = new OrderItemRequestDto(coffee.getId().toString(), 3);
        OrderRequestDto orderRequest = new OrderRequestDto(user.getId().toString(), Set.of(itemRequest));

        mockMvc.perform(post("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(orderRequest)))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.status").value("CREATED"))
                .andExpect(jsonPath("$.totalCost").value(coffee.getPrice() * 3))
                .andExpect(jsonPath("$.userId").value(user.getId().toString()))
                .andExpect(jsonPath("$.items", hasSize(1)))
                .andExpect(jsonPath("$.items[0].coffeeId").value(coffee.getId().toString()))
                .andExpect(jsonPath("$.items[0].quantity").value(3));

        verify(orderService).createOrder(any(OrderRequestDto.class));
    }

    @Test
    @DisplayName("[POST] /api/v1/orders - Should return 400 for invalid input")
    void shouldReturn400OnCreateWithInvalidInput() throws Exception {
        OrderRequestDto invalidRequest = new OrderRequestDto("", null);

        mockMvc.perform(post("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.validationDetails").isArray());
    }

    @Test
    @DisplayName("[PUT] /api/v1/orders - Should update order status and return updated DTO")
    void shouldUpdateOrderStatus() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();
        Order savedOrder = createAndSaveOrder(user, coffee, OrderStatus.CREATED);

        UpdateOrderStatusRequestDto updateRequest = new UpdateOrderStatusRequestDto(
                savedOrder.getId().toString(),
                "COMPLETED"
        );

        mockMvc.perform(put("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updateRequest)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(savedOrder.getId().toString()))
                .andExpect(jsonPath("$.status").value("COMPLETED"))
                .andExpect(jsonPath("$.totalCost").value(savedOrder.getTotalCost()))
                .andExpect(jsonPath("$.userId").value(user.getId().toString()));

        Order updatedOrderInDb = orderRepository.findById(savedOrder.getId()).orElseThrow();
        assertEquals(OrderStatus.COMPLETED, updatedOrderInDb.getStatus());

        verify(orderService).updateOrderStatus(any(UpdateOrderStatusRequestDto.class));
    }

    @Test
    @DisplayName("[PUT] /api/v1/orders - Should return 400 for invalid status")
    void shouldReturn400OnUpdateWithInvalidStatus() throws Exception {
        UpdateOrderStatusRequestDto invalidRequest = new UpdateOrderStatusRequestDto(
                UUID.randomUUID().toString(),
                "INVALID_STATUS"
        );

        mockMvc.perform(put("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.validationDetails").isArray());
    }

    @Test
    @DisplayName("[DELETE] /api/v1/orders/{id} - Should delete order")
    void shouldDeleteOrder() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();
        Order savedOrder = createAndSaveOrder(user, coffee, OrderStatus.CREATED);

        mockMvc.perform(delete("/api/v1/orders/{id}", savedOrder.getId()))
                .andExpect(status().isNoContent());

        assertFalse(orderRepository.findById(savedOrder.getId()).isPresent());

        verify(orderService).deleteOrderById(savedOrder.getId());
    }

    private User createAndSaveUser() {
        return userRepository.save(User.builder()
                .email("test" + UUID.randomUUID() + "@example.com")
                .name("Test User")
                .phoneNumber("0991234567")
                .password("encodedPass")
                .roles(Set.of(Role.ROLE_USER))
                .build());
    }

    private Coffee createAndSaveCoffee() {
        Category category = new Category();
        category.setName("Test Category");
        Category savedCategory = categoryRepository.save(category);
        return coffeeRepository.save(Coffee.builder()
                .name("Test Coffee")
                .description("Desc")
                .price(50.0)
                .imageUrl("url")
                .category(savedCategory)
                .build());
    }

    private Order createAndSaveOrder(User user, Coffee coffee, OrderStatus status) {
        Order order = Order.builder()
                .user(user)
                .status(status)
                .createdAt(LocalDateTime.now())
                .totalCost(coffee.getPrice() * 2)
                .build();

        OrderItem item = OrderItem.builder()
                .order(order)
                .coffee(coffee)
                .quantity(2)
                .build();

        order.setItems(Set.of(item));
        return orderRepository.save(order);
    }
}