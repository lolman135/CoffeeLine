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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WithMockUser(username = "admin", roles = {"ADMIN"})
@DisplayName("INTEGRATION TESTS: Coffee Controller")
public class CoffeeIT extends BaseIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CoffeeRepository coffeeRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @SpyBean
    private CoffeeService coffeeService;

    @BeforeEach
    void setUp() {
        coffeeRepository.deleteAll();
        categoryRepository.deleteAll();
    }

    @Test
    @DisplayName("[GET] /api/v1/coffees - Should return list of all coffees with full fields")
    void shouldGetAllCoffees() throws Exception {
        Category category = createAndSaveCategory("Arabica");
        createAndSaveCoffee("Espresso", 25.0, category);
        createAndSaveCoffee("Latte", 35.0, category);

        mockMvc.perform(get("/api/v1/coffees"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.coffees", hasSize(2)))
                .andExpect(jsonPath("$.coffees[0].id").exists())
                .andExpect(jsonPath("$.coffees[0].name").value("Espresso"))
                .andExpect(jsonPath("$.coffees[0].description").value("Delicious coffee"))
                .andExpect(jsonPath("$.coffees[0].price").value(25.0))
                .andExpect(jsonPath("$.coffees[0].imageUrl").value("http://image.url"))
                .andExpect(jsonPath("$.coffees[0].categoryId").value(category.getId().toString()))
                .andExpect(jsonPath("$.coffees[1].name").value("Latte"))
                .andExpect(jsonPath("$.coffees[1].price").value(35.0));

        verify(coffeeService).getAllCoffees();
    }

    @Test
    @DisplayName("[GET] /api/v1/coffees/{id} - Should return full coffee details")
    void shouldGetCoffeeById() throws Exception {
        Category category = createAndSaveCategory("Robusta");
        Coffee savedCoffee = createAndSaveCoffee("Cappuccino", 30.0, category);

        mockMvc.perform(get("/api/v1/coffees/{id}", savedCoffee.getId()))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(savedCoffee.getId().toString()))
                .andExpect(jsonPath("$.name").value("Cappuccino"))
                .andExpect(jsonPath("$.description").value("Delicious coffee"))
                .andExpect(jsonPath("$.price").value(30.0))
                .andExpect(jsonPath("$.imageUrl").value("http://image.url"))
                .andExpect(jsonPath("$.categoryId").value(category.getId().toString()));

        verify(coffeeService).getCoffeeById(savedCoffee.getId());
    }

    @Test
    @DisplayName("[GET] /api/v1/coffees/{id} - Should return 404 if coffee not found")
    void shouldReturn404WhenCoffeeNotFound() throws Exception {
        mockMvc.perform(get("/api/v1/coffees/{id}", UUID.randomUUID()))
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("[POST] /api/v1/coffees - Should create new coffee and return full DTO")
    void shouldCreateCoffee() throws Exception {
        Category category = createAndSaveCategory("Blend");
        CoffeeRequestDto request = new CoffeeRequestDto(
                "Mocha",
                "Chocolate coffee",
                "http://mocha.img",
                40.0,
                category.getId().toString()
        );

        mockMvc.perform(post("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.name").value("Mocha"))
                .andExpect(jsonPath("$.description").value("Chocolate coffee"))
                .andExpect(jsonPath("$.price").value(40.0))
                .andExpect(jsonPath("$.imageUrl").value("http://mocha.img"))
                .andExpect(jsonPath("$.categoryId").value(category.getId().toString()));

        verify(coffeeService).createCoffee(any(CoffeeRequestDto.class));
    }

    @Test
    @DisplayName("[POST] /api/v1/coffees - Should return 400 for invalid input")
    void shouldReturn400OnCreateWithInvalidInput() throws Exception {
        CoffeeRequestDto invalidRequest = new CoffeeRequestDto(
                "",
                "",
                "",
                0.0,
                ""
        );

        mockMvc.perform(post("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.detail").value("Request validation failed"))
                .andExpect(jsonPath("$.validationDetails").isArray());
    }

    @Test
    @DisplayName("[PUT] /api/v1/coffees - Should update coffee and return updated DTO")
    void shouldUpdateCoffee() throws Exception {
        Category category = createAndSaveCategory("Old Category");
        Coffee savedCoffee = createAndSaveCoffee("Old Name", 20.0, category);

        CoffeeUpdateRequestDto updateRequest = new CoffeeUpdateRequestDto(
                savedCoffee.getId().toString(),
                "New Name",
                "Updated Desc",
                50.0,
                "http://new.url",
                category.getId().toString()
        );

        mockMvc.perform(put("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updateRequest)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(savedCoffee.getId().toString()))
                .andExpect(jsonPath("$.name").value("New Name"))
                .andExpect(jsonPath("$.description").value("Updated Desc"))
                .andExpect(jsonPath("$.price").value(50.0))
                .andExpect(jsonPath("$.imageUrl").value("http://new.url"))
                .andExpect(jsonPath("$.categoryId").value(category.getId().toString()));

        Coffee updatedCoffeeInDb = coffeeRepository.findById(savedCoffee.getId()).orElseThrow();
        assertTrue(updatedCoffeeInDb.getName().equals("New Name"));
        assertTrue(updatedCoffeeInDb.getPrice() == 50.0);

        verify(coffeeService).updateCoffee(any(CoffeeUpdateRequestDto.class));
    }

    @Test
    @DisplayName("[PUT] /api/v1/coffees - Should return 400 for invalid update input")
    void shouldReturn400OnUpdateWithInvalidInput() throws Exception {
        CoffeeUpdateRequestDto invalidRequest = new CoffeeUpdateRequestDto(
                "invalid-uuid",
                "N",
                "Desc",
                -5.0,
                "url",
                UUID.randomUUID().toString()
        );

        mockMvc.perform(put("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.validationDetails").isArray());
    }

    @Test
    @DisplayName("[DELETE] /api/v1/coffees/{id} - Should delete coffee")
    void shouldDeleteCoffee() throws Exception {
        Category category = createAndSaveCategory("Category");
        Coffee savedCoffee = createAndSaveCoffee("To Delete", 10.0, category);

        mockMvc.perform(delete("/api/v1/coffees/{id}", savedCoffee.getId()))
                .andExpect(status().isNoContent());

        assertFalse(coffeeRepository.findById(savedCoffee.getId()).isPresent());

        verify(coffeeService).deleteCoffeeById(savedCoffee.getId());
    }

    private Category createAndSaveCategory(String name) {
        Category category = new Category();
        category.setName(name);
        return categoryRepository.save(category);
    }

    private Coffee createAndSaveCoffee(String name, double price, Category category) {
        return coffeeRepository.save(Coffee.builder()
                .name(name)
                .description("Delicious coffee")
                .price(price)
                .imageUrl("http://image.url")
                .category(category)
                .build());
    }
}