package com.example.CoffeeLine.web;

import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.user.ChangeUserRoleRequestDto;
import com.example.CoffeeLine.dto.user.UserResponseDto;
import com.example.CoffeeLine.dto.user.UserUpdateRequestDto;
import com.example.CoffeeLine.security.CustomUserDetailsService;
import com.example.CoffeeLine.service.JwtService;
import com.example.CoffeeLine.service.UserService;
import com.example.CoffeeLine.service.command.UpdateUserCommand;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
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
        // given
        UserUpdateRequestDto request = new UserUpdateRequestDto(
                "John",
                "0991112233",
                "password123"
        );

        UUID userId = UUID.randomUUID();

        User updatedUser = mock(User.class);
        when(userService.updateUser(any(UpdateUserCommand.class)))
                .thenReturn(updatedUser);
        when(userMapper.toUserResponseDto(updatedUser)).thenReturn(userResponseDto);

        // when + then
        mockMvc.perform(put("/api/v1/users/{id}", userId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(userResponseDto.getId().toString()))
                .andExpect(jsonPath("$.name").value(userResponseDto.getName()));

        // capture the argument passed to service
        ArgumentCaptor<UpdateUserCommand> captor =
                ArgumentCaptor.forClass(UpdateUserCommand.class);

        verify(userService).updateUser(captor.capture());
        UpdateUserCommand capturedCmd = captor.getValue();

        assertEquals(userId, capturedCmd.id());
        assertEquals(request.getName(), capturedCmd.name());
        assertEquals(request.getPhoneNumber(), capturedCmd.phoneNumber());
        assertEquals(request.getPassword(), capturedCmd.password());
    }


    @Test
    @DisplayName("updateUser should return 400 when input has invalid fields")
    void updateUser_InvalidInput_Returns400() throws Exception {
        // given
        UserUpdateRequestDto invalidRequest = new UserUpdateRequestDto(
                "",
                "",
                ""
        );

        UUID userId = UUID.randomUUID(); // required for the path

        mockMvc.perform(put("/api/v1/users/{id}", userId)
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