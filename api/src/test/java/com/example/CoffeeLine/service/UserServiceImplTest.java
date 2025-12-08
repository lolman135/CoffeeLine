package com.example.CoffeeLine.service;

import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.user.ChangeUserRoleRequestDto;
import com.example.CoffeeLine.dto.user.UserUpdateRequestDto;
import com.example.CoffeeLine.service.exception.EmailAlreadyExistsException;
import com.example.CoffeeLine.service.exception.UserNotFoundException;
import com.example.CoffeeLine.service.impl.UserServiceImpl;
import com.example.CoffeeLine.service.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest(classes = UserServiceImpl.class)
class UserServiceImplTest {

    @Autowired
    private UserService userService;

    @MockitoBean
    private UserRepository userRepository;

    @MockitoBean
    private PasswordEncoder passwordEncoder;

    private User createTestUser() {
        return User.builder()
                .id(UUID.randomUUID())
                .name("John Doe")
                .email("john.doe@example.com")
                .phoneNumber("0987654321")
                .password("hashedPassword123")
                .roles(new HashSet<>(Set.of(Role.ROLE_USER)))
                .orders(new ArrayList<>())
                .build();
    }

    @Test
    @DisplayName("getAllUsers should return list of users")
    void getAllUsers_ReturnsList() {
        User user1 = createTestUser();
        User user2 = createTestUser();
        user2.setId(UUID.randomUUID());
        user2.setEmail("jane.doe@example.com");
        user2.setName("Jane Doe");

        when(userRepository.findAll()).thenReturn(List.of(user1, user2));

        List<User> result = userService.getAllUsers();

        assertEquals(2, result.size());
        assertEquals(user1.getId(), result.get(0).getId());
        assertEquals(user2.getId(), result.get(1).getId());

        verify(userRepository).findAll();
    }

    @Test
    @DisplayName("getUserById should return user with all correct fields when found")
    void getUserById_Success() {
        User user = createTestUser();
        UUID id = user.getId();

        when(userRepository.findById(id)).thenReturn(Optional.of(user));

        User found = userService.getUserById(id);

        assertNotNull(found);
        assertEquals(user.getId(), found.getId());
        assertEquals(user.getName(), found.getName());
        assertEquals(user.getEmail(), found.getEmail());
        assertEquals(user.getPhoneNumber(), found.getPhoneNumber());
        assertEquals(user.getPassword(), found.getPassword());
        assertEquals(user.getRoles(), found.getRoles());
        assertEquals(user.getOrders(), found.getOrders());
    }

    @Test
    @DisplayName("getUserById should throw exception when user not found")
    void getUserById_NotFound() {
        UUID id = UUID.randomUUID();
        when(userRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.getUserById(id));
    }

    @Test
    @DisplayName("createUser should save user successfully with all fields mapped")
    void createUser_Success() {
        User user = createTestUser();

        when(userRepository.existsByEmail(user.getEmail())).thenReturn(false);
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArguments()[0]);

        User createdUser = userService.createUser(user);

        assertNotNull(createdUser);
        assertEquals(user.getId(), createdUser.getId());
        assertEquals(user.getName(), createdUser.getName());
        assertEquals(user.getEmail(), createdUser.getEmail());
        assertEquals(user.getPhoneNumber(), createdUser.getPhoneNumber());
        assertEquals(user.getPassword(), createdUser.getPassword());
        assertEquals(user.getRoles(), createdUser.getRoles());

        ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
        verify(userRepository).save(userCaptor.capture());

        User capturedUser = userCaptor.getValue();
        assertEquals(user.getName(), capturedUser.getName());
        assertEquals(user.getEmail(), capturedUser.getEmail());
        assertEquals(user.getPhoneNumber(), capturedUser.getPhoneNumber());
        assertEquals(user.getPassword(), capturedUser.getPassword());
        assertEquals(user.getRoles(), capturedUser.getRoles());
    }

    @Test
    @DisplayName("createUser should throw exception when email already exists")
    void createUser_EmailExists() {
        User user = createTestUser();

        when(userRepository.existsByEmail(user.getEmail())).thenReturn(true);

        assertThrows(EmailAlreadyExistsException.class, () -> userService.createUser(user));
        verify(userRepository, never()).save(any());
    }

    @Test
    @DisplayName("updateUser should update specific fields, encode password and persist correct data")
    void updateUser_UpdatesFields() {
        User existingUser = createTestUser();
        UUID id = existingUser.getId();

        UserUpdateRequestDto dto = new UserUpdateRequestDto(
                id.toString(),
                "New Name",
                null,
                "newSecretPassword"
        );

        when(userRepository.findById(id)).thenReturn(Optional.of(existingUser));
        when(passwordEncoder.encode("newSecretPassword")).thenReturn("encodedNewPassword");
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArguments()[0]);

        User updatedUser = userService.updateUser(dto);

        assertNotNull(updatedUser);
        assertEquals("New Name", updatedUser.getName());
        assertEquals("encodedNewPassword", updatedUser.getPassword());
        assertEquals("0987654321", updatedUser.getPhoneNumber());
        assertEquals("john.doe@example.com", updatedUser.getEmail());

        ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
        verify(userRepository).save(userCaptor.capture());

        User capturedUser = userCaptor.getValue();

        assertEquals("New Name", capturedUser.getName());
        assertEquals("encodedNewPassword", capturedUser.getPassword());
        assertEquals("0987654321", capturedUser.getPhoneNumber());
        assertEquals("john.doe@example.com", capturedUser.getEmail());
        assertEquals(existingUser.getId(), capturedUser.getId());

        verify(passwordEncoder).encode("newSecretPassword");
    }

    @Test
    @DisplayName("updateUser should update phone number but keep name and password unchanged when they are null")
    void updateUser_UpdatesPhoneOnly() {
        User existingUser = createTestUser();
        UUID id = existingUser.getId();

        UserUpdateRequestDto dto = new UserUpdateRequestDto(
                id.toString(),
                null,
                "0999999999",
                null
        );

        when(userRepository.findById(id)).thenReturn(Optional.of(existingUser));
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArguments()[0]);

        User updatedUser = userService.updateUser(dto);

        assertNotNull(updatedUser);
        assertEquals("0999999999", updatedUser.getPhoneNumber());
        assertEquals("John Doe", updatedUser.getName());
        assertEquals("hashedPassword123", updatedUser.getPassword());

        verify(passwordEncoder, never()).encode(any());
        verify(userRepository).save(existingUser);
    }

    @Test
    @DisplayName("addRoleToUser should add new role")
    void addRoleToUser_Success() {
        User user = createTestUser();
        UUID id = user.getId();

        ChangeUserRoleRequestDto dto = new ChangeUserRoleRequestDto(id.toString(), "ROLE_ADMIN");

        when(userRepository.findById(id)).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArguments()[0]);

        User result = userService.addRoleToUser(dto);

        assertEquals(2, result.getRoles().size());
        assertTrue(result.getRoles().contains(Role.ROLE_USER));
        assertTrue(result.getRoles().contains(Role.ROLE_ADMIN));

        verify(userRepository).save(user);
    }

    @Test
    @DisplayName("removeRoleFromUser should remove role")
    void removeRoleFromUser_Success() {
        User user = createTestUser();
        user.getRoles().add(Role.ROLE_CASHIER);
        UUID id = user.getId();

        ChangeUserRoleRequestDto dto = new ChangeUserRoleRequestDto(id.toString(), "ROLE_CASHIER");

        when(userRepository.findById(id)).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArguments()[0]);

        User result = userService.removeRoleFromUser(dto);

        assertEquals(1, result.getRoles().size());
        assertTrue(result.getRoles().contains(Role.ROLE_USER));
        assertFalse(result.getRoles().contains(Role.ROLE_CASHIER));

        verify(userRepository).save(user);
    }

    @Test
    @DisplayName("deleteUserById should call repository delete method")
    void deleteUserById_Success() {
        UUID id = UUID.randomUUID();
        doNothing().when(userRepository).deleteById(id);

        userService.deleteUserById(id);

        verify(userRepository).deleteById(id);
    }
}