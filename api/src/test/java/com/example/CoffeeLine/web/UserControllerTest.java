package com.example.CoffeeLine.web;

import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.user.ChangeUserRoleRequestDto;
import com.example.CoffeeLine.dto.user.UserResponseDto;
import com.example.CoffeeLine.dto.user.UserUpdateRequestDto;
import com.example.CoffeeLine.security.CustomUserDetailsService;
import com.example.CoffeeLine.service.JwtService;
import com.example.CoffeeLine.service.UserService;
import com.example.CoffeeLine.service.repository.UserRepository;
import com.example.CoffeeLine.web.mapper.UserMapper;
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

import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = UserController.class)
@AutoConfigureMockMvc(addFilters = false)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private UserService userService;

    @MockitoBean
    private UserMapper userMapper;

    @MockitoBean
    private UserRepository userRepository;

    @MockitoBean
    private JwtService jwtService;

    @MockitoBean
    private CustomUserDetailsService customUserDetailsService;

    private final UUID userId = UUID.randomUUID();

    private final UserResponseDto userResponseDto = new UserResponseDto(
            userId.toString(),
            "John Doe",
            "john@example.com",
            "0930000000",
            "USER",
            Collections.emptyList()
    );

    @Test
    @DisplayName("getAllUsers should return 200 and detailed list of users")
    void getAllUsers_Returns200() throws Exception {
        User domainUser = mock(User.class);

        when(userService.getAllUsers()).thenReturn(List.of(domainUser));
        when(userMapper.toUserResponseDto(domainUser)).thenReturn(userResponseDto);

        mockMvc.perform(get("/api/v1/users"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.users.size()").value(1))
                .andExpect(jsonPath("$.users[0].id").value(userId.toString()))
                .andExpect(jsonPath("$.users[0].name").value("John Doe"))
                .andExpect(jsonPath("$.users[0].email").value("john@example.com"))
                .andExpect(jsonPath("$.users[0].phoneNumber").value("0930000000"))
                .andExpect(jsonPath("$.users[0].roles").value("USER"));

        verify(userService).getAllUsers();
    }

    @Test
    @DisplayName("getUserById should return 200 and full user details")
    void getUserById_Returns200() throws Exception {
        User domainUser = mock(User.class);
        when(userService.getUserById(userId)).thenReturn(domainUser);
        when(userMapper.toUserResponseDto(domainUser)).thenReturn(userResponseDto);

        mockMvc.perform(get("/api/v1/users/{id}", userId))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(userId.toString()))
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.email").value("john@example.com"))
                .andExpect(jsonPath("$.phoneNumber").value("0930000000"))
                .andExpect(jsonPath("$.roles").value("USER"));

        verify(userService).getUserById(userId);
    }

    @Test
    @DisplayName("updateUser should call service with correct data and return updated user")
    void updateUser_Returns200() throws Exception {
        UserUpdateRequestDto request = new UserUpdateRequestDto(
                userId.toString(), "Updated Name", "0931111111", "newPass"
        );

        User updatedUser = mock(User.class);
        when(userService.updateUser(any(UserUpdateRequestDto.class))).thenReturn(updatedUser);
        when(userMapper.toUserResponseDto(updatedUser)).thenReturn(userResponseDto);

        mockMvc.perform(put("/api/v1/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(userId.toString()))
                .andExpect(jsonPath("$.name").value("John Doe"));

        ArgumentCaptor<UserUpdateRequestDto> captor = ArgumentCaptor.forClass(UserUpdateRequestDto.class);
        verify(userService).updateUser(captor.capture());

        UserUpdateRequestDto capturedDto = captor.getValue();
        assertEquals(request.getId(), capturedDto.getId());
        assertEquals(request.getName(), capturedDto.getName());
        assertEquals(request.getPhoneNumber(), capturedDto.getPhoneNumber());
        assertEquals(request.getPassword(), capturedDto.getPassword());
    }

    @Test
    @DisplayName("updateUser should return 400 when input has invalid fields")
    void updateUser_InvalidInput_Returns400() throws Exception {
        UserUpdateRequestDto invalidRequest = new UserUpdateRequestDto(
                "short-id",
                "A",
                "1234567890", // Invalid: must start with 0
                "short" // Invalid: password size min > 5
        );

        mockMvc.perform(put("/api/v1/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        verify(userService, never()).updateUser(any());
    }

    @Test
    @DisplayName("addRoleToUser should pass correct role and id to service")
    void addRoleToUser_Returns200() throws Exception {
        ChangeUserRoleRequestDto request = new ChangeUserRoleRequestDto(
                userId.toString(), "ROLE_ADMIN"
        );

        User domainUser = mock(User.class);
        when(userService.addRoleToUser(any(ChangeUserRoleRequestDto.class))).thenReturn(domainUser);
        when(userMapper.toUserResponseDto(domainUser)).thenReturn(userResponseDto);

        mockMvc.perform(put("/api/v1/users/role/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());

        ArgumentCaptor<ChangeUserRoleRequestDto> captor = ArgumentCaptor.forClass(ChangeUserRoleRequestDto.class);
        verify(userService).addRoleToUser(captor.capture());

        assertEquals(request.getId(), captor.getValue().getId());
        assertEquals("ROLE_ADMIN", captor.getValue().getRole());
    }

    @Test
    @DisplayName("removeRoleFromUser should pass correct data to service")
    void removeRoleFromUser_Returns200() throws Exception {
        ChangeUserRoleRequestDto request = new ChangeUserRoleRequestDto(
                userId.toString(), "ROLE_USER"
        );

        User domainUser = mock(User.class);
        when(userService.removeRoleFromUser(any(ChangeUserRoleRequestDto.class))).thenReturn(domainUser);
        when(userMapper.toUserResponseDto(domainUser)).thenReturn(userResponseDto);

        mockMvc.perform(put("/api/v1/users/role/remove")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());

        ArgumentCaptor<ChangeUserRoleRequestDto> captor = ArgumentCaptor.forClass(ChangeUserRoleRequestDto.class);
        verify(userService).removeRoleFromUser(captor.capture());
        assertEquals("ROLE_USER", captor.getValue().getRole());
    }

    @Test
    @DisplayName("changeRole should return 400 when role or id is invalid")
    void changeRole_InvalidInput_Returns400() throws Exception {
        ChangeUserRoleRequestDto invalidRequest = new ChangeUserRoleRequestDto(
                "short-id", // Invalid: must be 36 chars (UUID)
                "MANAGER"   // Invalid: @ValidRole
        );

        mockMvc.perform(put("/api/v1/users/role/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        mockMvc.perform(put("/api/v1/users/role/remove")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());

        verify(userService, never()).addRoleToUser(any());
        verify(userService, never()).removeRoleFromUser(any());
    }

    @Test
    @DisplayName("deleteUserById should return 200")
    void deleteUserById_Returns200() throws Exception {
        doNothing().when(userService).deleteUserById(userId);

        mockMvc.perform(delete("/api/v1/users/{id}", userId))
                .andExpect(status().isOk());

        verify(userService).deleteUserById(userId);
    }
}