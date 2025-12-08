package com.example.CoffeeLine.web;

import com.example.CoffeeLine.dto.auth.SignInRequestDto;
import com.example.CoffeeLine.dto.auth.SignUpRequestDto;
import com.example.CoffeeLine.security.CustomUserDetailsService;
import com.example.CoffeeLine.service.AuthenticationService;
import com.example.CoffeeLine.service.JwtService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = AuthenticationController.class)
@AutoConfigureMockMvc(addFilters = false)
class AuthenticationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private AuthenticationService authenticationService;

    @MockitoBean
    private JwtService jwtService;

    @MockitoBean
    private CustomUserDetailsService customUserDetailsService;

    @Test
    @DisplayName("signUp should return 201 and JWT token when request is valid")
    void signUp_Success() throws Exception {
        SignUpRequestDto request = new SignUpRequestDto(
                "New User",
                "new@example.com",
                "0931234567",
                "password123"
        );
        String expectedToken = "jwt-token-example";

        when(authenticationService.signUp(any(SignUpRequestDto.class))).thenReturn(expectedToken);

        mockMvc.perform(post("/api/v1/auth/sign-up")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.token").value(expectedToken));

        verify(authenticationService).signUp(any(SignUpRequestDto.class));
    }

    @Test
    @DisplayName("signUp should return 400 when input is invalid (empty fields)")
    void signUp_InvalidInput_Returns400() throws Exception {
        SignUpRequestDto invalidRequest = new SignUpRequestDto(
                "",
                "invalid-email",
                "",
                ""
        );

        mockMvc.perform(post("/api/v1/auth/sign-up")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        verify(authenticationService, never()).signUp(any());
    }

    @Test
    @DisplayName("signIn should return 200 and JWT token when credentials are valid")
    void signIn_Success() throws Exception {
        SignInRequestDto request = new SignInRequestDto("user@example.com", "password123");
        String expectedToken = "access-token-example";

        when(authenticationService.signIn(any(SignInRequestDto.class))).thenReturn(expectedToken);

        mockMvc.perform(post("/api/v1/auth/sign-in")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.token").value(expectedToken));

        verify(authenticationService).signIn(any(SignInRequestDto.class));
    }

    @Test
    @DisplayName("signIn should return 400 when input is invalid")
    void signIn_InvalidInput_Returns400() throws Exception {
        SignInRequestDto invalidRequest = new SignInRequestDto("", "");

        mockMvc.perform(post("/api/v1/auth/sign-in")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        verify(authenticationService, never()).signIn(any());
    }
}