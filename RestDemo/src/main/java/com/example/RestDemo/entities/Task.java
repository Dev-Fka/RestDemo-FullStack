package com.example.RestDemo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name="Task")
public class Task {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@ManyToOne
	@JoinColumn(name="userId")
	private Person person;
	
	@Column(name="taskName",nullable=false)
	String taskName;
	
	@Column(name="description")
	String description;
	
	@Column(name="isFinished",nullable = false)
	boolean isFinished;

	public Task(int id, Person person, String taskName, String description, boolean isFinished) {
		super();
		this.id = id;
		this.person = person;
		this.taskName = taskName;
		this.description = description;
		this.isFinished = isFinished;
	}

	public Task () {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isFinished() {
		return isFinished;
	}

	public void setFinished(boolean isFinished) {
		this.isFinished = isFinished;
	}
	
	
}
