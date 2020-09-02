package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;

import java.util.List;

@Data
public class Model {

    private String name;
    private List<Generation> generationList;

}
