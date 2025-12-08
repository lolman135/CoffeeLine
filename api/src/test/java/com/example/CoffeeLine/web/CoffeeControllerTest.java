package com.example.CoffeeLine.web;

import com.example.CoffeeLine.domain.Coffee;
import com.example.CoffeeLine.dto.coffee.CoffeeListResponseDto;
import com.example.CoffeeLine.dto.coffee.CoffeeRequestDto;
import com.example.CoffeeLine.dto.coffee.CoffeeResponseDto;
import com.example.CoffeeLine.dto.coffee.CoffeeUpdateRequestDto;
import com.example.CoffeeLine.security.CustomUserDetailsService;
import com.example.CoffeeLine.service.CoffeeService;
import com.example.CoffeeLine.service.JwtService;
import com.example.CoffeeLine.web.mapper.CoffeeMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = CoffeeController.class)
@AutoConfigureMockMvc(addFilters = false)
class CoffeeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private CoffeeService coffeeService;

    @MockitoBean
    private CoffeeMapper coffeeMapper;

    // --- Mocks for Security ---
    @MockitoBean
    private JwtService jwtService;

    @MockitoBean
    private CustomUserDetailsService customUserDetailsService;

    // Test Data
    private final UUID coffeeId = UUID.randomUUID();
    private final UUID categoryId = UUID.randomUUID();

    private final CoffeeResponseDto coffeeResponseDto = new CoffeeResponseDto(
            coffeeId.toString(),
            "Latte",
            "Milky coffee",
            50.0,
            "http://image.url",
            categoryId.toString()
    );

    @Test
    @DisplayName("getAllCoffees should return 200 and list of coffees")
    void getAllCoffees_Returns200() throws Exception {
        Coffee domainCoffee = mock(Coffee.class);

        when(coffeeService.getAllCoffees()).thenReturn(List.of(domainCoffee));
        when(coffeeMapper.toCoffeeResponseDto(domainCoffee)).thenReturn(coffeeResponseDto);

        mockMvc.perform(get("/api/v1/coffees"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.coffees.size()").value(1))
                .andExpect(jsonPath("$.coffees[0].id").value(coffeeId.toString()))
                .andExpect(jsonPath("$.coffees[0].name").value("Latte"))
                .andExpect(jsonPath("$.coffees[0].price").value(50.0));

        verify(coffeeService).getAllCoffees();
    }

    @Test
    @DisplayName("getCoffeeById should return 200 and coffee details")
    void getCoffeeById_Returns200() throws Exception {
        Coffee domainCoffee = mock(Coffee.class);

        when(coffeeService.getCoffeeById(coffeeId)).thenReturn(domainCoffee);
        when(coffeeMapper.toCoffeeResponseDto(domainCoffee)).thenReturn(coffeeResponseDto);

        mockMvc.perform(get("/api/v1/coffees/{id}", coffeeId))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(coffeeId.toString()))
                .andExpect(jsonPath("$.name").value("Latte"));

        verify(coffeeService).getCoffeeById(coffeeId);
    }

    @Test
    @DisplayName("createCoffee should return 201 and created coffee when input is valid")
    void createCoffee_Success() throws Exception {
        CoffeeRequestDto request = new CoffeeRequestDto(
                "Latte",
                "Milky coffee",
                "http://image.url",
                50.0,
                categoryId.toString()
        );

        Coffee domainCoffee = mock(Coffee.class);
        when(coffeeService.createCoffee(any(CoffeeRequestDto.class))).thenReturn(domainCoffee);
        when(coffeeMapper.toCoffeeResponseDto(domainCoffee)).thenReturn(coffeeResponseDto);

        mockMvc.perform(post("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated()) // 201 Created
                .andExpect(jsonPath("$.name").value("Latte"));

        ArgumentCaptor<CoffeeRequestDto> captor = ArgumentCaptor.forClass(CoffeeRequestDto.class);
        verify(coffeeService).createCoffee(captor.capture());

        assertEquals("Latte", captor.getValue().getName());
        assertEquals(50.0, captor.getValue().getPrice());
    }

    @Test
    @DisplayName("createCoffee should return 400 when input is invalid")
    void createCoffee_InvalidInput_Returns400() throws Exception {
        CoffeeRequestDto invalidRequest = new CoffeeRequestDto(
                "",               // Invalid: blank name
                "Desc",
                "url",
                0.0,             // Invalid: price < 1
                ""               // Invalid: blank categoryId
        );

        mockMvc.perform(post("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        verify(coffeeService, never()).createCoffee(any());
    }

    @Test
    @DisplayName("updateCoffee should return 200 and updated coffee when input is valid")
    void updateCoffee_Success() throws Exception {
        CoffeeUpdateRequestDto request = new CoffeeUpdateRequestDto(
                coffeeId.toString(),
                "New Latte",
                "New Desc",
                60.0,
                "new_url",
                categoryId.toString()
        );

        Coffee domainCoffee = mock(Coffee.class);
        when(coffeeService.updateCoffee(any(CoffeeUpdateRequestDto.class))).thenReturn(domainCoffee);
        when(coffeeMapper.toCoffeeResponseDto(domainCoffee)).thenReturn(coffeeResponseDto);

        mockMvc.perform(put("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());

        ArgumentCaptor<CoffeeUpdateRequestDto> captor = ArgumentCaptor.forClass(CoffeeUpdateRequestDto.class);
        verify(coffeeService).updateCoffee(captor.capture());

        assertEquals(coffeeId.toString(), captor.getValue().getId());
        assertEquals("New Latte", captor.getValue().getName());
    }

    @Test
    @DisplayName("updateCoffee should return 400 when ID is invalid or fields are wrong")
    void updateCoffee_InvalidInput_Returns400() throws Exception {
        CoffeeUpdateRequestDto invalidRequest = new CoffeeUpdateRequestDto(
                "invalid-id",
                "Name",
                "Desc",
                -5.0,
                "url",
                categoryId.toString()
        );

        mockMvc.perform(put("/api/v1/coffees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        verify(coffeeService, never()).updateCoffee(any());
    }

    @Test
    @DisplayName("deleteCoffeeById should return 204")
    void deleteCoffeeById_Returns204() throws Exception {
        doNothing().when(coffeeService).deleteCoffeeById(coffeeId);

        mockMvc.perform(delete("/api/v1/coffees/{id}", coffeeId))
                .andExpect(status().isNoContent());

        verify(coffeeService).deleteCoffeeById(coffeeId);
    }
}