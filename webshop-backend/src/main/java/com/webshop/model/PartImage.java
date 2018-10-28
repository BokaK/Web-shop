package com.webshop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by user on 13.9.2018.
 */
@Table(name = "partImage")
@Entity
@Setter
@Getter
public class PartImage extends BaseEntity {

    @OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "tire_id")
    private Part part;

    private String imageUrl;
}
