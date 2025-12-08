package com.example.CoffeeLine.dto.validation;

import com.example.CoffeeLine.dto.validation.status.OrderStatusValidator;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
class OrderStatusValidatorTest {

    @InjectMocks
    private OrderStatusValidator orderStatusValidator;

    @Test
    @DisplayName("isValid should return true for valid status (CREATED)")
    void isValid_ReturnsTrue_ForValidStatus() {
        boolean result = orderStatusValidator.isValid("CREATED", null);
        assertTrue(result);
    }

    @Test
    @DisplayName("isValid should return false for invalid status string")
    void isValid_ReturnsFalse_ForInvalidStatus() {
        boolean result = orderStatusValidator.isValid("WRONG_STATUS", null);
        assertFalse(result);
    }

    @Test
    @DisplayName("isValid should return false for null input")
    void isValid_ReturnsFalse_ForNull() {
        boolean result = orderStatusValidator.isValid(null, null);
        assertFalse(result);
    }
}