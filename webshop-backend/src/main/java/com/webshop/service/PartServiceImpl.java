package com.webshop.service;

import com.webshop.model.Part;
import com.webshop.persistence.PartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PartServiceImpl implements PartService {

    private final PartRepository partRepository;

    @Override
    public List<Part> getAllParts() {
        return (List<Part>) partRepository.findAll();
    }

    @Override
    public void savePart(Part part) {
        partRepository.save(part);
    }

    @Override
    public void updatePart(Part part) {
        partRepository.save(part);
    }

    @Override
    public void deletePart(String id) {
        partRepository.deleteById(Long.valueOf(id));
    }

}
