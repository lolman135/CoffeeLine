package com.example.CoffeeLine.web.mapper;

import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.Order;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.order.OrderResponseDto;
import com.example.CoffeeLine.dto.user.UserResponseDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Set;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserMapperTest {

    @Mock
    private OrderMapper orderMapper;

    @InjectMocks
    private UserMapperImpl userMapper;

    @Test
    @DisplayName("toUserResponseDto should map all fields and convert roles to string")
    void toUserResponseDto_MapsCorrectly() {
        UUID userId = UUID.randomUUID();
        User user = User.builder()
                .id(userId)
                .name("Test User")
                .email("test@email.com")
                .phoneNumber("1234567890")
                .roles(Set.of(Role.ROLE_USER, Role.ROLE_ADMIN))
                .orders(List.of(new Order()))
                .build();

        when(orderMapper.toOrderResponseDto(any(Order.class))).thenReturn(new OrderResponseDto(null, null, 0, null, null, null));

        UserResponseDto dto = userMapper.toUserResponseDto(user);

        assertNotNull(dto);
        assertEquals(userId.toString(), dto.getId());
        assertEquals("Test User", dto.getName());
        assertEquals("test@email.com", dto.getEmail());
        assertEquals("1234567890", dto.getPhoneNumber());

        assertTrue(dto.getRoles().contains("ROLE_USER"));
        assertTrue(dto.getRoles().contains("ROLE_ADMIN"));

        assertNotNull(dto.getOrders());
        assertEquals(1, dto.getOrders().size());
    }

    @Test
    @DisplayName("toUserResponseDto should return null when input is null")
    void toUserResponseDto_ReturnsNull() {
        assertNull(userMapper.toUserResponseDto(null));
    }
}