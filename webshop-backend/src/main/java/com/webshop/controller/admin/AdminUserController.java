package com.webshop.controller.admin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webshop.exception.ShopException;
import com.webshop.model.UserObject;
import com.webshop.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin/user")
@AllArgsConstructor
public class AdminUserController {

    private final ObjectMapper objectMapper;
    private final UserService userService;
    
    @GetMapping(value = "/")
    public ResponseEntity<String> getAuthenticatedUser(HttpServletRequest request) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String json = "";
        try {
            json = objectMapper.writeValueAsString(auth);
        } catch (JsonProcessingException e) {
            throw new ShopException("cannnot deserialize");
        }

        return ResponseEntity.ok(json);
    }

    @GetMapping("/getAll")
    public List<UserObject> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping(value = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void saveUser(@Valid @RequestBody UserObject user) {
        userService.saveUser(user);
    }

    @PostMapping(value = "/update")
    @ResponseStatus(HttpStatus.CREATED)
    public void updateUser(@RequestBody UserObject user) {
        userService.updateUser(user);
    }

    @GetMapping(value = "/delete/{id}")
    public void saveUser(@PathVariable String id) {
        userService.deleteUser(id);
    }
}