package com.rentacar.main.api;

import com.rentacar.main.entity.Car;
import com.rentacar.main.entity.Customer;
import com.rentacar.main.repository.CustomerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/customer")
public class CustomerAPI {

    private final CustomerRepository customerRepository;

    public CustomerAPI(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping("/{username}")
    public Customer getCustomer(@PathVariable String username) {
        return this.customerRepository.getByUsername(username);
    }
}
