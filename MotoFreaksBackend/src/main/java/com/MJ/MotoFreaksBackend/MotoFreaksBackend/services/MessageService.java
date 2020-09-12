package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.models.Message;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

import static org.springframework.http.ResponseEntity.ok;

@Service
@Slf4j
public class MessageService {


    private final UserService userService;
    private final UserRepository userRepository;

    public MessageService(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }


    public Object sendMessage(String token, String receiverId, String messageContent) {
        Map<Object, Object> model = new HashMap<>();
        Message message = new Message(messageContent, new Date());

        User senderUser = userService.getUserByToken(token);
        User receiverUser = userService.getUserById(receiverId);
        this.userRepository.save(addMessage(senderUser, receiverUser.getId(), message, false));
        this.userRepository.save(addMessage(receiverUser, senderUser.getId(), message, true));

        model.put("message", "Message sent to " + receiverId + " from " + senderUser.getId());
        log.info("Message sent to " + receiverId + " from " + senderUser.getId());
        return ok(model);
    }

    private User addMessage(User user, String secondId, Message message, boolean isReceived) {
        message.setReceived(isReceived);
        message.setRead(!isReceived);
        message.setReadDate(!isReceived ? new Date() : null);
        if (user.getMessages().get(secondId) == null) {
            List<Message> messageList = new ArrayList<>();
            messageList.add(message);
            user.getMessages().put(secondId, messageList);
        } else {
            user.getMessages().get(secondId).add(message);
        }
        return user;
    }


    public Object readMessage(String token, String receiverId) {
        Map<Object, Object> model = new HashMap<>();
        User user = userService.getUserByToken(token);
        user.getMessages().get(receiverId).stream()
                .filter(message -> !message.isRead())
                .forEach(unreadMessage -> {
                    unreadMessage.setRead(true);
                    unreadMessage.setReadDate(new Date());
                });
        this.userRepository.save(user);
        model.put("message", "Messages to " + user.getId() + " user from " + receiverId + " user is read now.");
        log.info("Messages to " + user.getId() + " user from " + receiverId + " user is read now.");
        return ok(model);
    }
}
