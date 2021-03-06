package com.webshop.persistence;

import com.webshop.model.UserObject;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserObject, Long> {

}
