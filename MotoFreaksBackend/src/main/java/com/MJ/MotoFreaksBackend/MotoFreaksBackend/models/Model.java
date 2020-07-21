package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.CarCompany;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
@Getter
public class Model {

    private String name;
    private List<Generation> generationList;

    public Model(String name, List<Generation> generationList) {
        this.name = name;
        this.generationList = generationList;
    }

}
