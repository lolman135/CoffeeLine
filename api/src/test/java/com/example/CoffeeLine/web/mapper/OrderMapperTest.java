package com.example.CoffeeLine.web.mapper;

import com.example.CoffeeLine.common.OrderStatus;
import com.example.CoffeeLine.domain.Coffee;
import com.example.CoffeeLine.domain.Order;
import com.example.CoffeeLine.domain.OrderItem;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.order.OrderItemResponseDto;
import com.example.CoffeeLine.dto.order.OrderResponseDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class OrderMapperTest {

    private final OrderMapper orderMapper = new OrderMapperImpl();

    @Test
    @DisplayName("toOrderResponseDto should map fields correctly including userId")
    void toOrderResponseDto_MapsCorrectly() {
        UUID orderId = UUID.randomUUID();
        UUID userId = UUID.randomUUID();
        LocalDateTime now = LocalDateTime.now();

        User user = new User();
        user.setId(userId);

        Order order = Order.builder()
                .id(orderId)
                .createdAt(now)
                .totalCost(100.0)
                .status(OrderStatus.CREATED)
                .user(user)
                .items(new HashSet<>())
                .build();

        OrderResponseDto dto = orderMapper.toOrderResponseDto(order);

        assertNotNull(dto);
        assertEquals(orderId.toString(), dto.getId());
        assertEquals(userId.toString(), dto.getUserId());
        assertEquals(100.0, dto.getTotalCost());
        assertEquals("CREATED", dto.getStatus());
        assertNotNull(dto.getCreatedAt());
    }

    @Test
    @DisplayName("toOrderItemResponseDto should map coffeeId correctly")
    void toOrderItemResponseDto_MapsCorrectly() {
        UUID itemId = UUID.randomUUID();
        UUID coffeeId = UUID.randomUUID();

        Coffee coffee = new Coffee();
        coffee.setId(coffeeId);

        OrderItem item = OrderItem.builder()
                .id(itemId)
                .quantity(5)
                .coffee(coffee)
                .build();

        OrderItemResponseDto dto = orderMapper.toOrderItemResponseDto(item);

        assertNotNull(dto);
        assertEquals(itemId.toString(), dto.getId());
        assertEquals(coffeeId.toString(), dto.getCoffeeId());
        assertEquals(5, dto.getQuantity());
    }

    @Test
    @DisplayName("toOrderResponseDto should return null for null input")
    void toOrderResponseDto_NullInput() {
        assertNull(orderMapper.toOrderResponseDto(null));
    }

    @Test
    @DisplayName("toOrderItemResponseDto should return null for null input")
    void toOrderItemResponseDto_NullInput() {
        assertNull(orderMapper.toOrderItemResponseDto(null));
    }
}