package com.example.CoffeeLine.web;

import com.example.CoffeeLine.service.exception.EmailAlreadyExistsException;
import com.example.CoffeeLine.service.exception.ResourceNotFoundException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.context.request.WebRequest;

import java.net.URI;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class GlobalExceptionHandlerTest {

    private final GlobalExceptionHandler handler = new GlobalExceptionHandler();

    @Test
    @DisplayName("handeResourceNotFound should return 404 and correct problem detail")
    void handeResourceNotFound_Returns404() {
        ResourceNotFoundException ex = new ResourceNotFoundException("User not found");

        ResponseEntity<Object> response = handler.handeResourceNotFound(ex);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertInstanceOf(ProblemDetail.class, response.getBody());

        ProblemDetail problem = (ProblemDetail) response.getBody();
        assertEquals("Resource Not Found", problem.getTitle());
        assertEquals("User not found", problem.getDetail());
        assertEquals(URI.create("urn:problem-type:resource-not-found"), problem.getType());
    }

    @Test
    @DisplayName("handeEmailAlreadyExists should return 409 and correct problem detail")
    void handeEmailAlreadyExists_Returns409() {
        EmailAlreadyExistsException ex = new EmailAlreadyExistsException("test@email.com");

        ResponseEntity<Object> response = handler.handeEmailAlreadyExists(ex);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());

        ProblemDetail problem = (ProblemDetail) response.getBody();
        assertEquals("Email Already Exists", problem.getTitle());
        assertEquals(URI.create("urn:problem-type:conflict-error"), problem.getType());
    }

    @Test
    @DisplayName("handleExpiredJwt should return 401 and correct message")
    void handleExpiredJwt_Returns401() {
        ExpiredJwtException ex = new ExpiredJwtException(null, null, "Token expired");

        ResponseEntity<Object> response = handler.handleExpiredJwt(ex);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());

        ProblemDetail problem = (ProblemDetail) response.getBody();
        assertEquals("Expired JWT Exception", problem.getTitle());
    }

    @Test
    @DisplayName("handleSignature should return 401 for invalid signature")
    void handleSignature_Returns401() {
        SignatureException ex = new SignatureException("Invalid signature");

        ResponseEntity<Object> response = handler.handleSignature(ex);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }

    @Test
    @DisplayName("handleBadCredentials should return 401")
    void handleBadCredentials_Returns401() {
        BadCredentialsException ex = new BadCredentialsException("Wrong password");

        ResponseEntity<Object> response = handler.handleBadCredentials(ex);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }

    @Test
    @DisplayName("handleAccessDenied should return 403 Forbidden")
    void handleAccessDenied_Returns403() {
        AccessDeniedException ex = new AccessDeniedException("Access denied");

        ResponseEntity<Object> response = handler.handleAccessDenied(ex);

        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    @DisplayName("handleInternalServerError should return 500 for generic exceptions")
    void handleInternalServerError_Returns500() {
        RuntimeException ex = new RuntimeException("Something went wrong");

        ResponseEntity<Object> response = handler.handleInternalServerError(ex);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());

        ProblemDetail problem = (ProblemDetail) response.getBody();
        assertEquals("Internal Server Error", problem.getTitle());
    }

    @Test
    @DisplayName("handleMethodArgumentNotValid should return 400 and validation errors map")
    void handleMethodArgumentNotValid_Returns400() {
        BindingResult bindingResult = new BeanPropertyBindingResult(new Object(), "target");
        bindingResult.addError(new FieldError("target", "email", "must not be empty"));

        MethodArgumentNotValidException ex = new MethodArgumentNotValidException(null, bindingResult);

        ResponseEntity<Object> response = handler.handleMethodArgumentNotValid(
                ex,
                HttpHeaders.EMPTY,
                HttpStatus.BAD_REQUEST,
                mock(WebRequest.class)
        );

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertInstanceOf(ProblemDetail.class, response.getBody());

        ProblemDetail problem = (ProblemDetail) response.getBody();
        assertEquals("Validation Error", problem.getTitle());

        Map<String, Object> properties = problem.getProperties();
        assertNotNull(properties);
        assertTrue(properties.containsKey("validationDetails"));
    }
}