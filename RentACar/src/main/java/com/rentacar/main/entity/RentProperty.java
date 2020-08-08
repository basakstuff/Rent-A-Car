package com.rentacar.main.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "rent_property")
@Data
public class RentProperty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "availability")
    private Boolean availability;

    @Column(name = "rent_price")
    private Double rentPrice;

    
}
