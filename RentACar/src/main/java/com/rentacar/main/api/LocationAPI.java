package com.rentacar.main.api;

import com.rentacar.main.entity.Location;
import com.rentacar.main.repository.LocationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/location")

public class LocationAPI {

    private final LocationRepository locationRepository;


    public LocationAPI(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @GetMapping
    public List<Location> getAllLocations()
    {
        return this.locationRepository.findAll();
    }

}

