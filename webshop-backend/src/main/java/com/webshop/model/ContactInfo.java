package com.webshop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by user on 13.9.2018.
 */
@Entity
@Table(name = "contactInfo")
@Setter
@Getter
public class ContactInfo extends BaseEntity {

    private String firstName;

    private String lastName;

    private String phone;

    private String city;

    private String country;

    private String company;
}
