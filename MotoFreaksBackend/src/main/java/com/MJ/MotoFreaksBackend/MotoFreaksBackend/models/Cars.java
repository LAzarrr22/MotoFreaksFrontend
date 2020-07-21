package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class Cars {

    private String name;
    private String company;
    private String model;
    private String generation;
    private Integer year;
    private String color;
    private String engine;

    public Cars(String name, String company, String model, String generation, Integer year, String color, String engine) {
        this.name = name;
        this.company = company;
        this.model = model;
        this.generation = generation;
        this.year = year;
        this.color = color;
        this.engine = engine;
    }

}

