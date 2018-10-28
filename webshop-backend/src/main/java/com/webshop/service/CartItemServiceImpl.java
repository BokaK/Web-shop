package com.webshop.service;

import com.webshop.model.CartItem;
import com.webshop.persistence.CartItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CartItemServiceImpl implements CartItemService{

    private final CartItemRepository cartItemRepository;

    @Override
    public List<CartItem> findByCartId(Long id) {
        return cartItemRepository.findByCartId(id);
    }

}
