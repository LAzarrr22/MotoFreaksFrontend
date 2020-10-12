package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.requests;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MergeUser {

    private String name;
    private String lastName;
    private boolean enabled;
    private String password;
}
