package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class Generation {

    private String name;

    public Generation(String name) {
        this.name = name;

    }

}
