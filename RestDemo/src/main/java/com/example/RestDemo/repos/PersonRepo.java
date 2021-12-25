package com.example.RestDemo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.RestDemo.entities.Person;

@Repository
public interface PersonRepo extends JpaRepository<Person, Integer> {
	
	Person findByIdentyNum(String identyNum);
}
