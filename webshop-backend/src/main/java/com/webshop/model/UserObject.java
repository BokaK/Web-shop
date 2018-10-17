package com.webshop.model;

import com.webshop.model.enums.UserType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class UserObject extends BaseEntity {

    private String username;

    private String email;

    private String password;

    private boolean enabled;

    @Enumerated(EnumType.STRING)
    public UserType type;

    @OneToOne(cascade=CascadeType.REMOVE)
    private ContactInfo contactInfo;

}
