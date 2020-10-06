package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.response;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Address;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.CarDataModel;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Contact;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Message;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
public class MyUserDto {

    private String id;
    private String name;
    private String lastName;
    private boolean enabled;
    private Date createdDate;
    private Date updatedDate;
    private List<Date> loginsHistory;
    private List<CarDataModel> carsList;
    private Contact contact;
    private Address address;
    private Integer points;
    private List<String> friendsList;
    private Map<String, List<Message>> messages;
}
