package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.response;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Level;
import lombok.Data;

import java.util.List;

@Data
public class ProfileModel {

    private boolean isYourFriend;
    private String name;
    private String lastName;
    private List<CarDataModel> carList;
    private Level levels;
    private Integer points;
}
