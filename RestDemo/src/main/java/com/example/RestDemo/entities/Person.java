package com.example.RestDemo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="Person")
public class Person {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="personName",nullable = false)
	private String personName;
	
	@Column(name="email")
	private String email;
	
	@Column(name="gender",nullable = false)
	private String gender;
	
	@Column(name="actived",nullable = false)
	private Boolean actived;
	
	@Column(name="identyNum",length = 11,unique = true)
	private String identyNum;

	public Person(int id, String personName, String email, String gender, Boolean actived, String identyNum) {
		super();
		this.id = id;
		this.personName = personName;
		this.email = email;
		this.gender = gender;
		this.actived = actived;
		this.identyNum = identyNum;
	}

	public Person () {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPersonName() {
		return personName;
	}

	public void setPersonName(String personName) {
		this.personName = personName;
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

	public Boolean getActived() {
		return actived;
	}

	public void setActived(Boolean actived) {
		this.actived = actived;
	}

	public String getIdentyNum() {
		return identyNum;
	}

	public void setIdentyNum(String identyNum) {
		this.identyNum = identyNum;
	}
	
	
}

