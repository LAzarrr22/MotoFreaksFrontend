package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
@AllArgsConstructor
public class Contact {
    private String phone;
    private String facebook;
    private String instagram;
    private String twitter;

}
