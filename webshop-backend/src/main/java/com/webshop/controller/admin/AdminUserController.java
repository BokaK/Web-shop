package com.webshop.controller.admin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webshop.exception.ShopException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/admin/user")
@AllArgsConstructor
public class AdminUserController {

    private final ObjectMapper objectMapper;

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
}