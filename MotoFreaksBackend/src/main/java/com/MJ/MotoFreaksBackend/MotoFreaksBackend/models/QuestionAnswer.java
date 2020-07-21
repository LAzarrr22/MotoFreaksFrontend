package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.Data;
import lombok.Getter;

import java.util.List;
import java.util.Map;

@Data
@Getter
public class QuestionAnswer {

    private String question;
    private List<Map<String, Boolean>> answers;


    public QuestionAnswer(String question, List<Map<String, Boolean>> answers) {
        this.question = question;
        this.answers = answers;
    }

}

