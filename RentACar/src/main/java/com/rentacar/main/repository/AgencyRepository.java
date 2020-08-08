package com.rentacar.main.repository;

import com.rentacar.main.entity.Agency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AgencyRepository extends JpaRepository<Agency,Long> {
    @Query("from Agency a INNER JOIN Reservation r ON a.id=r.returnAgencyId")
    Agency getAgencyByQuery(Long returnAgencyId);
}
