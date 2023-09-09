package com.innoHacks.innoHacks.controller;

import com.innoHacks.innoHacks.model.Task;
import com.innoHacks.innoHacks.services.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class taskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/addTask")
    public void save(@RequestBody Task task){
        taskService.saveTask(task);
    }
    @GetMapping
    public List<Task> findAllTask(){
        return taskService.findAll();
    }
}
