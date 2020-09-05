package com.MJ.MotoFreaksBackend.MotoFreaksBackend.security.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegisterBody {
    private String userName;
    private String password;
    private String name;
    private String lastName;

}
