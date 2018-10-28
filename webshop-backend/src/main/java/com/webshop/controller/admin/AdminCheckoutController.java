package com.webshop.controller.admin;

import com.webshop.model.Checkout;
import com.webshop.service.CheckoutService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/checkout")
@AllArgsConstructor
public class AdminCheckoutController {

    private final CheckoutService checkoutService;

    @GetMapping("/getAll")
    public List<Checkout> getAll() {
        return checkoutService.findAll();
    }

    @PostMapping("/update")
    public void updateCheckout(@RequestBody Checkout checkout) {
        checkoutService.update(checkout);
    }
}
