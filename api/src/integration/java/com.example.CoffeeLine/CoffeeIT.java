package com.example.CoffeeLine;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.domain.Coffee;
import com.example.CoffeeLine.dto.coffee.CoffeeRequestDto;
import com.example.CoffeeLine.dto.coffee.CoffeeUpdateRequestDto;
import com.example.CoffeeLine.service.CoffeeService;
import com.example.CoffeeLine.service.repository.CategoryRepository;
import com.example.CoffeeLine.service.repository.CoffeeRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WithMockUser(username = "admin", roles = {"ADMIN"})
@DisplayName("INTEGRATION TESTS: Coffee Controller")
public class CoffeeIT extends BaseIT {

    @Autowired private MockMvc mockMvc;
    @Autowired private CoffeeRepository coffeeRepository;
    @Autowired private CategoryRepository categoryRepository;
    @Autowired private ObjectMapper objectMapper;
    @Autowired private ApplicationContext applicationContext;

    @BeforeEach
    void setUp() {
        coffeeRepository.deleteAll();
        categoryRepository.deleteAll();

        CoffeeService real = applicationContext.getBean(CoffeeService.class);

    }

    // ---------------------- TESTS ------------------------

    @Test
    @DisplayName("[GET] /api/v1/coffees — list all")
    void shouldGetAllCoffees() throws Exception {
        Category category = createCategory("Arabica");
        createCoffee("Espresso", 25.0, category);
        createCoffee("Latte", 35.0, category);

        mockMvc.perform(get("/api/v1/coffees"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.coffees", hasSize(2)))
                .andExpect(jsonPath("$.coffees[0].id").exists())
                .andExpect(jsonPath("$.coffees[0].name").value("Espresso"))
                .andExpect(jsonPath("$.coffees[0].category").value(category.getName()));

    }

    @Test
    @DisplayName("[GET] /api/v1/coffees/{id}")
    void shouldGetCoffeeById() throws Exception {
        Category category = createCategory("Robusta");
        Coffee saved = createCoffee("Cappuccino", 30.0, category);

        mockMvc.perform(get("/api/v1/coffees/{id}", saved.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(saved.getId().toString()))
                .andExpect(jsonPath("$.name").value("Cappuccino"))
                .andExpect(jsonPath("$.category").value(category.getName()));


    }

    @Test
    @DisplayName("[POST] /api/v1/coffees — create coffee")
    void shouldCreateCoffee() throws Exception {
        Category category = createCategory("Blend");

        CoffeeRequestDto req = new CoffeeRequestDto(
                "Mocha",
                "Chocolate coffee",
                "http://mocha.img",
                40.0,
                category.getId().toString()
        );

        mockMvc.perform(post("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Mocha"))
                .andExpect(jsonPath("$.category").value(category.getName()));

    }

    @Test
    @DisplayName("[PUT] /api/v1/coffees/{id} — update coffee")
    void shouldUpdateCoffee() throws Exception {
        Category category = createCategory("Category");
        Coffee saved = createCoffee("Old", 20.0, category);

        CoffeeUpdateRequestDto req = new CoffeeUpdateRequestDto(
                "New Name",
                "Updated Desc",
                50.0,
                "http://new.url",
                category.getId().toString()
        );

        mockMvc.perform(put("/api/v1/coffees/{id}", saved.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("New Name"))
                .andExpect(jsonPath("$.price").value(50.0));

    }

    @Test
    @DisplayName("[DELETE] /api/v1/coffees/{id}")
    void shouldDeleteCoffee() throws Exception {
        Category category = createCategory("Category");
        Coffee saved = createCoffee("ToDelete", 10.0, category);

        mockMvc.perform(delete("/api/v1/coffees/{id}", saved.getId()))
                .andExpect(status().isNoContent());

        assertFalse(coffeeRepository.findById(saved.getId()).isPresent());
    }

    // --------------- helpers --------------------

    private Category createCategory(String name) {
        Category category = new Category();
        category.setName(name);
        return categoryRepository.save(category);
    }

    private Coffee createCoffee(String name, double price, Category category) {
        return coffeeRepository.save(
                Coffee.builder()
                        .name(name)
                        .description("Delicious coffee")
                        .price(price)
                        .imageUrl("http://image.url")
                        .category(category)
                        .build()
        );
    }
}
