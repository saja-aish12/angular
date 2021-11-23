package com.example.demo.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ListService {
    @Autowired
    private final listRepository listRepository;
 @Autowired
    public ListService(com.example.demo.list.listRepository listRepository) {
        this.listRepository = listRepository;
    }

    public List<ListModel> getLists(){
        List<ListModel> lists = new ArrayList<ListModel>();

          listRepository.findAll().forEach(lists::add);
        return  lists;
    }

    public void addNewList(ListModel list) {

        listRepository.save(list);

     System.out.println(list);
    }
    public void updateList(ListModel list) {
        ListModel newList  = new ListModel(list);
        listRepository.save(newList);
    }

    public void deleteList(Integer listId) {
        System.out.println("DELETE list");
        if (listId==null)throw new IllegalStateException("id integer not found");
 boolean exist=listRepository.existsById(listId);
 if(!exist){
     throw new IllegalStateException(
             "List With Id:"+listId+"Does Not Exists"
     );
 }listRepository.deleteById(listId);
 }
}
