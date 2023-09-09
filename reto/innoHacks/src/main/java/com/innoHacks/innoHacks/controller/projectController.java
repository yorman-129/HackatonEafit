package com.innoHacks.innoHacks.controller;

import com.innoHacks.innoHacks.model.Project;
import com.innoHacks.innoHacks.model.Task;
import com.innoHacks.innoHacks.services.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class projectController {
    @Autowired
    private ProjectService serviceProject;

    @PostMapping("/addProject")
    public void saveProject(@RequestBody Project project){
        serviceProject.saveProject(project);
    }

}
