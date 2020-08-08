package com.rentacar.main.api;

import com.rentacar.main.entity.Reservation;
import com.rentacar.main.repository.ReservationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/reservation")
public class ReservationAPI {

    private final ReservationRepository reservationRepository;

    public ReservationAPI(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @PostMapping
    public void createReservation(@RequestBody Reservation reservation){
        this.reservationRepository.save(reservation);
    }

    @GetMapping("/{username}")
    public List<Reservation> getReservationWithUsername(@PathVariable String username){
        return this.reservationRepository.getAllByUsername(username);
    }

}
