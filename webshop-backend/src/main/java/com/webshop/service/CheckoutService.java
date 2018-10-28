package com.webshop.service;

import com.webshop.model.Checkout;

import java.util.List;

public interface CheckoutService {
    void deleteById(Long id);
    List<Checkout> findAll();
    void update(Checkout checkout);
}
