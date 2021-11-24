package com.example.demo.list;

import com.example.demo.task.TaskModel;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "List")
public class ListModel implements Serializable {
    @Id
    @SequenceGenerator(
            name="list_sequence",
            sequenceName = "list_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "list_sequence"
    )
    private int id;
    private String name;
    private LocalDate creating_date;
    private LocalDate last_update;
    @OneToMany( fetch = FetchType.EAGER,
            cascade = CascadeType.REMOVE,

            mappedBy = "list")

    private Set<TaskModel> tasks;
   // private String[] tasks;

    public ListModel(int id, String name, LocalDate creating_date, LocalDate last_update) {
        this.id = id;
        this.name = name;
        this.creating_date = creating_date;
        this.last_update = last_update;

    }

    public ListModel(String name, LocalDate creating_date, LocalDate last_update) {
        this.name = name;
        this.creating_date = creating_date;
        this.last_update = last_update;
     //   this.tasks = tasks;
    }

    public ListModel(){};

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getCreating_date() {
        return creating_date;
    }

    public void setCreating_date(LocalDate creating_date) {
        this.creating_date = creating_date;
    }

    public LocalDate getLast_update() {
        return last_update;
    }

    public void setLast_update(LocalDate last_update) {
        this.last_update = last_update;
    }

    public Set<TaskModel> getTasks() {
        return tasks;
    }

    public void setTasks(Set<TaskModel> tasks) {
        this.tasks = tasks;
    }

    public ListModel(ListModel list) {

        this.name = list.name;
        this.creating_date = list.creating_date;
        this.last_update = list.last_update;
           this.tasks = list.tasks;

    }
    @Override
    public String toString() {
        return "{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", creating_date=" + creating_date +
                ", last_update=" + last_update +
                ", tasks=" + tasks +
                '}';
    }
}
