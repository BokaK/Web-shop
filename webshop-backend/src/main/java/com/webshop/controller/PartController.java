package com.webshop.controller;

import com.webshop.model.Part;
import com.webshop.service.PartService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/part")
public class PartController {

    private final PartService partService;

    @GetMapping(value = "/getAll")
    public List<Part> getAllParts() {
        return partService.getAllParts();
    }
}
