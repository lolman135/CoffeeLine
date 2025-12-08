package com.example.CoffeeLine.service;

import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.auth.SignInRequestDto;
import com.example.CoffeeLine.dto.auth.SignUpRequestDto;
import com.example.CoffeeLine.security.CustomUserDetailsService;
import com.example.CoffeeLine.service.exception.EmailAlreadyExistsException;
import com.example.CoffeeLine.service.impl.AuthenticationServiceImpl;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest(classes = AuthenticationServiceImpl.class)
class AuthenticationServiceImplTest {

    @Autowired
    private AuthenticationService authenticationService;

    @MockitoBean
    private AuthenticationManager authenticationManager;

    @MockitoBean
    private PasswordEncoder passwordEncoder;

    @MockitoBean
    private JwtService jwtService;

    @MockitoBean
    private CustomUserDetailsService userDetailsService;

    @MockitoBean
    private UserService userService;

    @Test
    @DisplayName("signUp should create user with encoded password and default role, then return token")
    void signUp_Success() {
        SignUpRequestDto requestDto = new SignUpRequestDto(
                "New User",
                "new.user@example.com",
                "0931234567",
                "rawPassword"
        );

        when(passwordEncoder.encode("rawPassword")).thenReturn("encodedPassword");
        when(userService.createUser(any(User.class))).thenAnswer(i -> i.getArguments()[0]);
        when(jwtService.generateToken(any(User.class))).thenReturn("jwt-token-example");

        String token = authenticationService.signUp(requestDto);

        assertNotNull(token);
        assertEquals("jwt-token-example", token);

        verify(passwordEncoder).encode("rawPassword");

        ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
        verify(userService).createUser(userCaptor.capture());

        User capturedUser = userCaptor.getValue();
        assertEquals("New User", capturedUser.getName());
        assertEquals("new.user@example.com", capturedUser.getEmail());
        assertEquals("0931234567", capturedUser.getPhoneNumber());
        assertEquals("encodedPassword", capturedUser.getPassword());
        assertEquals(1, capturedUser.getRoles().size());
        assertTrue(capturedUser.getRoles().contains(Role.ROLE_USER));
    }

    @Test
    @DisplayName("signUp should throw exception and not generate token when email exists")
    void signUp_Fails_WhenEmailExists() {
        SignUpRequestDto requestDto = new SignUpRequestDto(
                "User", "taken@email.com", "0930000000", "pass"
        );

        when(passwordEncoder.encode(any())).thenReturn("encoded");
        doThrow(new EmailAlreadyExistsException("taken@email.com"))
                .when(userService).createUser(any(User.class));

        assertThrows(EmailAlreadyExistsException.class, () -> authenticationService.signUp(requestDto));

        verify(jwtService, never()).generateToken(any());
    }

    @Test
    @DisplayName("signIn should authenticate user and return token")
    void signIn_Success() {
        SignInRequestDto requestDto = new SignInRequestDto("user@example.com", "password");

        User userDetails = new User();
        userDetails.setEmail("user@example.com");
        userDetails.setId(UUID.randomUUID());

        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class))).thenReturn(null);
        when(userDetailsService.loadUserByUsername("user@example.com")).thenReturn(userDetails);
        when(jwtService.generateToken(userDetails)).thenReturn("access-token");

        String token = authenticationService.signIn(requestDto);

        assertNotNull(token);
        assertEquals("access-token", token);

        verify(authenticationManager).authenticate(any(UsernamePasswordAuthenticationToken.class));
        verify(userDetailsService).loadUserByUsername("user@example.com");
    }

    @Test
    @DisplayName("signIn should throw exception when authentication fails")
    void signIn_Fails_WhenCredentialsInvalid() {
        SignInRequestDto requestDto = new SignInRequestDto("wrong@example.com", "wrongPass");

        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenThrow(new BadCredentialsException("Bad credentials"));

        assertThrows(BadCredentialsException.class, () -> authenticationService.signIn(requestDto));

        verify(userDetailsService, never()).loadUserByUsername(anyString());
        verify(jwtService, never()).generateToken(any(UserDetails.class));
    }
}