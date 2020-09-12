package com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.enums.DeliveryEnum;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "Messages")
public class Message {

    @Id
    private String id;
    private String sender;
    private String receiver;
    private String messageContent;
    private DeliveryEnum deliveryState;
    private Date createdDate;
    private Date readDate;

    public Message(String sender, String receiver, String messageContent, DeliveryEnum deliveryState, Date createdDate, Date readDate) {
        this.sender = sender;
        this.receiver = receiver;
        this.messageContent = messageContent;
        this.deliveryState = deliveryState;
        this.createdDate = createdDate;
        this.readDate = readDate;
    }
}
