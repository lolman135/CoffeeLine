package com.example.CoffeeLine.service.command;

import java.util.UUID;

public record UpdateCoffeeCommand(
        UUID id,
        String name,
        String descriptions,
        Double price,
        String imageUrl,
        String categoryId
) {
}
