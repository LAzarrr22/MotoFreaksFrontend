package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Levels;
import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Getter
public class Level {

    private String name;
    private Levels code;
    // @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;
    // @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updatedDate;

    public Level(String name, Levels code, Date createdDate, Date updatedDate) {
        this.name = name;
        this.code = code;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}
