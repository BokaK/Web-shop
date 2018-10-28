package com.webshop.controller.admin;

import com.webshop.model.Brand;
import com.webshop.service.BrandService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin/brand")
@AllArgsConstructor
public class AdminBrandController {

    private final BrandService brandService;

    @GetMapping("/getAll")
    public List<Brand> getAllBrands() {
        return brandService.getAllBrands();
    }

    @PostMapping(value = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void saveBrand(@Valid @RequestBody Brand brand) {
        brandService.saveBrand(brand);
    }

    @PostMapping(value = "/update")
    @ResponseStatus(HttpStatus.CREATED)
    public void updateBrand(@RequestBody Brand brand) {
        brandService.updateBrand(brand);
    }

    @PostMapping(value = "/delete")
    @ResponseStatus(HttpStatus.CREATED)
    public void deleteBrand(@RequestBody Brand brand) {
        brandService.deleteBrand(brand);
    }
}
