package com.example.CoffeeLine.service;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.service.exception.CategoryNotFoundException;
import com.example.CoffeeLine.service.impl.CategoryServiceImpl;
import com.example.CoffeeLine.service.repository.CategoryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest(classes = CategoryServiceImpl.class)
class CategoryServiceImplTest {

    @Autowired
    private CategoryService categoryService;

    @MockitoBean
    private CategoryRepository categoryRepository;

    private Category createTestCategory() {
        Category category = new Category();
        category.setId(UUID.randomUUID());
        category.setName("Coffee");
        return category;
    }

    @Test
    @DisplayName("getAllCategories should return list of all categories")
    void getAllCategories_Success() {
        Category cat1 = createTestCategory();
        Category cat2 = createTestCategory();
        cat2.setId(UUID.randomUUID());
        cat2.setName("Desserts");

        when(categoryRepository.findAll()).thenReturn(List.of(cat1, cat2));

        List<Category> result = categoryService.getAllCategories();

        assertEquals(2, result.size());
        assertEquals(cat1.getId(), result.get(0).getId());
        assertEquals(cat1.getName(), result.get(0).getName());
        assertEquals(cat2.getId(), result.get(1).getId());
        assertEquals(cat2.getName(), result.get(1).getName());

        verify(categoryRepository).findAll();
    }

    @Test
    @DisplayName("getCategoryById should return category when found")
    void getCategoryById_Success() {
        Category category = createTestCategory();
        UUID id = category.getId();

        when(categoryRepository.findById(id)).thenReturn(Optional.of(category));

        Category result = categoryService.getCategoryById(id);

        assertNotNull(result);
        assertEquals(category.getId(), result.getId());
        assertEquals(category.getName(), result.getName());
    }

    @Test
    @DisplayName("getCategoryById should throw exception when category not found")
    void getCategoryById_NotFound() {
        UUID id = UUID.randomUUID();
        when(categoryRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(CategoryNotFoundException.class, () -> categoryService.getCategoryById(id));
    }

    @Test
    @DisplayName("createCategory should save and return category")
    void createCategory_Success() {
        Category category = createTestCategory();

        when(categoryRepository.save(any(Category.class))).thenReturn(category);

        Category created = categoryService.createCategory(category);

        assertNotNull(created);
        assertEquals(category.getId(), created.getId());
        assertEquals(category.getName(), created.getName());

        ArgumentCaptor<Category> categoryCaptor = ArgumentCaptor.forClass(Category.class);
        verify(categoryRepository).save(categoryCaptor.capture());

        Category captured = categoryCaptor.getValue();
        assertEquals(category.getName(), captured.getName());
    }

    @Test
    @DisplayName("deleteCategoryById should call repository delete method")
    void deleteCategoryById_Success() {
        UUID id = UUID.randomUUID();
        doNothing().when(categoryRepository).deleteById(id);

        categoryService.deleteCategoryById(id);

        verify(categoryRepository).deleteById(id);
    }
}