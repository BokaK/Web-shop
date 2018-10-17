package com.webshop.service;

import com.webshop.model.Part;

import java.util.List;

public interface PartService {

    List<Part> getAllParts();
    void savePart(Part part);

    void updatePart(Part part);

    void deletePart(String id);
}
