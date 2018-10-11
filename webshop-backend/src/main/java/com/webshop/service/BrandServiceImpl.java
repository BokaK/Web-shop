package com.webshop.service;

import com.webshop.model.Brand;
import com.webshop.persistence.BrandRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BrandServiceImpl implements BrandService {

    private final BrandRepository brandRepository;

    @Override
    public List<Brand> getAllBrands() {
        return (List<Brand>) brandRepository.findAll();
    }

    @Override
    public void saveBrand(Brand brand) {
        brandRepository.save(brand);
    }

    @Override
    public void updateBrand(Brand brand) {
        brandRepository.save(brand);
    }

    @Override
    public void deleteBrand(String id) {
        brandRepository.deleteById(Long.valueOf(id));
    }
}
