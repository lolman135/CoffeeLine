package com.example.CoffeeLine;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.dto.category.CategoryRequestDto;
import com.example.CoffeeLine.service.CategoryService;
import com.example.CoffeeLine.service.repository.CategoryRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WithMockUser(username = "admin", roles = {"ADMIN"})
@DisplayName("INTEGRATION TESTS: Category Controller")
public class CategoryIT extends BaseIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @SpyBean
    private CategoryService categoryService;

    @BeforeEach
    void setUp() {
        categoryRepository.deleteAll();
    }

    @Test
    @DisplayName("[GET] /api/v1/categories - Should return list of all categories")
    void shouldGetAllCategories() throws Exception {
        createAndSaveCategory("Arabica");
        createAndSaveCategory("Robusta");

        mockMvc.perform(get("/api/v1/categories"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.categories", hasSize(2)))
                .andExpect(jsonPath("$.categories[0].id").exists())
                .andExpect(jsonPath("$.categories[0].name").value("Arabica"))
                .andExpect(jsonPath("$.categories[1].id").exists())
                .andExpect(jsonPath("$.categories[1].name").value("Robusta"));

        verify(categoryService).getAllCategories();
    }

    @Test
    @DisplayName("[GET] /api/v1/categories/{id} - Should return category details")
    void shouldGetCategoryById() throws Exception {
        Category savedCategory = createAndSaveCategory("Latte");

        mockMvc.perform(get("/api/v1/categories/{id}", savedCategory.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(savedCategory.getId().toString()))
                .andExpect(jsonPath("$.name").value("Latte"));

        verify(categoryService).getCategoryById(savedCategory.getId());
    }

    @Test
    @DisplayName("[GET] /api/v1/categories/{id} - Should return 404 if category not found")
    void shouldReturn404WhenCategoryNotFound() throws Exception {
        mockMvc.perform(get("/api/v1/categories/{id}", UUID.randomUUID()))
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("[POST] /api/v1/categories - Should create new category")
    void shouldCreateCategory() throws Exception {
        CategoryRequestDto request = new CategoryRequestDto("Espresso");

        mockMvc.perform(post("/api/v1/categories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.name").value("Espresso"));

        verify(categoryService).createCategory(any(Category.class));
    }

    @Test
    @DisplayName("[POST] /api/v1/categories - Should return 400 for invalid input")
    void shouldReturn400OnCreateWithInvalidInput() throws Exception {
        CategoryRequestDto invalidRequest = new CategoryRequestDto("");

        mockMvc.perform(post("/api/v1/categories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.detail").value("Request validation failed"))
                .andExpect(jsonPath("$.validationDetails").isArray());
    }

    @Test
    @DisplayName("[DELETE] /api/v1/categories/{id} - Should delete category")
    void shouldDeleteCategory() throws Exception {
        Category savedCategory = createAndSaveCategory("DeleteMe");

        mockMvc.perform(delete("/api/v1/categories/{id}", savedCategory.getId()))
                .andExpect(status().isNoContent());

        assertFalse(categoryRepository.findById(savedCategory.getId()).isPresent());

        verify(categoryService).deleteCategoryById(savedCategory.getId());
    }

    private Category createAndSaveCategory(String name) {
        Category category = new Category();
        category.setName(name);
        return categoryRepository.save(category);
    }
}