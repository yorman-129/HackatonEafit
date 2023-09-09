package com.innoHacks.innoHacks.controller;

import com.innoHacks.innoHacks.model.Task;
import com.innoHacks.innoHacks.services.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @GetMapping("allTask")
    public List<Task> findAllTask(){
        return taskService.findAll();
    }
    @GetMapping("findById/{id}")
    public Optional<Task> findByTask(@PathVariable Long id){
        return taskService.findById(id);
    }
    @DeleteMapping("deleteTask/{id}")
    public void deleteTask(@PathVariable Long id){
        taskService.deleteById(id);
    }
}
