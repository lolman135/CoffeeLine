package com.example.CoffeeLine.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "name", length = 25, nullable = false)
    private String name;

    @OneToMany(mappedBy = "category", orphanRemoval = true)
    private List<Coffee> coffees = new ArrayList<>();
}
