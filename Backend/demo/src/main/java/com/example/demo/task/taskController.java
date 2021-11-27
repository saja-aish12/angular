package com.example.demo.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping (path="api/v1/task")
public class taskController {
    private  final taskService taskService;
    @Autowired
    public taskController( taskService taskService) {
        this.taskService = taskService;
    }

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

    @PostMapping("/add/{listId}")
    public void registerNewTask(@PathVariable("listId")Integer listId,@RequestBody TaskModel task){

        taskService.addNewTask(task,listId);
    }

    @PutMapping(path = "/update/{listId}")
    public void updateTask(@PathVariable("listId")Integer listId,@RequestBody TaskModel task){

      taskService.updateTask(task,listId);
    }

    @DeleteMapping(path = "/delete/{taskId}")
    public void deleteList(@PathVariable("taskId")Integer taskId){
        taskService.deleteTask(taskId);
    }
}
