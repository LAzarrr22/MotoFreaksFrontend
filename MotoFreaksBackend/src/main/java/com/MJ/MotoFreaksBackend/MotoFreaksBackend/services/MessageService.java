package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {


    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserService userService;

    public Object sendMessage(String token, String receiver, String messageContent) {

        return null;
    }
}
