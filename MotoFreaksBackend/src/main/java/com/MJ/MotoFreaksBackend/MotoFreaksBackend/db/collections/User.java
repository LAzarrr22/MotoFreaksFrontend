package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.config.CryptPass;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.UsersState;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Document(collection = "Users")
public class User {



    @Id
    private String id;

    private String name;
    private String lastname;
    private String login;
    private String pass;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updatedDate;

    private UsersState state;
    private List<Cars> carsList;
    private Contact contact;
    private Address address;
    private List<HistoryLogin> historyLogins;
    private Level levels;
    private Integer points;
    private List<String> friendIdList;


    public User(String name, String lastname, String login, String pass, Date createdDate, Date updatedDate, UsersState state, List<Cars> carsList, Contact contact, Address address, List<HistoryLogin> historyLogins, Level levels, Integer points, List<String> friendIdList) {
        this.name = name;
        this.lastname = lastname;
        this.login = login;
        this.pass = pass;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.state = state;
        this.carsList = carsList;
        this.contact = contact;
        this.address = address;
        this.historyLogins = historyLogins;
        this.levels = levels;
        this.points = points;
        this.friendIdList = friendIdList;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastname() {
        return lastname;
    }

    public String getLogin() {
        return login;
    }

    public String getPass() {
        return pass;
    }

    public UsersState getState() {
        return state;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public List<Cars> getCarsList() {
        return carsList;
    }

    public Contact getContact() {
        return contact;
    }

    public Address getAddress() {
        return address;
    }

    public List<HistoryLogin> getHistoryLogins() {
        return historyLogins;
    }

    public Level  getLevels() {
        return levels;
    }

    public List<String> getFriendIdList() {
        return friendIdList;
    }

    public Integer getPoints() {
        return points;
    }
}
