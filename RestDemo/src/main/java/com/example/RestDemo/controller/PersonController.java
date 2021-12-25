package com.example.RestDemo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.RestDemo.entities.Person;
import com.example.RestDemo.entities.Task;
import com.example.RestDemo.service.PersonService;
import com.example.RestDemo.service.TaskService;

@RestController
@RequestMapping("/api/persons")
public class PersonController {
	
	PersonService personService;
	TaskService taskService;
	
	public PersonController(PersonService personService,TaskService taskService) {
		this.personService=personService;
		this.taskService=taskService;
	}
	
	@GetMapping
	public List<Person> getAll(){
		return personService.getAll();
	}
	
	@GetMapping("/{id}")
	public Person getOnePerson(@PathVariable int id) {
		return personService.getOnePerson(id);
	}
	
	@PostMapping()
	public Person savePerson(@RequestBody Person newUser) {
		return personService.savePerson(newUser);
	}
	
	@PutMapping("/{id}")
	public Person updatePerson(@PathVariable int id,@RequestBody Person updateUser) {
		return personService.updatePerson(id, updateUser);
	}
	
	@DeleteMapping("/{id}")
	public boolean deletePerson(@PathVariable int id) {
		return personService.delete(id);
	}
	
	//For Tasks Endpoints
	
	@GetMapping("/tasks")
	public List<Task> getAllTask(){
		return taskService.getAll();
	}
	
	@GetMapping("/tasks/{id}")
	public Task getOneTask(@PathVariable int id) {
		return taskService.getOneTask(id);
	}
	
	@GetMapping("/{id}/tasks")
	public List<Task> getPersonsTask(@PathVariable int id){
		return taskService.getPersonsTask(id);
	}
	
	@PostMapping("/{id}/tasks")
	public Task saveTask(@PathVariable int id,@RequestBody Task newTask) {
		return taskService.addPersonTask(id, newTask);
	}
	
	@PutMapping("/{id}/tasks")
	public Task updateTask(@PathVariable int id,@RequestBody  Task newTask) {
		return taskService.updateTask(id, newTask);
	}
	
	@DeleteMapping("/{id}/tasks")
	public boolean deleteTask(@PathVariable int id) {
		return taskService.deleteTask(id);
	}
	
}
