package com.example.RestDemo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.RestDemo.entities.Task;
import com.example.RestDemo.entities.User;
import com.example.RestDemo.service.TaskService;
import com.example.RestDemo.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	UserService userService;
	TaskService taskService;
	
	public UserController(UserService userService,TaskService taskService) {
		this.userService=userService;
		this.taskService=taskService;
	}
	
	@GetMapping
	public List<User> getAll(){
		return userService.getAll();
	}
	
	@GetMapping("/{id}")
	public User getOneUser(@PathVariable int id) {
		return userService.getOneUser(id);
	}
	
	@PostMapping()
	public User saveUser(@RequestBody User newUser) {
		return userService.saveUser(newUser);
	}
	
	@PutMapping("/{id}")
	public User updateUser(@PathVariable int id,@RequestBody User updateUser) {
		return userService.updateUser(id, updateUser);
	}
	
	@DeleteMapping("/{id}")
	public boolean deleteUser(@PathVariable int id) {
		return userService.delete(id);
	}
	
	@GetMapping("/tasks")
	public List<Task> getAllTask(){
		return taskService.getAll();
	}
}
