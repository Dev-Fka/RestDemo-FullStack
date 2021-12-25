package com.example.RestDemo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.example.RestDemo.entities.Person;
import com.example.RestDemo.repos.PersonRepo;

@Service
public class PersonService {
	
	PersonRepo personRepo;

	public PersonService(PersonRepo personRepo) {
		this.personRepo = personRepo;
	}
	
	public List<Person> getAll(){
		return personRepo.findAll();
	}
	
	public Person getOnePerson(int userId) {
		return personRepo.findById(userId).orElse(null);
	}
	
	public Person savePerson(Person newPerson) {
		Person foundedUser=personRepo.findByIdentyNum(newPerson.getIdentyNum());
		if(foundedUser==null) {
			personRepo.save(newPerson);
			return newPerson;
		}else {
			return null;
		}
	}
	
	public Person getByIdenty(Person user) {
		return personRepo.findByIdentyNum(user.getIdentyNum());
	}
	
	public Person updatePerson(int id,Person updatePerson) {
		Optional<Person> user=personRepo.findById(id);
		if(user.isPresent()) {
			Person updatedForPerson=user.get();
			updatedForPerson.setEmail(updatePerson.getEmail());
			updatedForPerson.setPersonName(updatePerson.getPersonName());
			updatedForPerson.setActived(updatePerson.getActived());
			personRepo.save(updatedForPerson);
			return updatedForPerson;
		}else {
			return null;
		}
	}
	
	
	public boolean delete(int id) {
		Person person=personRepo.findById(id).orElse(null);
		if(person==null) {
			return false;
		}else {
			personRepo.deleteById(id);
			return true;
		}
	}
}
