package com.example.CoffeeLine;

import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.auth.SignInRequestDto;
import com.example.CoffeeLine.dto.auth.SignUpRequestDto;
import com.example.CoffeeLine.service.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Set;

import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DisplayName("INTEGRATION TESTS: Authentication Controller")
public class AuthenticationIT extends BaseIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }

    @Test
    @DisplayName("[POST] /api/v1/auth/sign-up - Should create new user and return JWT")
    void shouldSignUpSuccessfully() throws Exception {
        SignUpRequestDto signUpRequest = new SignUpRequestDto(
                "New User",
                "new.user@example.com",
                "0991234567",
                "password123"
        );

        mockMvc.perform(post("/api/v1/auth/sign-up")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(signUpRequest)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.token").value(notNullValue()));

        assertTrue(userRepository.findByEmail("new.user@example.com").isPresent());
    }

    @Test
    @DisplayName("[POST] /api/v1/auth/sign-up - Should return 400 for invalid input")
    void shouldReturn400OnSignUpWithInvalidInput() throws Exception {
        SignUpRequestDto invalidRequest = new SignUpRequestDto(
                "",
                "invalid-email",
                "123",
                "pass"
        );

        mockMvc.perform(post("/api/v1/auth/sign-up")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.detail").value("Request validation failed"))
                .andExpect(jsonPath("$.validationDetails").isArray());
    }

    @Test
    @DisplayName("[POST] /api/v1/auth/sign-up - Should return 409 if email already exists")
    void shouldReturn409WhenEmailAlreadyExists() throws Exception {
        userRepository.save(User.builder()
                .email("exists@example.com")
                .name("Existing User")
                .phoneNumber("0991112233")
                .password("encodedPass")
                .roles(Set.of(Role.ROLE_USER))
                .build());

        SignUpRequestDto signUpRequest = new SignUpRequestDto(
                "New User",
                "exists@example.com",
                "0991234567",
                "password123"
        );

        mockMvc.perform(post("/api/v1/auth/sign-up")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(signUpRequest)))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.status").value(409))
                .andExpect(jsonPath("$.detail").value("User with email 'exists@example.com' already exists"));
    }

    @Test
    @DisplayName("[POST] /api/v1/auth/sign-in - Should return JWT for valid credentials")
    void shouldSignInSuccessfully() throws Exception {
        userRepository.save(User.builder()
                .email("signin@example.com")
                .name("Sign In User")
                .phoneNumber("0991112233")
                .password(passwordEncoder.encode("correctPassword"))
                .roles(Set.of(Role.ROLE_USER))
                .build());

        SignInRequestDto signInRequest = new SignInRequestDto(
                "signin@example.com",
                "correctPassword"
        );

        mockMvc.perform(post("/api/v1/auth/sign-in")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(signInRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").value(notNullValue()));
    }

    @Test
    @DisplayName("[POST] /api/v1/auth/sign-in - Should return 401 for bad credentials")
    void shouldReturn401OnSignInWithBadCredentials() throws Exception {
        userRepository.save(User.builder()
                .email("signin@example.com")
                .name("Sign In User")
                .phoneNumber("0991112233")
                .password(passwordEncoder.encode("correctPassword"))
                .roles(Set.of(Role.ROLE_USER))
                .build());

        SignInRequestDto wrongPasswordRequest = new SignInRequestDto(
                "signin@example.com",
                "wrongPassword"
        );

        mockMvc.perform(post("/api/v1/auth/sign-in")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(wrongPasswordRequest)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("[POST] /api/v1/auth/sign-in - Should return 400 for invalid input")
    void shouldReturn400OnSignInWithInvalidInput() throws Exception {
        SignInRequestDto invalidRequest = new SignInRequestDto(
                "not-an-email",
                ""
        );

        mockMvc.perform(post("/api/v1/auth/sign-in")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.validationDetails").isArray());
    }
}