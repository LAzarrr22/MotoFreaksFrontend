package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;


@Data
@Getter
public class HistoryLogin {

    // @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date logIn;
    //  @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date logOut;
    private String ip;


    public HistoryLogin(Date logIn, Date logOut, String ip) {
        this.logIn = logIn;
        this.logOut = logOut;
        this.ip = ip;
    }
}
