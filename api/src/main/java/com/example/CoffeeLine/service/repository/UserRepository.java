package com.example.CoffeeLine.service.repository;

import com.example.CoffeeLine.domain.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);

    @EntityGraph(attributePaths = {"orders", "orders.items"})
    Optional<User> findById(UUID id);

    @EntityGraph(attributePaths = {"orders", "orders.items"})
    Optional<User> findOneByEmail(String email);
}
