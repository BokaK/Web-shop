package com.webshop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by user on 03.6.2017.
 */
@Entity
@Table(name = "brand")
@Setter
@Getter
public class Brand extends BaseEntity {

    private String brandName;

}
