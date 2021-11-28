package com.example.demo.task;

import com.example.demo.list.ListModel;
import com.example.demo.list.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TaskService {

    private final ListRepository listRepository;

    private final TaskRepository taskRepository;
    @Autowired
    public TaskService(TaskRepository taskRepository
    , ListRepository listRepository) {
        this.taskRepository = taskRepository;
        this.listRepository = listRepository;
    }


    public  List<TaskModel> getTasks(int listId)
    {
        return taskRepository.findByListId(listId);
    }


    public void addNewTask(TaskModel task ,Integer id) {
        ListModel list =listRepository.getById(id);

        TaskModel newTask  = new TaskModel(list,task);
        taskRepository.save(newTask);
    }
    public void updateTask (TaskModel task ,Integer id) {
      ListModel list =listRepository.getById(id);

      TaskModel updateTask  = new TaskModel(task,list);

        taskRepository.save(updateTask);
    }
    public void deleteTask(Integer id) {
        boolean exist=taskRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException(
                    "Task With Id:"+id+"Does Not Exists"
            );
        }taskRepository.deleteById(id);
    }

}
