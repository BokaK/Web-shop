package com.webshop.persistence;

import com.webshop.model.CartItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemRepository extends CrudRepository<CartItem, Long> {

    List<CartItem> findByCartId(Long cardId);

    void deleteAllByCartId(Long cardId);
}
