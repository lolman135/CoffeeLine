package com.example.CoffeeLine.web.mapper;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.dto.category.CategoryRequestDto;
import com.example.CoffeeLine.dto.category.CategoryResponseDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class CategoryMapperTest {

    private final CategoryMapper categoryMapper = new CategoryMapperImpl();

    @Test
    @DisplayName("toCategoryResponseDto should map id and name correctly")
    void toCategoryResponseDto_Success() {
        UUID id = UUID.randomUUID();
        Category category = new Category();
        category.setId(id);
        category.setName("Drinks");

        CategoryResponseDto dto = categoryMapper.toCategoryResponseDto(category);

        assertNotNull(dto);
        assertEquals(id.toString(), dto.getId());
        assertEquals("Drinks", dto.getName());
    }

    @Test
    @DisplayName("toCategory should map request dto to entity")
    void toCategory_Success() {
        CategoryRequestDto requestDto = new CategoryRequestDto("Desserts");

        Category category = categoryMapper.toCategory(requestDto);

        assertNotNull(category);
        assertEquals("Desserts", category.getName());
    }

    @Test
    @DisplayName("should return null for null inputs")
    void nullInputs_ReturnNull() {
        assertNull(categoryMapper.toCategoryResponseDto(null));
        assertNull(categoryMapper.toCategory(null));
    }
}