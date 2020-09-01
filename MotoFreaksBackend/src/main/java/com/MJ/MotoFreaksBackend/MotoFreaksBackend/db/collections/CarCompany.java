package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Model;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "CarsCompany")
@Data
@Getter
@Setter
public class CarCompany {

    @Id
    private String id;
    private String name;
    private List<Model> modelList;

    public CarCompany(String name, List<Model> modelList) {
        this.name = name;
        this.modelList = modelList;
    }

}
