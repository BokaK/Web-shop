package com.webshop.controller;

import com.webshop.service.PartService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/parts")
public class PartController {

    private final PartService partService;

    @GetMapping(value = "/getAll")
    public ResponseEntity<String> getAllParts() {
        String json = partService.getAllParts();
        return ResponseEntity.ok(json);
    }
}
