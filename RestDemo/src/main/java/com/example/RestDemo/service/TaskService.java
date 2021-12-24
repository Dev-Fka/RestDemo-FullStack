package com.example.RestDemo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.RestDemo.entities.Task;
import com.example.RestDemo.repos.TaskRepo;

@Service
public class TaskService {
	
	TaskRepo taskRepo;
	
	public TaskService(TaskRepo taskRepo) {
		this.taskRepo=taskRepo;
	}
	
	public List<Task> getAll(){
		return taskRepo.findAll();
	}
	
	public Task getOneTask(int id) {
		return taskRepo.findById(id).orElse(null);
	}
}
