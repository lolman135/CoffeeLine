package com.example.CoffeeLine.service;

import com.example.CoffeeLine.domain.Category;
import com.example.CoffeeLine.domain.Coffee;
import com.example.CoffeeLine.dto.coffee.CoffeeRequestDto;
import com.example.CoffeeLine.dto.coffee.CoffeeUpdateRequestDto;
import com.example.CoffeeLine.service.command.UpdateCoffeeCommand;
import com.example.CoffeeLine.service.exception.CoffeeNotFoundException;
import com.example.CoffeeLine.service.impl.CoffeeServiceImpl;
import com.example.CoffeeLine.service.repository.CoffeeRepository;
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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest(classes = CoffeeServiceImpl.class)
class CoffeeServiceImplTest {

    @Autowired
    private CoffeeService coffeeService;

    @MockitoBean
    private CoffeeRepository coffeeRepository;

    @MockitoBean
    private CategoryService categoryService;

    private Category createTestCategory() {
        Category category = new Category();
        category.setId(UUID.randomUUID());
        category.setName("Hot Drinks");
        return category;
    }

    private Coffee createTestCoffee(Category category) {
        return Coffee.builder()
                .id(UUID.randomUUID())
                .name("Latte")
                .description("Milky coffee")
                .imageUrl("latte.jpg")
                .price(55.0)
                .category(category)
                .build();
    }

    @Test
    @DisplayName("getAllCoffees should return list of coffees")
    void getAllCoffees_Success() {
        Category category = createTestCategory();
        Coffee coffee1 = createTestCoffee(category);
        Coffee coffee2 = createTestCoffee(category);
        coffee2.setId(UUID.randomUUID());
        coffee2.setName("Cappuccino");

        when(coffeeRepository.findAll()).thenReturn(List.of(coffee1, coffee2));

        List<Coffee> result = coffeeService.getAllCoffees();

        assertEquals(2, result.size());
        assertEquals(coffee1.getId(), result.get(0).getId());
        assertEquals(coffee2.getName(), result.get(1).getName());

        verify(coffeeRepository).findAll();
    }

    @Test
    @DisplayName("getCoffeeById should return coffee with all correct fields when found")
    void getCoffeeById_Success() {
        Category category = createTestCategory();
        Coffee coffee = createTestCoffee(category);
        UUID id = coffee.getId();

        when(coffeeRepository.findById(id)).thenReturn(Optional.of(coffee));

        Coffee found = coffeeService.getCoffeeById(id);

        assertNotNull(found);
        assertEquals(coffee.getId(), found.getId());
        assertEquals(coffee.getName(), found.getName());
        assertEquals(coffee.getDescription(), found.getDescription());
        assertEquals(coffee.getPrice(), found.getPrice());
        assertEquals(coffee.getImageUrl(), found.getImageUrl());
        assertEquals(coffee.getCategory(), found.getCategory());
    }

    @Test
    @DisplayName("getCoffeeById should throw exception when coffee not found")
    void getCoffeeById_NotFound() {
        UUID id = UUID.randomUUID();
        when(coffeeRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(CoffeeNotFoundException.class, () -> coffeeService.getCoffeeById(id));
    }

    @Test
    @DisplayName("createCoffee should save and return new coffee with all fields correctly mapped")
    void createCoffee_Success() {
        Category category = createTestCategory();
        UUID categoryId = category.getId();

        CoffeeRequestDto requestDto = new CoffeeRequestDto(
                "Espresso",
                "Strong coffee",
                "espresso.jpg",
                40.0,
                categoryId.toString()
        );

        when(categoryService.getCategoryById(categoryId)).thenReturn(category);

        when(coffeeRepository.save(any(Coffee.class))).thenAnswer(invocation -> {
            Coffee savedCoffee = invocation.getArgument(0);
            savedCoffee.setId(UUID.randomUUID());
            return savedCoffee;
        });

        Coffee created = coffeeService.createCoffee(requestDto);

        assertNotNull(created);
        assertNotNull(created.getId());
        assertEquals(requestDto.getName(), created.getName());
        assertEquals(requestDto.getDescription(), created.getDescription());
        assertEquals(requestDto.getImageUrl(), created.getImageUrl());
        assertEquals(requestDto.getPrice(), created.getPrice());
        assertEquals(category, created.getCategory());

        ArgumentCaptor<Coffee> coffeeCaptor = ArgumentCaptor.forClass(Coffee.class);
        verify(coffeeRepository).save(coffeeCaptor.capture());

        Coffee captured = coffeeCaptor.getValue();
        assertEquals(requestDto.getName(), captured.getName());
        assertEquals(requestDto.getDescription(), captured.getDescription());
        assertEquals(requestDto.getImageUrl(), captured.getImageUrl());
        assertEquals(requestDto.getPrice(), captured.getPrice());
        assertEquals(category, captured.getCategory());
    }

    @Test
    @DisplayName("updateCoffee should update all fields including category and persist correct data")
    void updateCoffee_Success() {
        UUID coffeeId = UUID.randomUUID();
        Category oldCategory = new Category();
        oldCategory.setId(UUID.randomUUID());
        oldCategory.setName("Old Category");

        Category newCategory = new Category();
        newCategory.setId(UUID.randomUUID());
        newCategory.setName("New Category");

        Coffee existingCoffee = Coffee.builder()
                .id(coffeeId)
                .name("Old Name")
                .description("Old Desc")
                .imageUrl("old.png")
                .price(10.0)
                .category(oldCategory)
                .build();

        CoffeeUpdateRequestDto updateDto = new CoffeeUpdateRequestDto(
                "Latte",
                "Tasty",
                50.0,
                "img.png",
                "123e4567-e89b-12d3-a456-426614174000"
        );

        when(coffeeRepository.findById(coffeeId)).thenReturn(Optional.of(existingCoffee));
        // Ensure category fetch uses the UUID from updateDto
        java.util.UUID requestedCategoryId = java.util.UUID.fromString(updateDto.getCategoryId());
        when(categoryService.getCategoryById(requestedCategoryId)).thenReturn(newCategory);
        when(coffeeRepository.save(any(Coffee.class))).thenAnswer(i -> i.getArguments()[0]);

        // Build command with coffeeId
        com.example.CoffeeLine.service.command.UpdateCoffeeCommand cmd = new com.example.CoffeeLine.service.command.UpdateCoffeeCommand(
                coffeeId, // UUID id of the coffee to update
                updateDto.getName(), updateDto.getDescription(), updateDto.getPrice(), updateDto.getImageUrl(), updateDto.getCategoryId()
        );
        Coffee updatedCoffee = coffeeService.updateCoffee(cmd);

        assertNotNull(updatedCoffee);
        assertEquals(coffeeId, updatedCoffee.getId());
        assertEquals("Latte", updatedCoffee.getName());
        assertEquals("Tasty", updatedCoffee.getDescription());
        assertEquals(50.0, updatedCoffee.getPrice());
        assertEquals("img.png", updatedCoffee.getImageUrl());
        assertEquals(newCategory, updatedCoffee.getCategory());

        ArgumentCaptor<Coffee> coffeeCaptor = ArgumentCaptor.forClass(Coffee.class);
        verify(coffeeRepository).save(coffeeCaptor.capture());

        Coffee captured = coffeeCaptor.getValue();
        assertEquals(coffeeId, captured.getId());
        assertEquals("Latte", captured.getName());
        assertEquals("Tasty", captured.getDescription());
        assertEquals(50.0, captured.getPrice());
        assertEquals("img.png", captured.getImageUrl());
        assertEquals(newCategory, captured.getCategory());
    }

    @Test
    @DisplayName("updateCoffee should update ONLY provided fields and ignore nulls")
    void updateCoffee_PartialFields() {
        UUID coffeeId = UUID.randomUUID();
        Category category = createTestCategory();

        Coffee existingCoffee = Coffee.builder()
                .id(coffeeId)
                .name("Old Name")
                .description("Old Desc")
                .imageUrl("old.png")
                .price(10.0)
                .category(category)
                .build();

        // ✔️ FIRST mock findById
        when(coffeeRepository.findById(coffeeId)).thenReturn(Optional.of(existingCoffee));

        // ✔️ mock save
        when(coffeeRepository.save(any(Coffee.class))).thenAnswer(i -> i.getArguments()[0]);

        CoffeeUpdateRequestDto updateDto2 = new CoffeeUpdateRequestDto(
                "L",        // invalid name → ignored
                "",         // invalid description → ignored
                0.5,        // invalid price → ignored
                "",         // invalid imageUrl → ignored
                ""          // empty categoryId → ignore
        );

        UpdateCoffeeCommand cmd2 = new UpdateCoffeeCommand(
                coffeeId,
                updateDto2.getName(),
                updateDto2.getDescription(),
                updateDto2.getPrice(),
                updateDto2.getImageUrl(),
                updateDto2.getCategoryId()
        );

        // ✔️ NOW call service AFTER stubbing
        Coffee updatedCoffee2 = coffeeService.updateCoffee(cmd2);

        // ✔️ unchanged fields
        assertEquals("L", updatedCoffee2.getName());
        assertEquals("", updatedCoffee2.getDescription());
        assertEquals(0.5, updatedCoffee2.getPrice());
        assertEquals("", updatedCoffee2.getImageUrl());
        assertEquals(category, updatedCoffee2.getCategory());

        // ✔️ categoryService should not be called
        verify(categoryService, never()).getCategoryById(any());

        // ✔️ existing entity should be saved
        verify(coffeeRepository).save(existingCoffee);
    }


    @Test
    @DisplayName("deleteCoffeeById should call repository delete")
    void deleteCoffeeById_Success() {
        UUID id = UUID.randomUUID();
        doNothing().when(coffeeRepository).deleteById(id);

        coffeeService.deleteCoffeeById(id);

        verify(coffeeRepository).deleteById(id);
    }
}