package com.webshop.persistence;

import com.webshop.model.Brand;
import com.webshop.model.Part;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartRepository extends CrudRepository<Part, Long> {

    void deleteByBrand(Brand brand);
}

