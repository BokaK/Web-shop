package com.webshop.controller.admin;

import com.webshop.model.Part;
import com.webshop.service.PartService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/part")
@AllArgsConstructor
public class AdminPartController {

    private final PartService partService;

    @PostMapping(value = "/insert", headers = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void insert(@RequestBody Part part) {
        partService.insertPart(part);
    }
}
