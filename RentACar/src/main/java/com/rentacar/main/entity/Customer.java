package com.rentacar.main.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "customer")
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "address")
    private String address;

    @Column(name = "driver_license_number")
    private String driverLicenseNumber;

    @Column(name = "phone")
    private String phone;

    @Column(name = "username")
    private String username;

}
