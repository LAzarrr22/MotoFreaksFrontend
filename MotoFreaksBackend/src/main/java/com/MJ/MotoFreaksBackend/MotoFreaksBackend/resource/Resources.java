package com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource;

import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface Resources {

    @DeleteMapping("/{id}")
    void delete(@PathVariable("id") String id);

    @GetMapping("/all")
    List getAll();


}
