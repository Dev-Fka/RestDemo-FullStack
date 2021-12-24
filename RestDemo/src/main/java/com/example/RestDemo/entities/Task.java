package com.example.RestDemo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Task")
public class Task {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;
	
	@Column(name="taskName",unique = true)
	String taskName;
	
	@Column(name="description")
	String description;
	
	@Column(name="isFinished",nullable = false)
	boolean isFinished;

	public Task(int id, User user, String taskName, String description, boolean isFinished) {
		this.id = id;
		this.user = user;
		this.taskName = taskName;
		this.description = description;
		this.isFinished = isFinished;
	}
	
	public Task() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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
