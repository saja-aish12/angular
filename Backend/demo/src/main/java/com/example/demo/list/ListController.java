package com.example.demo.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping (path="api/v1/list")
public class ListController {
   private  final ListService listService;
@Autowired
    public ListController(ListService listService) {
        this.listService = listService;
    }
@GetMapping
    public ResponseEntity <List<ListModel>> getLists(){
      //  return listService.getLists();
    try {
        List<ListModel> results = listService.getLists();
        return new ResponseEntity<>(results, HttpStatus.OK);
    }
    catch(Error error) {
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
    }
    @PutMapping
    public void updateList(@RequestBody ListModel list){
     listService.updateList(list);
    }
   @PostMapping
   public void registerNewList(@RequestBody ListModel list){

            listService.addNewList(list);

   }



    @DeleteMapping(path = "{listId}")
    public void deleteList(@PathVariable("listId")Integer listId){
        System.out.println("controller DELETE list");
        listService.deleteList(listId);
    }

}
