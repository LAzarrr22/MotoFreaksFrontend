package com.MJ.MotoFreaksBackend.MotoFreaksBackend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Data
@Getter
@Setter
@AllArgsConstructor
public class QuestionAnswer {

    private String question;
    private List<Map<String, Boolean>> answers;
}

