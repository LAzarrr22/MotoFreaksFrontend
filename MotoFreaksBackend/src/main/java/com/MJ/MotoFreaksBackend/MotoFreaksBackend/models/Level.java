package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Levels;
import lombok.Data;

import java.util.Date;

@Data
public class Level {

    private String name;
    private Levels code;
    // @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;
    // @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updatedDate;

}
