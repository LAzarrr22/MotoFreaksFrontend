package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class QuestionAnswer {

    private String question;
    private List<Map<String, Boolean>> answers;
}

