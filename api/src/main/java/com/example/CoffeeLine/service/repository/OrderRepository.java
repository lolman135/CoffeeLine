package com.example.CoffeeLine.service.repository;

import com.example.CoffeeLine.common.OrderStatus;
import com.example.CoffeeLine.domain.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {
    List<Order> getOrdersByStatus(OrderStatus orderStatus);
    List<Order> getOrdersByUserId(UUID userId);

    Page<Order> getOrdersByStatus(OrderStatus status, Pageable pageable);

    @EntityGraph(attributePaths = {
            "items",
            "items.coffee",
            "items.coffee.category",
            "user",
            "user.roles"
    })
    @Query("select o from Order o where o.user.id = :userId")
    List<Order> findByUserIdWithDetails(UUID userId);
}
