package com.example.CoffeeLine.service;

import com.example.CoffeeLine.domain.Coffee;
import com.example.CoffeeLine.dto.coffee.CoffeeRequestDto;
import com.example.CoffeeLine.dto.coffee.CoffeeUpdateRequestDto;
import com.example.CoffeeLine.service.command.UpdateCoffeeCommand;

import java.util.List;
import java.util.UUID;

public interface CoffeeService {
    List<Coffee> getAllCoffees();
    Coffee getCoffeeById(UUID id);
    Coffee createCoffee(CoffeeRequestDto coffeeRequestDto);
    Coffee updateCoffee(UpdateCoffeeCommand command);
    void deleteCoffeeById(UUID id);
}
