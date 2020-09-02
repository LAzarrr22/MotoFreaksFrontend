package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.response;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.Levels;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Contact;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ProfileModelDto {

    private String name;
    private String lastName;
    private List<CarDataModel> carList;
    private Levels levels;
    private Integer points;
    private boolean enabled;
    private Contact contact;
    private boolean isYourFriend;
}
