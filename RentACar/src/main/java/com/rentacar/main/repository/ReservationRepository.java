package com.rentacar.main.repository;

import com.rentacar.main.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {

    public List<Reservation> getAllByUsername(String username);
}
