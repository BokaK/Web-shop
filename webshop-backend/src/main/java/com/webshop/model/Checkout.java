package com.webshop.model;

import com.webshop.model.enums.CheckoutStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

/**
 * Created by user on 13.9.2018.
 */
@Entity
@Table(name = "checkout")
@Setter
@Getter
public class Checkout extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private CheckoutStatus checkoutStatus;

    @ManyToOne
    private UserObject user;

    @OneToOne
    private Cart cart;

    private Date orderDate;
}
