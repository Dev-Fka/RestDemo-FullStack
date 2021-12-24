package com.example.RestDemo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="User")
public class User {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="identyNum",length = 11,unique = true)
	private String identyNum;

	public User(int id, String name, String email, String gender, String identyNum) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.identyNum = identyNum;
	}

	public User() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getIdentyNum() {
		return identyNum;
	}

	public void setIdentyNum(String identyNum) {
		this.identyNum = identyNum;
	}
	
	
}	

