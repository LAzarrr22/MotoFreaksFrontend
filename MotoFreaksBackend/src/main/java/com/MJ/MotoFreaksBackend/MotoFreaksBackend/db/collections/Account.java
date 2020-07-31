package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;


import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.AccountState;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.*;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Document(collection = "Accounts")
@Data
public class Account {

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

    private AccountState state;
    private List<Cars> carsList;
    private Contact contact;
    private Address address;
    private List<HistoryLogin> historyLogins;
    private Level levels;
    private Integer points;
    private List<String> friendIdList;


    public Account(String name, String lastname, String login, String pass, Date createdDate, Date updatedDate, AccountState state, List<Cars> carsList, Contact contact, Address address, List<HistoryLogin> historyLogins, Level levels, Integer points, List<String> friendIdList) {
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


}
