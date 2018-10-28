package com.webshop.service;

import com.webshop.model.Part;

import java.util.List;

public interface PartService {

    List<Part> getAllParts();

    Part savePart(Part part);

    Part updatePart(Part part);

    void deletePart(String id);

    Part findById(Long id);
}
