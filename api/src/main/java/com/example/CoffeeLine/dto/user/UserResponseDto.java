package com.example.CoffeeLine.dto.user;

import lombok.Value;
import java.util.List;
import com.example.CoffeeLine.dto.order.OrderResponseDto;

@Value
public class UserResponseDto {
    String id;
    String name;
    String email;
    String phoneNumber;
    String roles;
    List<OrderResponseDto> orders;
}
