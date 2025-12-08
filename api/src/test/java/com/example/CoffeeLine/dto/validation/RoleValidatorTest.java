package com.example.CoffeeLine.dto.validation;

import com.example.CoffeeLine.dto.validation.role.RoleValidator;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
class RoleValidatorTest {

    @InjectMocks
    private RoleValidator roleValidator;

    @Test
    @DisplayName("isValid should return true for valid role (ROLE_USER)")
    void isValid_ReturnsTrue_ForValidRole() {
        boolean result = roleValidator.isValid("ROLE_USER", null);
        assertTrue(result);
    }

    @Test
    @DisplayName("isValid should return true for valid role (ROLE_ADMIN)")
    void isValid_ReturnsTrue_ForAdminRole() {
        boolean result = roleValidator.isValid("ROLE_ADMIN", null);
        assertTrue(result);
    }

    @Test
    @DisplayName("isValid should return false for invalid role string")
    void isValid_ReturnsFalse_ForInvalidRole() {
        boolean result = roleValidator.isValid("INVALID_ROLE", null);
        assertFalse(result);
    }

    @Test
    @DisplayName("isValid should return false for null input")
    void isValid_ReturnsFalse_ForNull() {
        boolean result = roleValidator.isValid(null, null);
        assertFalse(result);
    }
}