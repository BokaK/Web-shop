package com.webshop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by user on 13.9.2018.
 */
@Entity
@Table(name = "cart")
@Setter
@Getter
public class Cart extends BaseEntity {

    private Double totalPrice;

}
