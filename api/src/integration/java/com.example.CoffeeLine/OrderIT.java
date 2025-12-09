package com.example.CoffeeLine;

import com.example.CoffeeLine.common.OrderStatus;
import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.*;
import com.example.CoffeeLine.dto.order.OrderItemRequestDto;
import com.example.CoffeeLine.dto.order.OrderRequestDto;
import com.example.CoffeeLine.dto.order.UpdateOrderStatusRequestDto;
import com.example.CoffeeLine.service.OrderService;
import com.example.CoffeeLine.service.repository.CategoryRepository;
import com.example.CoffeeLine.service.repository.CoffeeRepository;
import com.example.CoffeeLine.service.repository.OrderRepository;
import com.example.CoffeeLine.service.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;

import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WithMockUser(username = "admin", roles = {"ADMIN"})
@DisplayName("INTEGRATION TESTS: Order Controller")
public class OrderIT extends BaseIT {

    @Autowired private MockMvc mockMvc;

    @Autowired private OrderRepository orderRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private CoffeeRepository coffeeRepository;
    @Autowired private CategoryRepository categoryRepository;

    @Autowired private ObjectMapper objectMapper;

    @Autowired private ApplicationContext applicationContext;


    @BeforeEach
    void setUp() {
        orderRepository.deleteAll();
        coffeeRepository.deleteAll();
        categoryRepository.deleteAll();
        userRepository.deleteAll();
    }


    @Test
    @DisplayName("[GET] /api/v1/orders?page=0&size=10 — returns Page")
    void shouldGetAllOrders() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();

        createAndSaveOrder(user, coffee, OrderStatus.CREATED);
        createAndSaveOrder(user, coffee, OrderStatus.COMPLETED);

        mockMvc.perform(get("/api/v1/orders?page=0&size=10"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content", hasSize(2)));

    }

    @Test
    @DisplayName("[GET] /api/v1/orders?status=CREATED — filters")
    void shouldFilterByStatus() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();

        createAndSaveOrder(user, coffee, OrderStatus.CREATED);
        createAndSaveOrder(user, coffee, OrderStatus.CANCELLED);

        mockMvc.perform(get("/api/v1/orders")
                        .param("page", "0")
                        .param("size", "10")
                        .param("status", "CREATED"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content", hasSize(1)));

    }

    @Test
    @DisplayName("[GET] /api/v1/orders/by-userId/{id}")
    void shouldGetOrdersByUser() throws Exception {
        User u1 = createAndSaveUser();
        User u2 = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();

        createAndSaveOrder(u1, coffee, OrderStatus.CREATED);
        createAndSaveOrder(u2, coffee, OrderStatus.CREATED);

        mockMvc.perform(get("/api/v1/orders/by-userId/{id}", u1.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.orders", hasSize(1)));

    }

    @Test
    @DisplayName("[GET] /api/v1/orders/{id}")
    void shouldGetById() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();
        Order order = createAndSaveOrder(user, coffee, OrderStatus.CREATED);

        mockMvc.perform(get("/api/v1/orders/{id}", order.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(order.getId().toString()));

    }

    @Test
    @DisplayName("[POST] /api/v1/orders — creates order")
    void shouldCreate() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();

        OrderItemRequestDto item = new OrderItemRequestDto(coffee.getId().toString(), 3);
        OrderRequestDto req = new OrderRequestDto(user.getId().toString(), Set.of(item));

        mockMvc.perform(post("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.items", hasSize(1)));

    }

    @Test
    @DisplayName("[PATCH] /api/v1/orders — update status")
    void shouldUpdateStatus() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();
        Order order = createAndSaveOrder(user, coffee, OrderStatus.CREATED);

        UpdateOrderStatusRequestDto req =
                new UpdateOrderStatusRequestDto(order.getId().toString(), "COMPLETED");

        mockMvc.perform(patch("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("COMPLETED"));


        assertEquals(OrderStatus.COMPLETED,
                orderRepository.findById(order.getId()).get().getStatus());
    }

    @Test
    @DisplayName("[DELETE] /api/v1/orders/{id}")
    void shouldDelete() throws Exception {
        User user = createAndSaveUser();
        Coffee coffee = createAndSaveCoffee();
        Order order = createAndSaveOrder(user, coffee, OrderStatus.CREATED);

        mockMvc.perform(delete("/api/v1/orders/{id}", order.getId()))
                .andExpect(status().isNoContent());

        assertFalse(orderRepository.findById(order.getId()).isPresent());
    }

    // ===== helpers =====

    private User createAndSaveUser() {
        return userRepository.save(
                User.builder()
                        .email("t" + UUID.randomUUID() + "@mail.com")
                        .name("User")
                        .phoneNumber("0991112233")
                        .password("pass")
                        .roles(Set.of(Role.ROLE_USER))
                        .build()
        );
    }

    private Category createCategory() {
        Category category = new Category();
        category.setName("Test");
        return categoryRepository.save(category);
    }

    private Coffee createAndSaveCoffee() {
        Category category = createCategory();
        return coffeeRepository.save(Coffee.builder()
                .name("Coffee")
                .description("desc")
                .price(50.0)
                .imageUrl("img")
                .category(category)
                .build());
    }

    private Order createAndSaveOrder(User user, Coffee coffee, OrderStatus status) {
        Order order = Order.builder()
                .user(user)
                .status(status)
                .totalCost(coffee.getPrice() * 2)
                .createdAt(LocalDateTime.now())
                .build();

        OrderItem item = OrderItem.builder()
                .order(order)
                .coffee(coffee)
                .quantity(2)
                .build();

        order.setItems(Set.of(item));
        return orderRepository.save(order);
    }
}
