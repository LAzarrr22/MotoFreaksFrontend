package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.*;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Document(collection = "UsersLogins")
@Data
public class User {
    @Id
    private String id;
    @Email
    private String email;
    private String password;
    private String name;
    private String lastName;
    private boolean enabled;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date createdDate;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date updatedDate;
    private List<Date> loginsHistory;
    private Set<UserRoles> userRoles;
    private List<CarModel> carsList;
    private Contact contact;
    private Address address;
    private Level levels;
    private Integer points;
    private List<String> friendIdList;


}
