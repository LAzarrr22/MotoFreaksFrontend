package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.QuestionAnswer;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Document(collection = "Challenges")
@Getter
@Setter
public class Challenge {

    @Id
    private String id;

    private String name;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updatedDate;

    private String company;
    private String model;
    private String generation;
    private String groupId;
    private String creatorId;

    private QuestionAnswer QAList;

    public Challenge(String name, Date createdDate, Date updatedDate, String company, String model, String generation, String groupId, String creatorId, QuestionAnswer QAList) {
        this.name = name;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.company = company;
        this.model = model;
        this.generation = generation;
        this.groupId = groupId;
        this.creatorId = creatorId;
        this.QAList = QAList;
    }
}
