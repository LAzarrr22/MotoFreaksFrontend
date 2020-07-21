package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Data
@Getter
public class Topic {

    private String title;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date closedDate;

    private String creatorId;
    private String category;

    private List<Post> comments;

    public Topic(String title, Date createdDate, Date closedDate, String creatorId, String category, List<Post> comments) {
        this.title = title;
        this.createdDate = createdDate;
        this.closedDate = closedDate;
        this.creatorId = creatorId;
        this.category = category;
        this.comments = comments;
    }
}
