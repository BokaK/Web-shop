package com.webshop.persistence;

import com.webshop.model.PartImage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartImageRepository extends CrudRepository<PartImage, Long> {
    PartImage findByPartId(Long id);
}
