package com.webshop.service;

import com.webshop.model.PartImage;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface PartImageService {

    List<PartImage> findAll();
    Optional<PartImage> findById(Long id);
    PartImage insert(PartImage entity);
    PartImage update(Long id, PartImage entity);
    void deleteById(Long id);
    String savePicture(MultipartFile file);
    PartImage getByPartId(Long id);
}
