package com.example.RestDemo.service;

import java.util.*;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.example.RestDemo.entities.Person;
import com.example.RestDemo.entities.Task;
import com.example.RestDemo.repos.PersonRepo;
import com.example.RestDemo.repos.TaskRepo;

@Service
public class TaskService {
	
	TaskRepo taskRepo;
	PersonRepo personRepo;
	
	public TaskService(TaskRepo taskRepo,PersonRepo personRepo) {
		this.taskRepo=taskRepo;
		this.personRepo=personRepo;
	}
	
	public List<Task> getAll(){
		return taskRepo.findAll();
	}
	
	public Task getOneTask(int id) {
		return taskRepo.findById(id).orElse(null);
	}
	
	public List<Task> getPersonsTask(int id){
		Person foundedPerson=personRepo.findById(id).orElse(null);
		if(foundedPerson==null) {
			return null;
		}else {
			return taskRepo.findByPersonId(foundedPerson.getId());
		}
	}
	
	public Task addPersonTask(int id,Task newTask) {
		Optional<Person> person= personRepo.findById(id);
		if(person.isEmpty()) {
			return null;
		}else {
			Person personForTask=person.get();
			Task task=new Task();
			task.setPerson(personForTask);
			task.setTaskName(newTask.getTaskName());
			task.setDescription(newTask.getDescription());
			task.setFinished(newTask.isFinished());
			return taskRepo.save(task);
		}
	}
	
	public Task updateTask(int id ,Task newTask) {
		Person foundedPerson=personRepo.findById(id).orElse(null);
		if(foundedPerson==null) {
			return null;
		}else {
			Optional<Task> task=taskRepo.findById(newTask.getId());
			if(task.isPresent()) {
				Task taskForUpdate=task.get();
				taskForUpdate.setDescription(newTask.getDescription());
				taskForUpdate.setFinished(newTask.isFinished());
				taskForUpdate.setTaskName(newTask.getTaskName());
				
				taskRepo.save(taskForUpdate);
				return taskForUpdate;
			}else {
				return null;
			}
		}
	}
	
	public boolean deleteTask(int taskId) {
		Task task=taskRepo.getById(taskId);
		if(task==null) {
			return false;
		}else {
			taskRepo.delete(task);
			return true;
		}
	}
	
	
}
