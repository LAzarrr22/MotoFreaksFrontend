package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class Contact {

    private String mail;
    private String phone;
    private String facebook;
    private String instagram;
    private String twitter;


    public Contact(String mail, String phone, String facebook, String instagram, String twitter) {
        this.mail = mail;
        this.phone = phone;
        this.facebook = facebook;
        this.instagram = instagram;
        this.twitter = twitter;

    }
}
