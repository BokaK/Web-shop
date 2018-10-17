package com.webshop.service;

import com.webshop.model.UserObject;

import java.util.List;

public interface UserService {
    List<UserObject> getAllUsers();
    
    void saveUser(UserObject user);

    void updateUser(UserObject user);

    void deleteUser(String id);
}
