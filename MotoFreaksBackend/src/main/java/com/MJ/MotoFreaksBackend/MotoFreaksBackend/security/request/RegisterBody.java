package com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request;

import lombok.Data;

@Data
public class RegisterBody {

    private  String email;
    private String password;
    private String fullname;

}
