package com.example.CoffeeLine.dto.coffee;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Value;


@Value
public class CoffeeUpdateRequestDto {
    @Schema(description = "Coffee name (not required)")
    @Size(min = 2, max = 50, message = "must be between 2 and 50 characters")
    String name;

    @Schema(description = "Coffee description (not required)")
    String description;

    @Schema(description = "Coffee price (not required)")
    @DecimalMin(value = "1", message = "must be at least 1")
    Double price;

    @Schema(description = "Coffee image URL (not required)")
    String imageUrl;

    @Schema(description = "Category ID (not required)")
    @Size(min = 36, max = 36, message = "must be a valid UUID")
    String categoryId;
}
