package com.fmi.nedelev;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    private ArrayList<Hotel> hotels = new ArrayList<Hotel>() {
        private static final long serialVersionUID = 1L;

        {
            add(new Hotel(1, "Hostel The House", 28, 14, 2));
            add(new Hotel(2, "Pijama Hostel, Bed and Breakfast", 36, 6, 3));
            add(new Hotel(3, "Funky Monkey Hostel", 36, 10, 2));
            add(new Hotel(4, "Hotel Elite", 36, 3, 3));
            add(new Hotel(5, "Hostel Central Station Plovdiv", 20, 5, 1));
            add(new Hotel(6, "Boutique Hostel Old Plovdiv", 22, 5, 3));
            add(new Hotel(7, "The Old House", 37, 8, 1));
            add(new Hotel(8, "Guest Rooms Plovdiv", 40, 5, 1));
            add(new Hotel(9, "Skerzzo Guesthouse", 40, 2, 1));
            add(new Hotel(10, "Ginger House", 39, 4, 2));
            add(new Hotel(11, "Hotel Rusalka", 40, 9, 4));
        }
    };

    @RequestMapping("/api/hotels")
    public ArrayList<Hotel> getHotels(@RequestParam(value = "name", defaultValue = "World") String name) {
        return hotels;
    }

    @RequestMapping("/api/hotels/{id}")
    public ResponseEntity<Object> getHotel(@PathVariable("id") long id) {
        Optional<Hotel> hotel = hotels.stream().filter(x -> x.id == id).findFirst();
        if (hotel.isPresent()) {
            return ResponseEntity.ok(hotel.get());
        }
        return ResponseEntity.status(404).body(new HashMap<String, String>() {
            private static final long serialVersionUID = 1L;

            {
                put("detail", "not found");
            }
        });
    }
}