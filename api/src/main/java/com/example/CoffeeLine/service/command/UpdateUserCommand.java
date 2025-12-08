package com.example.CoffeeLine.service.command;

import java.util.UUID;

public record UpdateUserCommand(
        UUID id,
        String name,
        String phoneNumber,
        String password
) {
}
