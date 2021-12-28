package com.example.RestDemo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.RestDemo.entities.Person;
import com.example.RestDemo.entities.Task;
import com.example.RestDemo.service.PersonService;
import com.example.RestDemo.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000" ,maxAge = 3600)
@RestController
@RequestMapping("/api/persons")
public class PersonController {
	
	PersonService personService;
	TaskService taskService;
	
	public PersonController(PersonService personService,TaskService taskService) {
		this.personService=personService;
		this.taskService=taskService;
	}
	
	@RequestMapping(method = RequestMethod.GET,path = "")
	public List<Person> getAll(){
		return personService.getAll();
	}
	
	@RequestMapping(method = RequestMethod.GET,path = "/{id}")
	public Person getOnePerson(@PathVariable int id) {
		return personService.getOnePerson(id);
	}
	
	@RequestMapping(method = RequestMethod.POST,path = "")
	public Person savePerson(@RequestBody Person newUser) {
		return personService.savePerson(newUser);
	}
	
	@RequestMapping(method = RequestMethod.PUT,path = "/{id}")
	public Person updatePerson(@PathVariable int id,@RequestBody Person updateUser) {
		return personService.updatePerson(id, updateUser);
	}
	
	@RequestMapping(method = RequestMethod.DELETE,path = "/{id}")
	public boolean deletePerson(@PathVariable int id) {
		return personService.delete(id);
	}
	
	//For Tasks Endpoints
	
	@RequestMapping(method = RequestMethod.GET,path = "/tasks")
	public List<Task> getAllTask(){
		return taskService.getAll();
	}
	
	@RequestMapping(method = RequestMethod.GET,path = "/tasks/{id}")
	public Task getOneTask(@PathVariable int id) {
		return taskService.getOneTask(id);
	}
	
	@RequestMapping(method = RequestMethod.GET,path = "/{id}/tasks")
	public List<Task> getPersonsTask(@PathVariable int id){
		return taskService.getPersonsTask(id);
	}
	
	@RequestMapping(method = RequestMethod.POST,path = "/{id}/tasks")
	public Task saveTask(@PathVariable int id,@RequestBody Task newTask) {
		return taskService.addPersonTask(id, newTask);
	}
	
	@RequestMapping(method = RequestMethod.PUT,path = "/{id}/tasks")
	public Task updateTask(@PathVariable int id,@RequestBody  Task newTask) {
		return taskService.updateTask(id, newTask);
	}
	
	@RequestMapping(method = RequestMethod.DELETE,path = "/{id}/tasks")
	public boolean deleteTask(@PathVariable int id) {
		return taskService.deleteTask(id);
	}
	
}
