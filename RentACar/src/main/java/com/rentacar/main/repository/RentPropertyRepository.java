package com.rentacar.main.repository;

import com.rentacar.main.entity.RentProperty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentPropertyRepository extends JpaRepository<RentProperty, Long> {
}
