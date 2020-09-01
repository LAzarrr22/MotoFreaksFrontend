package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Levels;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.util.Date;

@Data
@Getter
@AllArgsConstructor
public class Level {

    private String name;
    private Levels code;
    // @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;
    // @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updatedDate;

}
