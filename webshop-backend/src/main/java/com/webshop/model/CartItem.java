package com.webshop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * Created by user on 13.9.2018.
 */
@Table(name = "cartItem")
@Entity
@Setter
@Getter
public class CartItem extends BaseEntity {

    @NotNull
    @Min(value = 1)
    private int quantity;

    @ManyToOne
    private Part part;

    @ManyToOne
    private Cart cart;

}
