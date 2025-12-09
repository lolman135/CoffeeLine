package com.example.CoffeeLine;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.dto.category.CategoryRequestDto;
import com.example.CoffeeLine.service.CategoryService;
import com.example.CoffeeLine.service.impl.CategoryServiceImpl;
import com.example.CoffeeLine.service.repository.CategoryRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Primary;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@WithMockUser(username = "admin", roles = "ADMIN")
@DisplayName("INTEGRATION TESTS: Category Controller")
class CategoryIT extends BaseIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void clearDb() {
        categoryRepository.deleteAll();
    }

    @Test
    @DisplayName("[GET] /api/v1/categories - returns list")
    void shouldGetAllCategories() throws Exception {
        saveCategory("Arabica");
        saveCategory("Robusta");

        mockMvc.perform(get("/api/v1/categories"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.categories", hasSize(2)))
                .andExpect(jsonPath("$.categories[0].name").value("Arabica"))
                .andExpect(jsonPath("$.categories[1].name").value("Robusta"));

    }

    @Test
    @DisplayName("[GET] /api/v1/categories/{id} - returns category")
    void shouldGetCategoryById() throws Exception {
        Category saved = saveCategory("Latte");

        mockMvc.perform(get("/api/v1/categories/{id}", saved.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(saved.getId().toString()))
                .andExpect(jsonPath("$.name").value("Latte"));

    }

    @Test
    @DisplayName("[GET] /api/v1/categories/{id} - returns 404 when missing")
    void shouldReturn404IfNotFound() throws Exception {
        mockMvc.perform(get("/api/v1/categories/{id}", UUID.randomUUID()))
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("[POST] /api/v1/categories - creates category")
    void shouldCreateCategory() throws Exception {
        CategoryRequestDto request = new CategoryRequestDto("Espresso");

        mockMvc.perform(post("/api/v1/categories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Espresso"))
                .andExpect(jsonPath("$.id").exists());

    }

    @Test
    @DisplayName("[POST] /api/v1/categories - validation error")
    void shouldReturn400OnInvalidCreate() throws Exception {
        CategoryRequestDto invalid = new CategoryRequestDto("");

        mockMvc.perform(post("/api/v1/categories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalid)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.detail").value("Request validation failed"))
                .andExpect(jsonPath("$.validationDetails").isArray());
    }

    @Test
    @DisplayName("[DELETE] /api/v1/categories/{id} - deletes category")
    void shouldDeleteCategory() throws Exception {
        Category saved = saveCategory("DeleteMe");

        mockMvc.perform(delete("/api/v1/categories/{id}", saved.getId()))
                .andExpect(status().isNoContent());

    }

    private Category saveCategory(String name) {
        Category c = new Category();
        c.setName(name);
        return categoryRepository.save(c);
    }
}
