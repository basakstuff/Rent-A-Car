package com.rentacar.main.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "agency")
@Data
public class Agency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;


    @Column(name = "phone")
    private String phone;

    @Column(name = "manager")
    private String manager;

    @ManyToOne
    @JsonIgnoreProperties("agencies")
    private Location location;
}
