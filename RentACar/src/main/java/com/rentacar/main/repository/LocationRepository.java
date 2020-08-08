package com.rentacar.main.repository;


import com.rentacar.main.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository  extends JpaRepository<Location,Long> {
}
