package com.example.CoffeeLine.service;

import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.service.impl.JwtServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(
        classes = JwtServiceImpl.class,
        properties = {
                "security.token.secret=404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970",
                "security.token.expiration-time=86400000"
        }
)
class JwtServiceImplTest {

    @Autowired
    private JwtService jwtService;

    private User createTestUser() {
        return User.builder()
                .id(UUID.randomUUID())
                .name("Test User")
                .email("test.user@example.com")
                .password("password")
                .roles(new HashSet<>(Set.of(Role.ROLE_USER)))
                .build();
    }

    @Test
    @DisplayName("generateToken should create a non-empty token string")
    void generateToken_ReturnsToken() {
        User user = createTestUser();

        String token = jwtService.generateToken(user);

        assertNotNull(token);
        assertFalse(token.isEmpty());
    }

    @Test
    @DisplayName("extractEmail should retrieve correct email from valid token")
    void extractEmail_ReturnsCorrectEmail() {
        User user = createTestUser();
        String token = jwtService.generateToken(user);

        String email = jwtService.extractEmail(token);

        assertNotNull(email);
        assertEquals(user.getEmail(), email);
    }

    @Test
    @DisplayName("isTokenValid should return true for the same user and valid token")
    void isTokenValid_ReturnsTrue_ForSameUser() {
        User user = createTestUser();
        String token = jwtService.generateToken(user);

        boolean isValid = jwtService.isTokenValid(token, user);

        assertTrue(isValid);
    }

    @Test
    @DisplayName("isTokenValid should return false for a different user")
    void isTokenValid_ReturnsFalse_ForDifferentUser() {
        User user1 = createTestUser();
        String token = jwtService.generateToken(user1);

        User user2 = createTestUser();
        user2.setEmail("other.user@example.com");

        boolean isValid = jwtService.isTokenValid(token, user2);

        assertFalse(isValid);
    }

    @Test
    @DisplayName("extractEmail should throw SignatureException when token is tampered with")
    void extractEmail_Throws_WhenSignatureIsInvalid() {
        User user = createTestUser();
        String validToken = jwtService.generateToken(user);

        String tamperedToken = validToken.substring(0, validToken.length() - 1) + "X";

        assertThrows(SignatureException.class, () -> jwtService.extractEmail(tamperedToken));
    }

    @Test
    @DisplayName("extractEmail should throw ExpiredJwtException when token is expired")
    void extractEmail_Throws_WhenTokenIsExpired() {
        String secret = "404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970";
        var key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));

        String expiredToken = Jwts.builder()
                .subject("test.user@example.com")
                .issuedAt(new Date(System.currentTimeMillis() - 10000))
                .expiration(new Date(System.currentTimeMillis() - 1000))
                .signWith(key)
                .compact();

        assertThrows(ExpiredJwtException.class, () -> jwtService.extractEmail(expiredToken));
    }
}