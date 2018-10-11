package com.webshop.service;

import com.webshop.model.Brand;

import java.util.List;

public interface BrandService {

    List<Brand> getAllBrands();

    void saveBrand(Brand brand);

    void updateBrand(Brand brand);

    void deleteBrand(String id);
}
