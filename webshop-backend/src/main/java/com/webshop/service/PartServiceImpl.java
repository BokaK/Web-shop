package com.webshop.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webshop.exception.ShopException;
import com.webshop.model.Part;
import com.webshop.persistence.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartServiceImpl implements PartService {

    private final PartRepository partRepository;
    private final ObjectMapper objectMapper;

    @Autowired
    public PartServiceImpl(PartRepository partRepository, ObjectMapper objectMapper) {
        this.partRepository = partRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public String getAllParts() {
        List<Part> parts = (List<Part>) partRepository.findAll();
        String json = "";
        try {
            json = objectMapper.writeValueAsString(parts);
        } catch (JsonProcessingException e) {
            throw new ShopException("Serialization of the parts fails.");
        }
        return json;
    }
}
