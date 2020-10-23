package com.MJ.MotoFreaksBackend.MotoFreaksBackend.services;

import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.Post;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.db.collections.User;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.repository.PostsRepository;
import com.MJ.MotoFreaksBackend.MotoFreaksBackend.resource.requests.NewPost;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

import static org.springframework.http.ResponseEntity.ok;

@Service
@Slf4j
public class PostsService {

    private final PostsRepository postsRepository;
    private final UserService userService;

    @Autowired
    public PostsService(PostsRepository postsRepository, UserService userService) {
        this.postsRepository = postsRepository;
        this.userService = userService;
    }

    public Object getAll() {
        return postsRepository.findAll();
    }

    public Object addPost(NewPost newPost, String token) {
        Map<Object, Object> model = new HashMap<>();
        User currentUser = userService.getUserByToken(token);
        Post post = new Post();
        post.setBody(newPost.getBody());
        post.setType(newPost.getType());
        post.setTitle(newPost.getTitle());
        post.setCreatorId(currentUser.getId());
        post.setCreatedDate(new Date());
        post.setLocation(newPost.getLocation());
        post.setUserIdLikes(new ArrayList<>());
        postsRepository.save(post);
        model.put("message", "Post added successful.");
        return ok(model);
    }

    public Object getMyPosts(String token) {
        User currentUser = userService.getUserByToken(token);
        Optional<List<Post>> findPosts = postsRepository.findByCreatorIdOptional(currentUser.getId());
        return findPosts.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Posts_not_found"));
    }

    public Object deletePost(String id) {
        Map<Object, Object> model = new HashMap<>();
        postsRepository.deleteById(id);
        model.put("message", "Post " + id + " removed successful.");
        return ok(model);
    }
}
