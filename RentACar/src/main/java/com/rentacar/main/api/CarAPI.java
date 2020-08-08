package com.rentacar.main.api;

import com.rentacar.main.entity.Car;
import com.rentacar.main.repository.CarRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/car")
public class CarAPI {
    private final CarRepository carRepository;

    public CarAPI(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @GetMapping
    public List<Car> getAllCars() {
        return this.carRepository.findAll();
    }

    @PostMapping
    public void createCar(@RequestBody Car car) {
        this.carRepository.save(car);
    }

    @DeleteMapping("{id}")
    public void deleteCar(@PathVariable Long id) {
        this.carRepository.deleteById(id);
    }
}
