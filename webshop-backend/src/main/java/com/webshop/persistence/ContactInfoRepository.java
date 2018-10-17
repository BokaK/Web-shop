package com.webshop.persistence;

import com.webshop.model.ContactInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactInfoRepository extends CrudRepository<ContactInfo, Long> {
}
