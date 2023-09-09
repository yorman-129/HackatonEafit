package com.innoHacks.innoHacks.controller;

import com.innoHacks.innoHacks.model.Project;
import com.innoHacks.innoHacks.model.Task;
import com.innoHacks.innoHacks.services.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class projectController {
    @Autowired
    private ProjectService serviceProject;

    @PostMapping("/addProject")
    public void saveProject(@RequestBody Project project){
        serviceProject.saveProject(project);
    }

    @GetMapping("/projects/")
    public List<Project> allProjects(){ return serviceProject.allProjects(); }

    @GetMapping("/project/{id}")
    public  Project findProject(@PathVariable Long id){ return serviceProject.findProject(id);}

    @DeleteMapping("/project/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable("id") Long id){ serviceProject.deleteProject(id);
        return new ResponseEntity<>("El proyecto fue borrado exitosamente", HttpStatus.OK);
    }

}
