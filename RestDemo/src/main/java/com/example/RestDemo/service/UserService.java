package com.example.RestDemo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.example.RestDemo.entities.User;
import com.example.RestDemo.repos.UserRepo;

@Service
public class UserService {
	
	UserRepo userRepo;

	public UserService(UserRepo userRepo) {
		this.userRepo = userRepo;
	}
	
	public List<User> getAll(){
		return userRepo.findAll();
	}
	
	public User getOneUser(int userId) {
		return userRepo.findById(userId).orElse(null);
	}
	
	public User saveUser(User newUser) {
		User foundedUser=userRepo.findByIdentyNum(newUser.getIdentyNum());
		if(foundedUser==null) {
			userRepo.save(newUser);
			return newUser;
		}else {
			return null;
		}
	}
	
	public User getByIdenty(User user) {
		return userRepo.findByIdentyNum(user.getIdentyNum());
	}
	
	public User updateUser(int id,User updateUser) {
		Optional<User> user=userRepo.findById(id);
		if(user.isPresent()) {
			User updatedForUser=user.get();
			updatedForUser.setEmail(updateUser.getEmail());
			updatedForUser.setName(updateUser.getName());
			updatedForUser.setActived(updateUser.getActived());
			userRepo.save(updatedForUser);
			return updatedForUser;
		}else {
			return null;
		}
	}
	
	
	public boolean delete(int id) {
		User user=userRepo.findById(id).orElse(null);
		if(user==null) {
			return false;
		}else {
			userRepo.deleteById(id);
			return true;
		}
	}
}
