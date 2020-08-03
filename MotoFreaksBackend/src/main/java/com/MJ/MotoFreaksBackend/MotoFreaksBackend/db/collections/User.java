package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import java.util.Set;

@Document(collection = "UsersLogins")
public class User {
    @Id
    private String id;

    @Email
    private String email;
    private String password;
    private String fullName;
    private boolean enabled;

    private Set<UserRoles> userRoles;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    public boolean isEnabled() {
        return enabled;
    }
    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
    public Set<UserRoles> getUserRoles() {
        return userRoles;
    }
    public void setUserRoles(Set<UserRoles> userRoles) {
        this.userRoles = userRoles;
    }

}
