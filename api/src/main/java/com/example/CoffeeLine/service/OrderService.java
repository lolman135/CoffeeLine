package com.example.CoffeeLine.service;

import com.example.CoffeeLine.common.OrderStatus;
import com.example.CoffeeLine.domain.Order;
import com.example.CoffeeLine.dto.order.OrderRequestDto;
import com.example.CoffeeLine.dto.order.UpdateOrderStatusRequestDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;
import java.util.UUID;

public interface OrderService {
    Page<Order> getAllOrders(OrderStatus orderStatus, Pageable pageable);
    List<Order> getOrdersByUserId(UUID userId);
    Order getOrderById(UUID id);
    Order createOrder(OrderRequestDto orderRequestDto);
    Order updateOrderStatus(UpdateOrderStatusRequestDto updateOrderStatusRequestDto);
    void deleteOrderById(UUID id);
}
