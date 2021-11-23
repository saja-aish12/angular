package com.example.demo.task;

import com.example.demo.list.ListModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping (path="api/v1/task")
public class taskController {
    private  final taskService taskService;
    @Autowired
    public taskController( taskService taskService) {
        this.taskService = taskService;
    }
    /*@GetMapping
    public ResponseEntity < List<TaskModel>> getTasks(){

        try {
            List<TaskModel> results = taskService.getTasks();
            return new ResponseEntity<>(results, HttpStatus.OK);
        }
        catch(Error error) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }*/
    @GetMapping("{listId}")
    public ResponseEntity<List<TaskModel>> getTasks(@PathVariable("listId")int listId) {
        try {
            List<TaskModel> result ;
            result= taskService.getTasks(listId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        catch(Error error) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public void registerNewTask(@RequestBody TaskModel task){
        taskService.addNewTask(task);
    }
    @DeleteMapping(path = "{TaskId}")
    public void deleteTask(@PathVariable("TaskId")Integer id){
        taskService.deleteTask(id);
    }

    @PutMapping
    public void updateTask(@RequestBody TaskModel task){
        taskService.updateTask(task);
    }

    @DeleteMapping(path = "{taskId}")
    public void deleteList(@PathVariable("taskId")Integer taskId){
        taskService.deleteTask(taskId);
    }
}