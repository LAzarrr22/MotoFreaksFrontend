package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Data
@Getter
public class Post {

    private String title;
    private String body;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updatedDate;

    private List<String> bodyHistory;
    private String creatorId;


    public Post(String title, String body, Date createdDate, Date updatedDate, List<String> bodyHistory, String creatorId) {
        this.title = title;
        this.body = body;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.bodyHistory = bodyHistory;
        this.creatorId = creatorId;
    }


}
