package com.example.CoffeeLine.service.exception;

public class CategoryNotFoundByNameException extends RuntimeException {
    public CategoryNotFoundByNameException(String message) {
        super(message);
    }
}
