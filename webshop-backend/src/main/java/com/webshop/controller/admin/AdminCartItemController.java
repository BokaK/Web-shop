package com.webshop.controller.admin;


import com.webshop.model.CartItem;
import com.webshop.service.CartItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/admin/cartItem")
@AllArgsConstructor
public class AdminCartItemController {

    private CartItemService cartItemService;

    @GetMapping(value = "/cartId/{id}")
    public List<CartItem> getByCartId(@PathVariable Long id) {
        return cartItemService.findByCartId(id);
    }

}
