package com.webshop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Created by user on 13.9.2018.
 */
@Table(name = "partImage")
@Entity
@Setter
@Getter
public class PartImage extends BaseEntity {

    @OneToOne(fetch = FetchType.EAGER)
    private Part part;

    private String imageUrl;
}
