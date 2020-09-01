package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Document(collection = "Advertisements")
@Getter
@Setter
public class Advertisement {

    @Id
    private String id;

    private String title;
    private String descriptionAdv;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;
    private String company;
    private String model;
    private String generation;
    private String ownerId;


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
