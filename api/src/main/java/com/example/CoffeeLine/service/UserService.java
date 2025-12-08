package com.example.CoffeeLine.service;

import com.example.CoffeeLine.domain.User;
import com.example.CoffeeLine.dto.user.ChangeUserRoleRequestDto;
import com.example.CoffeeLine.dto.user.UserUpdateRequestDto;
import com.example.CoffeeLine.service.command.UpdateUserCommand;

import java.util.List;
import java.util.UUID;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(UUID id);
    User createUser(User user);
    User updateUser(UpdateUserCommand command);
    User addRoleToUser(ChangeUserRoleRequestDto changeUserRoleRequestDto);
    User removeRoleFromUser(ChangeUserRoleRequestDto changeUserRoleRequestDto);
    void deleteUserById(UUID id);
}
