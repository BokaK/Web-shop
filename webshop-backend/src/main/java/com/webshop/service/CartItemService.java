package com.webshop.service;

import com.webshop.model.CartItem;

import java.util.List;

public interface CartItemService {
    List<CartItem> findByCartId(Long id);
}
