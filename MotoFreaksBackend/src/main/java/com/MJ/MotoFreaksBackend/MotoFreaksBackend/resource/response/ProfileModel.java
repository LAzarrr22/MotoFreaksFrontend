package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.response;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import lombok.Data;
import lombok.Setter;

import java.util.List;

@Data
@Setter
public class ProfileModel {

    private boolean isYourFriend;
    private String name;
    private String lastName;
    private List<CarDataModel> carList;
}
