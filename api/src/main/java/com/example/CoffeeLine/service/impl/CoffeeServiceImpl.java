package com.example.CoffeeLine.service.impl;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.domain.Coffee;
import com.example.CoffeeLine.dto.coffee.CoffeeRequestDto;
import com.example.CoffeeLine.dto.coffee.CoffeeUpdateRequestDto;
import com.example.CoffeeLine.service.CategoryService;
import com.example.CoffeeLine.service.CoffeeService;
import com.example.CoffeeLine.service.command.UpdateCoffeeCommand;
import com.example.CoffeeLine.service.exception.CoffeeNotFoundException;
import com.example.CoffeeLine.service.repository.CoffeeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class CoffeeServiceImpl implements CoffeeService {
    private final CoffeeRepository coffeeRepository;
    private final CategoryService categoryService;

    @Override
    public List<Coffee> getAllCoffees() {
        return coffeeRepository.findAll();
    }

    @Override
    public Coffee getCoffeeById(UUID id) {
        Optional<Coffee> coffee = coffeeRepository.findById(id);
        if (coffee.isEmpty()) {
            throw new CoffeeNotFoundException(id.toString());
        }
        return coffee.get();
    }

    @Override
    public Coffee createCoffee(CoffeeRequestDto coffeeRequestDto) {
        Category category = categoryService.getCategoryById(UUID.fromString(coffeeRequestDto.getCategoryId()));

        Coffee coffee = Coffee.builder()
                .name(coffeeRequestDto.getName())
                .description(coffeeRequestDto.getDescription())
                .imageUrl(coffeeRequestDto.getImageUrl())
                .price(coffeeRequestDto.getPrice())
                .category(category)
                .build();

        log.info("Creating coffee with id: {}", coffee.getId());
        return coffeeRepository.save(coffee);
    }

    @Override
    public Coffee updateCoffee(UpdateCoffeeCommand command) {
        Coffee coffee = getCoffeeById(command.id());
        if (command.name() != null) {
            coffee.setName(command.name());
        }
        if (command.descriptions() != null) {
            coffee.setDescription(command.descriptions());
        }
        if (command.price() != null) {
            coffee.setPrice(command.price());
        }
        if (command.imageUrl() != null) {
            coffee.setImageUrl(command.imageUrl());
        }
        if (command.categoryId() != null && !command.categoryId().isBlank()) {
            Category category = categoryService.getCategoryById(
                    UUID.fromString(command.categoryId()));
            coffee.setCategory(category);
        }

        log.info("Updating coffee with id: {}", coffee.getId());
        return coffeeRepository.save(coffee);
    }

    @Override
    public void deleteCoffeeById(UUID id) {
        log.info("Deleting coffee with id: {}", id);
        coffeeRepository.deleteById(id);
    }
}
