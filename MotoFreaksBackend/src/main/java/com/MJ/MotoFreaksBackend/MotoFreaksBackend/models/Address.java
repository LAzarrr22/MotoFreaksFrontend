package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
public class Address {


    private String country;
    private String city;
    private String street;

    public Address(String country, String city, String street) {
        this.country = country;
        this.city = city;
        this.street = street;
    }

}
