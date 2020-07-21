package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Getter
public class Review {

    private String body;
    private Integer points;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updatedDate;

    private String creatorId;

    public Review(String body, Integer points, Date createdDate, Date updatedDate, String creatorId) {
        this.body = body;
        this.points = points;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.creatorId = creatorId;
    }
}
