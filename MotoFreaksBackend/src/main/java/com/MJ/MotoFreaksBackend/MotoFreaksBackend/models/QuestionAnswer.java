package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;

import java.util.Map;

@Data
public class QuestionAnswer {

    private String question;
    private int points;
    private Map<String, Boolean> answers;
}

