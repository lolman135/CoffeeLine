package com.example.CoffeeLine.web;

import com.example.CoffeeLine.common.OrderStatus;
import com.example.CoffeeLine.domain.Order;
import com.example.CoffeeLine.dto.order.*;
import com.example.CoffeeLine.security.CustomUserDetailsService;
import com.example.CoffeeLine.service.JwtService;
import com.example.CoffeeLine.service.OrderService;
import com.example.CoffeeLine.web.mapper.OrderMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = OrderController.class)
@AutoConfigureMockMvc(addFilters = false)
class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private OrderService orderService;

    @MockitoBean
    private OrderMapper orderMapper;

    @MockitoBean
    private JwtService jwtService;

    @MockitoBean
    private CustomUserDetailsService customUserDetailsService;

    private final UUID orderId = UUID.randomUUID();
    private final UUID userId = UUID.randomUUID();
    private final UUID coffeeId = UUID.randomUUID();
    private final Set<OrderItemResponseDto> itemResponses = Set.of(
            new OrderItemResponseDto(UUID.randomUUID().toString(), coffeeId.toString(), "Cappuccino", 2)
    );
    private final OrderResponseDto orderResponseDto = new OrderResponseDto(
            orderId.toString(),
            "2025-01-01T12:00:00",
            150.0,
            "CREATED",
            userId.toString(),
            itemResponses
    );

    private Set<OrderItemRequestDto> createValidOrderItems() {
        return Set.of(
                new OrderItemRequestDto(coffeeId.toString(), 3)
        );
    }

    @Test
    @DisplayName("getAllOrders should return 200 filtering by status")
    void getAllOrders_Returns200WithStatus() throws Exception {
        Order domainOrder = mock(Order.class);

        // Mock getAllOrders with Pageable
        org.springframework.data.domain.Pageable pageable = org.springframework.data.domain.PageRequest.of(0, 20);
        when(orderService.getAllOrders(eq(OrderStatus.COMPLETED), any(org.springframework.data.domain.Pageable.class)))
                .thenReturn(new org.springframework.data.domain.PageImpl<>(java.util.List.of(domainOrder), pageable, 1));
        when(orderMapper.toOrderResponseDto(domainOrder)).thenReturn(orderResponseDto);

        // For pageable response, assert on content size instead of $.orders
        mockMvc.perform(get("/api/v1/orders")
                        .param("status", "COMPLETED"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.content.length()", org.hamcrest.Matchers.greaterThanOrEqualTo(1)));

        verify(orderService).getAllOrders(eq(OrderStatus.COMPLETED), any(org.springframework.data.domain.Pageable.class));
    }

    @Test
    @DisplayName("getAllOrders should use null when no status parameter provided")
    void getAllOrders_UsesNullForStatus() throws Exception {
        Order domainOrder = mock(Order.class);

        org.springframework.data.domain.Pageable pageable = org.springframework.data.domain.PageRequest.of(0, 20);
        when(orderService.getAllOrders(isNull(), any(org.springframework.data.domain.Pageable.class)))
                .thenReturn(new org.springframework.data.domain.PageImpl<>(java.util.List.of(domainOrder), pageable, 1));
        when(orderMapper.toOrderResponseDto(domainOrder)).thenReturn(orderResponseDto);

        mockMvc.perform(get("/api/v1/orders"))
                .andExpect(status().isOk());

        verify(orderService).getAllOrders(isNull(), any(org.springframework.data.domain.Pageable.class));
    }

    @Test
    @DisplayName("getOrdersByUserId should return 200 and list of orders for a user")
    void getOrdersByUserId_Returns200() throws Exception {
        Order domainOrder = mock(Order.class);

        when(orderService.getOrdersByUserId(userId)).thenReturn(List.of(domainOrder));
        when(orderMapper.toOrderResponseDto(domainOrder)).thenReturn(orderResponseDto);

        mockMvc.perform(get("/api/v1/orders/by-userId/{id}", userId))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.orders.size()").value(1))
                .andExpect(jsonPath("$.orders[0].userId").value(userId.toString()));

        verify(orderService).getOrdersByUserId(userId);
    }

    @Test
    @DisplayName("getOrderById should return 200 and order details")
    void getOrderById_Returns200() throws Exception {
        Order domainOrder = mock(Order.class);

        when(orderService.getOrderById(orderId)).thenReturn(domainOrder);
        when(orderMapper.toOrderResponseDto(domainOrder)).thenReturn(orderResponseDto);

        mockMvc.perform(get("/api/v1/orders/{id}", orderId))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(orderId.toString()))
                .andExpect(jsonPath("$.status").value("CREATED"))
                .andExpect(jsonPath("$.items.size()").value(1));

        verify(orderService).getOrderById(orderId);
    }

    @Test
    @DisplayName("createOrder should return 201 and created order when input is valid")
    void createOrder_Success() throws Exception {
        OrderRequestDto request = new OrderRequestDto(
                userId.toString(),
                createValidOrderItems()
        );

        Order domainOrder = mock(Order.class);
        when(orderService.createOrder(any(OrderRequestDto.class))).thenReturn(domainOrder);
        when(orderMapper.toOrderResponseDto(domainOrder)).thenReturn(orderResponseDto);

        mockMvc.perform(post("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.userId").value(userId.toString()));

        verify(orderService).createOrder(any(OrderRequestDto.class));
    }

    @Test
    @DisplayName("createOrder should return 400 when OrderRequestDto is invalid")
    void createOrder_InvalidOrderDto_Returns400() throws Exception {
        OrderRequestDto invalidRequest = new OrderRequestDto(
                "", // Invalid: NotBlank
                Collections.emptySet() // Invalid: Size(min = 1)
        );

        mockMvc.perform(post("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        verify(orderService, never()).createOrder(any());
    }

    @Test
    @DisplayName("createOrder should return 400 when OrderItemRequestDto is invalid")
    void createOrder_InvalidOrderItemDto_Returns400() throws Exception {
        Set<OrderItemRequestDto> invalidItems = Set.of(
                new OrderItemRequestDto("invalid-uuid-length", 0) // Invalid: Size(36) and Min(1)
        );
        OrderRequestDto request = new OrderRequestDto(
                userId.toString(),
                invalidItems
        );

        mockMvc.perform(post("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());

        verify(orderService, never()).createOrder(any());
    }

    @Test
    @DisplayName("updateOrderStatus should return 200 and updated order")
    void updateOrderStatus_Success() throws Exception {
        UpdateOrderStatusRequestDto request = new UpdateOrderStatusRequestDto(
                orderId.toString(),
                "COMPLETED"
        );

        Order domainOrder = mock(Order.class);
        when(orderService.updateOrderStatus(any(UpdateOrderStatusRequestDto.class))).thenReturn(domainOrder);
        when(orderMapper.toOrderResponseDto(domainOrder)).thenReturn(orderResponseDto);

        mockMvc.perform(patch("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("CREATED"));

        ArgumentCaptor<UpdateOrderStatusRequestDto> captor = ArgumentCaptor.forClass(UpdateOrderStatusRequestDto.class);
        verify(orderService).updateOrderStatus(captor.capture());

        assertEquals("COMPLETED", captor.getValue().getStatus());
    }

    @Test
    @DisplayName("updateOrderStatus should return 400 when status is invalid")
    void updateOrderStatus_InvalidStatus_Returns400() throws Exception {
        UpdateOrderStatusRequestDto invalidRequest = new UpdateOrderStatusRequestDto(
                orderId.toString(),
                "SHIPPED" // Invalid: Not in OrderStatus enum
        );

        mockMvc.perform(patch("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        verify(orderService, never()).updateOrderStatus(any());
    }

    @Test
    @DisplayName("deleteOrder should return 204 No Content")
    void deleteOrder_Returns204() throws Exception {
        doNothing().when(orderService).deleteOrderById(orderId);

        mockMvc.perform(delete("/api/v1/orders/{id}", orderId))
                .andExpect(status().isNoContent());

        verify(orderService).deleteOrderById(orderId);
    }
}