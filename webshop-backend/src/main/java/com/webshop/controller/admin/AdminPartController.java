package com.webshop.controller.admin;

import com.webshop.model.Part;
import com.webshop.service.PartService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/admin/part")
@AllArgsConstructor
public class AdminPartController {

    private final PartService partService;

    @PostMapping(value = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Part savePart(@Valid @RequestBody Part part) {
        return partService.savePart(part);
    }

    @PostMapping(value = "/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Part updatePart(@RequestBody Part part) {
        return partService.updatePart(part);
    }

    @GetMapping(value = "/delete/{id}")
    public void savePart(@PathVariable String id) {
        partService.deletePart(id);
    }
}
