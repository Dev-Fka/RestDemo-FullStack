package com.example.RestDemo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.RestDemo.entities.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task, Integer> {

}
