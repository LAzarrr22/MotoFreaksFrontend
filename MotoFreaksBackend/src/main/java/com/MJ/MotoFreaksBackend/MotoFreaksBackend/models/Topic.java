package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Data
public class Topic {

    private String title;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date closedDate;
    private String creatorId;
    private String category;
    private List<Post> comments;
}
