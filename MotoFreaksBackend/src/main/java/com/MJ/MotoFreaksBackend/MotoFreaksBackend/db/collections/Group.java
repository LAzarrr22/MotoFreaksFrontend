package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;


import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.MemberState;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.TopicState;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Topic;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Data
@Document(collection = "Groups")
public class Group {

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
    private List<Topic> topics;

    private Map<MemberState, List<String>>  membersUsersId;

    private String creatorId;

    public Group(String name, Date createdDate, Date updatedDate, String company, String model, String generation, List<Topic> topics, Map<MemberState, List<String>> membersUsersId, String creatorId) {
        this.name = name;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.company = company;
        this.model = model;
        this.generation = generation;
        this.topics = topics;
        this.membersUsersId = membersUsersId;
        this.creatorId = creatorId;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public List<Topic> getTopics() {
        return topics;
    }

    public Map<MemberState, List<String>>  getMembersUsersId() {
        return membersUsersId;
    }

    public String getCreatorId() {
        return creatorId;

    }

    public String getCompany() {
        return company;
    }

    public String getModel() {
        return model;
    }

    public String getGeneration() {
        return generation;
    }
}
