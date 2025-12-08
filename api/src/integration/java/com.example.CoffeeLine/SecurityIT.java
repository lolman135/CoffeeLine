package com.example.CoffeeLine;

import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.auth.SignInRequestDto;
import com.example.CoffeeLine.dto.auth.SignUpRequestDto;
import com.example.CoffeeLine.service.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Date;
import java.util.Set;

import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DisplayName("INTEGRATION TESTS: Security & JWT Service")
public class SecurityIT extends BaseIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ObjectMapper objectMapper;

    @Value("${security.token.secret}")
    private String secret;

    @Test
    @DisplayName("[POST] /auth/sign-up & [POST] /auth/sign-in - Should register and login user")
    void shouldRegisterAndLogin() throws Exception {
        SignUpRequestDto signUpRequest = new SignUpRequestDto(
                "New User",
                "new.user@example.com",
                "0991234567",
                "password123"
        );

        mockMvc.perform(post("/api/v1/auth/sign-up")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(signUpRequest)))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.token").value(notNullValue()));

        SignInRequestDto signInRequest = new SignInRequestDto(
                "new.user@example.com",
                "password123"
        );

        mockMvc.perform(post("/api/v1/auth/sign-in")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(signInRequest)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").value(notNullValue()));
    }

    @Test
    @DisplayName("[GET] /api/v1/users/me - Should allow access with valid JWT token")
    void shouldAllowAccessWithValidToken() throws Exception {
        userRepository.save(User.builder()
                .email("secure@test.com")
                .name("Secure User")
                .phoneNumber("0991234567")
                .password(passwordEncoder.encode("password"))
                .roles(Set.of(Role.ROLE_USER))
                .build());

        String token = loginAndGetToken("secure@test.com", "password");

        mockMvc.perform(get("/api/v1/users/me")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("secure@test.com"));
    }

    @Test
    @DisplayName("[GET] /api/v1/users/me - Should return 401 when token is invalid (Bad Signature)")
    void shouldReturn401ForInvalidToken() throws Exception {
        String invalidToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0In0.invalidSignature";

        mockMvc.perform(get("/api/v1/users/me")
                        .header("Authorization", "Bearer " + invalidToken))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.status").value(401));
    }

    @Test
    @DisplayName("[GET] /api/v1/users/me - Should return 401 when token is expired")
    void shouldReturn401ForExpiredToken() throws Exception {
        String expiredToken = Jwts.builder()
                .subject("expired@test.com")
                .issuedAt(new Date(System.currentTimeMillis() - 10000))
                .expiration(new Date(System.currentTimeMillis() - 1000))
                .signWith(Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret)))
                .compact();

        mockMvc.perform(get("/api/v1/users/me")
                        .header("Authorization", "Bearer " + expiredToken))
                .andDo(print())
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.status").value(401))
                .andExpect(jsonPath("$.detail").exists());
    }

    @Test
    @DisplayName("[GET] /api/v1/users/me - Should return 403 when token is missing")
    void shouldReturn403ForMissingToken() throws Exception {
        mockMvc.perform(get("/api/v1/users/me"))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("[GET] /api/v1/users/me - Should return 403 for malformed Authorization header")
    void shouldReturn403ForMalformedHeader() throws Exception {
        mockMvc.perform(get("/api/v1/users/me")
                        .header("Authorization", "NotBearer token"))
                .andExpect(status().isForbidden());
    }

    private String loginAndGetToken(String email, String password) throws Exception {
        SignInRequestDto signInRequest = new SignInRequestDto(email, password);

        MvcResult result = mockMvc.perform(post("/api/v1/auth/sign-in")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(signInRequest)))
                .andExpect(status().isOk())
                .andReturn();

        String response = result.getResponse().getContentAsString();
        return objectMapper.readTree(response).get("token").asText();
    }
}