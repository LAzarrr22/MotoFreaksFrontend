package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.requests;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Contact;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MergeUser {

    private String name;
    private String lastName;
    private boolean enabled;
    private Contact contact;
    private Address address;
}
