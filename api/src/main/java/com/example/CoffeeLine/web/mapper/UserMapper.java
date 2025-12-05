package com.example.CoffeeLine.web.mapper;

import com.example.CoffeeLine.common.Role;
import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.domain.Order;
import com.example.CoffeeLine.dto.user.UserResponseDto;
import com.example.CoffeeLine.dto.order.OrderResponseDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = { OrderMapper.class })
public interface UserMapper {
    @Mapping(target = "roles", expression = "java(mapRolesToString(user.getRoles()))")
    @Mapping(target = "orders", source = "orders")
    UserResponseDto toUserResponseDto(User user);

    default String mapRolesToString(Set<Role> roles) {
        if (roles == null) {
            return null;
        }
        return roles.stream()
                .map(Enum::name)
                .collect(Collectors.joining(", "));
    }

}
