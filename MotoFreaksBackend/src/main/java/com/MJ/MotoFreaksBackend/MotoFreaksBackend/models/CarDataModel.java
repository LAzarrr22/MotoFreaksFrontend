package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;

@Data
public class CarDataModel {

    private String name;
    private String company;
    private String model;
    private String generation;
    private Integer year;
    private String color;
    private String engine;
}

