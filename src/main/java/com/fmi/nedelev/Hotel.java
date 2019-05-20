package com.fmi.nedelev;

public class Hotel {

    public long id;
    public String name;
    public double pricePerNight;
    public int availableBeds;
    public int stars;

    public Hotel(long id, String name, double pricePerNight, int availableBeds, int stars) {
        this.id = id;
        this.name = name;
        this.pricePerNight = pricePerNight;
        this.availableBeds = availableBeds;
        this.stars = stars;
    }

}