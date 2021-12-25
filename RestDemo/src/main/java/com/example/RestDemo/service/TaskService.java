package com.example.RestDemo.service;

import java.util.*;
import java.util.Optional;
import org.springframework.stereotype.Service;

import com.example.RestDemo.entities.Task;
import com.example.RestDemo.entities.User;
import com.example.RestDemo.repos.TaskRepo;
import com.example.RestDemo.repos.UserRepo;

@Service
public class TaskService {
	
	TaskRepo taskRepo;
	UserRepo userRepo;
	
	public TaskService(TaskRepo taskRepo,UserRepo userRepo) {
		this.taskRepo=taskRepo;
		this.userRepo=userRepo;
	}
	
	public List<Task> getAll(){
		return taskRepo.findAll();
	}
	
	public Task getOneTask(int id) {
		return taskRepo.findById(id).orElse(null);
	}
	
	public List<Task> getUsersTask(int id){
		User foundedUser=userRepo.findById(id).orElse(null);
		if(foundedUser==null) {
			return null;
		}else {
			return taskRepo.findByUserId(foundedUser.getId());
		}
	}
	
	public Task addUserTask(int id,Task newTask) {
		Optional<User> user= userRepo.findById(id);
		if(user.isEmpty()) {
			return null;
		}else {
			User userForTask=user.get();
			Task task=new Task();
			task.setUser(userForTask);
			task.setTaskName(newTask.getTaskName());
			task.setDescription(newTask.getDescription());
			task.setFinished(newTask.isFinished());
			return taskRepo.save(task);
		}
	}
}
