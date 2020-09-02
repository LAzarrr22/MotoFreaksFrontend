package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Document(collection = "Advertisements")
public class Advertisement {

    @Id
    private String id;

    private final String title;
    private final String descriptionAdv;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private final Date createdDate;
    private final String company;
    private final String model;
    private final String generation;
    private final String ownerId;

    public Advertisement(String title, String descriptionAdv, Date createdDate, String company, String model, String generation, String ownerId) {
        this.title = title;
        this.descriptionAdv = descriptionAdv;
        this.createdDate = createdDate;
        this.company = company;
        this.model = model;
        this.generation = generation;
        this.ownerId = ownerId;
    }
}
