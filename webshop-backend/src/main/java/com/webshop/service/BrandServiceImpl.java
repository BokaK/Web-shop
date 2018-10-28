package com.webshop.service;

import com.webshop.model.Brand;
import com.webshop.persistence.BrandRepository;
import com.webshop.persistence.PartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
public class BrandServiceImpl implements BrandService {

    private final BrandRepository brandRepository;
    private final PartRepository partRepository;

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
    public void deleteBrand(Brand brand) {
        partRepository.deleteByBrand(brand);
        brandRepository.delete(brand);
    }
}
