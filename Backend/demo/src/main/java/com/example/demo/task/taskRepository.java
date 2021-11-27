package com.example.demo.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface taskRepository extends JpaRepository<TaskModel,Integer> {
    public List<TaskModel>findByListId(int listId);
}
