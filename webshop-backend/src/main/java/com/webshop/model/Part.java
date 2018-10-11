package com.webshop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by user on 13.9.2018.
 */
@Table(name = "part")
@Entity
@Setter
@Getter

public class Part extends BaseEntity {

    private String name;

    private String description;

    private double price;

    private double priceOnSale;

    private boolean onSale;

    private boolean onStock;

    private int stockNumber;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "brand_id")
    private Brand brand;
}
