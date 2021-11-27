package com.example.demo;

import com.example.demo.list.ListModel;
import com.example.demo.list.listRepository;
import com.example.demo.task.taskRepository;
import com.example.demo.task.TaskModel;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class config {

    @Bean
    CommandLineRunner commandLineRunner(listRepository listRepository ,
                                        taskRepository taskRepository){
        return args->{
            ListModel list1 = new ListModel(
                    1,
                    "List1",
                    LocalDate.of(2020, Month.JANUARY,2),
                    LocalDate.of(2020, Month.JANUARY,20)
            )  ;
            ListModel list2=new ListModel(
                    2,
                    "List2",
                    LocalDate.of(2020, Month.FEBRUARY,2),
                    LocalDate.of(2020, Month.FEBRUARY,20)
            )  ;

            // save the book
            listRepository.saveAll(List.of(list1,list2));

            // create and save new pages
            taskRepository.save(new TaskModel
                            (1,
                            "task1","description for task1",
                            LocalDate.of(2020, Month.FEBRUARY,2),
                            LocalDate.of(2020, Month.FEBRUARY,20),
                            LocalDate.of(2020, Month.FEBRUARY,2),
                            LocalDate.of(2020, Month.FEBRUARY,20),
                            "not start"
                            , list1));
            taskRepository.save(new TaskModel
                    (2,
                            "task2","description for task2",
                            LocalDate.of(2020, Month.FEBRUARY,2),
                            LocalDate.of(2020, Month.FEBRUARY,20),
                            LocalDate.of(2020, Month.FEBRUARY,2),
                            LocalDate.of(2020, Month.FEBRUARY,20),
                            "Done"
                            , list2));
            taskRepository.save(new TaskModel
                    (3,
                            "task3","description for task2",
                            LocalDate.of(2020, Month.FEBRUARY,2),
                            LocalDate.of(2020, Month.FEBRUARY,20),
                            LocalDate.of(2020, Month.FEBRUARY,2),
                            LocalDate.of(2020, Month.FEBRUARY,20),
                            "In Progress"
                            , list1));


        };
    }
}
