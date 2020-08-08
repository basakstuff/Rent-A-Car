package com.rentacar.main.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "reservation")
@Data
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "day")
    private Integer day;

    @Column(name = "booking_date")
    private Date bookingDate;

    @Column(name = "return_date")
    private Date returnDate;

    @ManyToOne
    @JsonIgnoreProperties("cars")
    private Car car;

    @Column(name = "username")
    private String username;

    @Column(name = "booking_agency_id")
    private Long bookingAgencyId;

    @Column(name = "return_agency_id")
    private Long returnAgencyId;

}
