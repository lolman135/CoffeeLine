package com.example.CoffeeLine.web;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.dto.category.CategoryRequestDto;
import com.example.CoffeeLine.dto.category.CategoryResponseDto;
import com.example.CoffeeLine.security.CustomUserDetailsService;
import com.example.CoffeeLine.service.CategoryService;
import com.example.CoffeeLine.service.JwtService;
import com.example.CoffeeLine.web.mapper.CategoryMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = CategoryController.class)
@AutoConfigureMockMvc(addFilters = false)
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private CategoryService categoryService;

    @MockitoBean
    private CategoryMapper categoryMapper;

    @MockitoBean
    private JwtService jwtService;

    @MockitoBean
    private CustomUserDetailsService customUserDetailsService;

    @Test
    @DisplayName("getAllCategories should return 200 and wrapper DTO with list of categories")
    void getAllCategories_ReturnsList() throws Exception {
        UUID id = UUID.randomUUID();
        String name = "Hot Drinks";
        Category category = new Category();
        category.setId(id);
        category.setName(name);

        CategoryResponseDto responseDto = new CategoryResponseDto(id.toString(), name);

        when(categoryService.getAllCategories()).thenReturn(List.of(category));
        when(categoryMapper.toCategoryResponseDto(category)).thenReturn(responseDto);

        mockMvc.perform(get("/api/v1/categories"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.categories").isArray())
                .andExpect(jsonPath("$.categories.size()").value(1))
                .andExpect(jsonPath("$.categories[0].id").value(id.toString()))
                .andExpect(jsonPath("$.categories[0].name").value(name));

        verify(categoryService).getAllCategories();
    }

    @Test
    @DisplayName("getCategoryById should return 200 and correct category data")
    void getCategoryById_Success() throws Exception {
        UUID id = UUID.randomUUID();
        String name = "Desserts";
        Category category = new Category();
        category.setId(id);
        category.setName(name);

        CategoryResponseDto responseDto = new CategoryResponseDto(id.toString(), name);

        when(categoryService.getCategoryById(id)).thenReturn(category);
        when(categoryMapper.toCategoryResponseDto(category)).thenReturn(responseDto);

        mockMvc.perform(get("/api/v1/categories/{id}", id))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(id.toString()))
                .andExpect(jsonPath("$.name").value(name));

        verify(categoryService).getCategoryById(id);
    }

    @Test
    @DisplayName("createCategory should return 201 when input is valid (len >= 2)")
    void createCategory_Success() throws Exception {
        String name = "Tea"; // 3 chars -> valid
        CategoryRequestDto requestDto = new CategoryRequestDto(name);

        UUID id = UUID.randomUUID();
        Category category = new Category();
        category.setId(id);
        category.setName(name);

        CategoryResponseDto responseDto = new CategoryResponseDto(id.toString(), name);

        when(categoryMapper.toCategory(any(CategoryRequestDto.class))).thenReturn(category);
        when(categoryService.createCategory(any(Category.class))).thenReturn(category);
        when(categoryMapper.toCategoryResponseDto(any(Category.class))).thenReturn(responseDto);

        mockMvc.perform(post("/api/v1/categories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(requestDto)))
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(id.toString()))
                .andExpect(jsonPath("$.name").value(name));

        verify(categoryService).createCategory(any(Category.class));
    }

    @Test
    @DisplayName("createCategory should return 400 when name fails validation (@Size or @NotBlank)")
    void createCategory_InvalidInput_Returns400() throws Exception {
        // 1. Empty name -> @NotBlank fails
        CategoryRequestDto emptyRequest = new CategoryRequestDto("");
        mockMvc.perform(post("/api/v1/categories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(emptyRequest)))
                .andExpect(status().isBadRequest());

        // 2. Too short (1 char) -> @Size(min=2) fails
        CategoryRequestDto shortRequest = new CategoryRequestDto("A");
        mockMvc.perform(post("/api/v1/categories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(shortRequest)))
                .andExpect(status().isBadRequest());

        verify(categoryService, never()).createCategory(any());
    }

    @Test
    @DisplayName("deleteCategoryById should return 204")
    void deleteCategoryById_Success() throws Exception {
        UUID id = UUID.randomUUID();
        doNothing().when(categoryService).deleteCategoryById(id);

        mockMvc.perform(delete("/api/v1/categories/{id}", id))
                .andExpect(status().isNoContent());

        verify(categoryService).deleteCategoryById(id);
    }
}