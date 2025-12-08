package com.example.CoffeeLine.web.mapper;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.domain.Coffee;
import com.example.CoffeeLine.dto.coffee.CoffeeResponseDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class CoffeeMapperTest {

    private final CoffeeMapper coffeeMapper = new CoffeeMapperImpl();

    @Test
    @DisplayName("toCoffeeResponseDto should map fields and categoryId correctly")
    void toCoffeeResponseDto_MapsCorrectly() {
        UUID coffeeId = UUID.randomUUID();
        UUID categoryId = UUID.randomUUID();

        Category category = new Category();
        category.setId(categoryId);

        Coffee coffee = Coffee.builder()
                .id(coffeeId)
                .name("Latte")
                .description("Tasty")
                .price(50.0)
                .imageUrl("img.png")
                .category(category)
                .build();

        CoffeeResponseDto dto = coffeeMapper.toCoffeeResponseDto(coffee);

        assertNotNull(dto);
        assertEquals(coffeeId.toString(), dto.getId());
        assertEquals("Latte", dto.getName());
        assertEquals("Tasty", dto.getDescription());
        assertEquals(50.0, dto.getPrice());
        assertEquals("img.png", dto.getImageUrl());
        assertEquals(categoryId.toString(), dto.getCategoryId());
    }

    @Test
    @DisplayName("toCoffeeResponseDto should return null when input is null")
    void toCoffeeResponseDto_NullInput() {
        assertNull(coffeeMapper.toCoffeeResponseDto(null));
    }
}