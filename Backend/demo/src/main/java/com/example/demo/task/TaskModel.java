package com.example.demo.task;


import com.example.demo.list.ListModel;
import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "tasks")
public class TaskModel implements Serializable {
    @Id
    @SequenceGenerator(
            name="task_sequence",
            sequenceName = "task_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "task_sequence"
    )
    private int id;
    private String name;
    private String description;
    private LocalDate creating_date;
    private LocalDate last_update;
    private LocalDate start_date;
    private LocalDate end_date;
    private String current_state;

    @JsonProperty("listId")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne
    @JoinColumn(name="list_id", nullable=false)
    private ListModel list;

    public TaskModel() {
    }

    public TaskModel(int id, String name, String description, LocalDate creating_date, LocalDate last_update, LocalDate start_date, LocalDate end_date, String current_state, ListModel list) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.creating_date = creating_date;
        this.last_update = last_update;
        this.start_date = start_date;
        this.end_date = end_date;
        this.current_state = current_state;
        this.list = list;
    }

    public TaskModel(String name, String description, LocalDate creating_date, LocalDate last_update, LocalDate start_date, LocalDate end_date, String current_state, ListModel list) {
        this.name = name;
        this.description = description;
        this.creating_date = creating_date;
        this.last_update = last_update;
        this.start_date = start_date;
        this.end_date = end_date;
        this.current_state = current_state;
        this.list = list;
    }

    public TaskModel(TaskModel task ,ListModel listModel) {
      this.id = task.id;
        this.name = task.name;
        this.description = task.description;
        this.creating_date = task.creating_date;
        this.last_update = task.last_update;
        this.start_date = task.start_date;
        this.end_date = task.end_date;
        this.current_state = task.current_state;
        this.list = listModel;

    }
  public TaskModel(ListModel listModel,TaskModel task ) {

    this.name = task.name;
    this.description = task.description;
    this.creating_date = task.creating_date;
    this.last_update = task.last_update;
    this.start_date = task.start_date;
    this.end_date = task.end_date;
    this.current_state = task.current_state;
    this.list = listModel;

  }
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

    public LocalDate getStart_date() {
        return start_date;
    }

    public void setStart_date(LocalDate start_date) {
        this.start_date = start_date;
    }

    public LocalDate getEnd_date() {
        return end_date;
    }

    public void setEnd_date(LocalDate end_date) {
        this.end_date = end_date;
    }



    public ListModel getList() {
        return list;
    }

    public void setList(ListModel list) {
        this.list = list;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCurrent_state() {
        return current_state;
    }

    public void setCurrent_state(String current_state) {
        this.current_state = current_state;
    }

    @Override
    public String toString() {
        return "{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", creating_date=" + creating_date +
                ", last_update=" + last_update +
                ", start_date=" + start_date +
                ", end_date=" + end_date +
                ", state='" + current_state + '\'' +
                '}';
    }
}
