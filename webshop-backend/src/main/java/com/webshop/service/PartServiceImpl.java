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
    public Part savePart(Part part) {
        return partRepository.save(part);
    }

    @Override
    public Part updatePart(Part part) {
        return partRepository.save(part);
    }

    // TODO remove the image when delete the part
    @Override
    public void deletePart(String id) {
        partRepository.deleteById(Long.valueOf(id));
    }

    @Override
    public Part findById(Long id) {
        return partRepository.findById(id).get();
    }

}
