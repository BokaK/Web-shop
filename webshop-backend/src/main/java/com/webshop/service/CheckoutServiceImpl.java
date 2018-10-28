package com.webshop.service;

import com.webshop.model.Cart;
import com.webshop.model.Checkout;
import com.webshop.persistence.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CheckoutServiceImpl implements CheckoutService {
    private final CheckoutRepository checkoutRepository;
    private final ContactInfoRepository contactInfoRepository;
    private final UserRepository userRepository;
    private final CartItemRepository cartItemRepository;
    private final CartRepository cartRepository;

    @Override
    public void deleteById(Long id) {
        Checkout checkout = checkoutRepository.findById(id).get();
        Cart cart = checkout.getCart();

        checkoutRepository.deleteById(id);
        cartItemRepository.deleteAllByCartId(cart.getId());
        cartRepository.delete(cart);
    }

    @Override
    public List<Checkout> findAll() {
        return (List<Checkout>) checkoutRepository.findAll();
    }

    @Override
    public void update(Checkout checkout) {
        checkoutRepository.save(checkout);
    }
}

