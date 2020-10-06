package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.response;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Contact;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;


@Data
@AllArgsConstructor
public class UserDto {

    private String id;
    private String name;
    private String lastName;
    private boolean enabled;
    private List<CarDataModel> carsList;
    private Contact contact;
    private Address address;
    private Integer points;
    private List<String> friendsList;
    private Boolean isYourFriend;
}
