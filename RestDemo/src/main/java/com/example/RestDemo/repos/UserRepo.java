package com.example.RestDemo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.RestDemo.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	
	User findByIdentyNum(String identyNum);
}
