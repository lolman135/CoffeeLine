package com.example.CoffeeLine;

import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.user.ChangeUserRoleRequestDto;
import com.example.CoffeeLine.dto.user.UserUpdateRequestDto;
import com.example.CoffeeLine.service.UserService;
import com.example.CoffeeLine.service.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Map;
import java.util.Set;
import java.util.UUID;

import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.authentication;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WithMockUser(username = "admin", roles = {"ADMIN"})
@DisplayName("INTEGRATION TESTS: User Controller")
public class UserIT extends BaseIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @SpyBean
    private UserService userService;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }

    @Test
    @DisplayName("[GET] /api/v1/users - Should return list of all users with full fields")
    void shouldGetAllUsers() throws Exception {
        createAndSaveUser("user1@test.com", "User One", "0990000001");
        createAndSaveUser("user2@test.com", "User Two", "0990000002");

        mockMvc.perform(get("/api/v1/users"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.users", hasSize(2)))
                .andExpect(jsonPath("$.users[0].id").exists())
                .andExpect(jsonPath("$.users[0].email").value("user1@test.com"))
                .andExpect(jsonPath("$.users[0].name").value("User One"))
                .andExpect(jsonPath("$.users[0].phoneNumber").value("0990000001"))
                .andExpect(jsonPath("$.users[0].roles").value("ROLE_USER"))
                .andExpect(jsonPath("$.users[0].orders").isArray())
                .andExpect(jsonPath("$.users[0].orders").isEmpty())
                .andExpect(jsonPath("$.users[0].password").doesNotExist())
                .andExpect(jsonPath("$.users[1].email").value("user2@test.com"))
                .andExpect(jsonPath("$.users[1].name").value("User Two"))
                .andExpect(jsonPath("$.users[1].phoneNumber").value("0990000002"));

        verify(userService).getAllUsers();
    }

    @Test
    @DisplayName("[GET] /api/v1/users/{id} - Should return full user details")
    void shouldReturnUserById() throws Exception {
        User savedUser = createAndSaveUser("ivan@test.com", "Ivan", "0991234567");

        mockMvc.perform(get("/api/v1/users/{id}", savedUser.getId()))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(savedUser.getId().toString()))
                .andExpect(jsonPath("$.name").value("Ivan"))
                .andExpect(jsonPath("$.email").value("ivan@test.com"))
                .andExpect(jsonPath("$.phoneNumber").value("0991234567"))
                .andExpect(jsonPath("$.roles").value("ROLE_USER"))
                .andExpect(jsonPath("$.orders").isArray())
                .andExpect(jsonPath("$.orders").isEmpty())
                .andExpect(jsonPath("$.password").doesNotExist());

        verify(userService).getUserById(savedUser.getId());
    }

    @Test
    @DisplayName("[GET] /api/v1/users/{id} - Should return 404 if user not found")
    void shouldReturn404WhenUserNotFound() throws Exception {
        mockMvc.perform(get("/api/v1/users/{id}", UUID.randomUUID()))
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("[PUT] /api/v1/users - Should update user info and return full DTO")
    void shouldUpdateUser() throws Exception {
        User savedUser = createAndSaveUser("update@test.com", "OldName", "0501112233");

        Map<String, Object> updateRequest = Map.of(
                "id", savedUser.getId().toString(),
                "name", "NewName",
                "phoneNumber", "0669998877"
        );

        mockMvc.perform(put("/api/v1/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updateRequest)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("NewName"))
                .andExpect(jsonPath("$.phoneNumber").value("0669998877"))
                .andExpect(jsonPath("$.id").value(savedUser.getId().toString()))
                .andExpect(jsonPath("$.email").value("update@test.com"))
                .andExpect(jsonPath("$.roles").value("ROLE_USER"))
                .andExpect(jsonPath("$.orders").isEmpty())
                .andExpect(jsonPath("$.password").doesNotExist());

        verify(userService).updateUser(any(UserUpdateRequestDto.class));
    }

    @Test
    @DisplayName("[PUT] /api/v1/users - Should return 400 for invalid phone format")
    void shouldReturn400OnInvalidUpdate() throws Exception {
        User savedUser = createAndSaveUser("invalid@test.com", "Name", "0501112233");

        Map<String, Object> invalidRequest = Map.of(
                "id", savedUser.getId().toString(),
                "phoneNumber", "+38050..."
        );

        mockMvc.perform(put("/api/v1/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.detail").value("Request validation failed"))
                .andExpect(jsonPath("$.validationDetails").isArray());
    }

    @Test
    @DisplayName("[PUT] /api/v1/users/role/add - Should add role and return full DTO")
    void shouldAddRoleToUser() throws Exception {
        User savedUser = createAndSaveUser("role@test.com", "RoleTest", "0931234567");

        Map<String, Object> roleRequest = Map.of(
                "id", savedUser.getId().toString(),
                "role", "ROLE_CASHIER"
        );

        mockMvc.perform(put("/api/v1/users/role/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(roleRequest)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.roles").value(containsString("ROLE_USER")))
                .andExpect(jsonPath("$.roles").value(containsString("ROLE_CASHIER")))
                .andExpect(jsonPath("$.id").value(savedUser.getId().toString()))
                .andExpect(jsonPath("$.email").value("role@test.com"))
                .andExpect(jsonPath("$.password").doesNotExist());

        verify(userService).addRoleToUser(any(ChangeUserRoleRequestDto.class));
    }

    @Test
    @DisplayName("[PUT] /api/v1/users/role/remove - Should remove role and return full DTO")
    void shouldRemoveRoleFromUser() throws Exception {
        User user = User.builder()
                .email("remove@test.com")
                .name("RemoveRole")
                .password("pass")
                .phoneNumber("0931234567")
                .roles(Set.of(Role.ROLE_USER, Role.ROLE_CASHIER))
                .build();
        User savedUser = userRepository.save(user);

        Map<String, Object> roleRequest = Map.of(
                "id", savedUser.getId().toString(),
                "role", "ROLE_CASHIER"
        );

        mockMvc.perform(put("/api/v1/users/role/remove")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(roleRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.roles").value(containsString("ROLE_USER")))
                .andExpect(jsonPath("$.roles", not(containsString("ROLE_CASHIER"))))
                .andExpect(jsonPath("$.email").value("remove@test.com"))
                .andExpect(jsonPath("$.password").doesNotExist());

        verify(userService).removeRoleFromUser(any(ChangeUserRoleRequestDto.class));
    }

    @Test
    @DisplayName("[GET] /api/v1/users/me - Should return full details of current user")
    void getMe_ReturnsCurrentUser() throws Exception {
        User savedUser = createAndSaveUser("me@real.com", "Real User", "0991112233");

        mockMvc.perform(get("/api/v1/users/me")
                        .with(authentication(new UsernamePasswordAuthenticationToken(savedUser, null, savedUser.getAuthorities()))))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(savedUser.getId().toString()))
                .andExpect(jsonPath("$.name").value("Real User"))
                .andExpect(jsonPath("$.email").value("me@real.com"))
                .andExpect(jsonPath("$.phoneNumber").value("0991112233"))
                .andExpect(jsonPath("$.roles").value("ROLE_USER"))
                .andExpect(jsonPath("$.orders").isArray())
                .andExpect(jsonPath("$.password").doesNotExist());
    }

    @Test
    @DisplayName("[PUT] /api/v1/users/me - Should update user and return full updated DTO")
    void updateMe_UpdatesCurrentUser() throws Exception {
        User savedUser = createAndSaveUser("update.me@real.com", "Old Name", "0660000000");

        Map<String, Object> updateRequest = Map.of(
                "id", UUID.randomUUID().toString(),
                "name", "Updated Name",
                "phoneNumber", "0999999999"
        );

        mockMvc.perform(put("/api/v1/users/me")
                        .with(authentication(new UsernamePasswordAuthenticationToken(savedUser, null, savedUser.getAuthorities())))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updateRequest)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Updated Name"))
                .andExpect(jsonPath("$.phoneNumber").value("0999999999"))
                .andExpect(jsonPath("$.id").value(savedUser.getId().toString()))
                .andExpect(jsonPath("$.email").value("update.me@real.com"))
                .andExpect(jsonPath("$.roles").value("ROLE_USER"))
                .andExpect(jsonPath("$.orders").isEmpty())
                .andExpect(jsonPath("$.password").doesNotExist());

        User updatedUserInDb = userRepository.findById(savedUser.getId()).orElseThrow();
        assertTrue(updatedUserInDb.getName().equals("Updated Name"));
        assertTrue(updatedUserInDb.getPhoneNumber().equals("0999999999"));
    }

    @Test
    @DisplayName("[DELETE] /api/v1/users/{id} - Should delete user and check DB")
    void shouldDeleteUser() throws Exception {
        User savedUser = createAndSaveUser("delete@test.com", "Del", "0991112233");

        mockMvc.perform(delete("/api/v1/users/{id}", savedUser.getId()))
                .andExpect(status().is2xxSuccessful());

        assertFalse(userRepository.findById(savedUser.getId()).isPresent());

        verify(userService).deleteUserById(savedUser.getId());
    }

    private User createAndSaveUser(String email, String name, String phone) {
        return userRepository.save(User.builder()
                .email(email)
                .name(name)
                .phoneNumber(phone)
                .password("encodedPassword")
                .roles(Set.of(Role.ROLE_USER))
                .build());
    }
}