package com.innoHacks.innoHacks.services;

import com.innoHacks.innoHacks.model.Project;
import com.innoHacks.innoHacks.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public void saveProject (Project project){
        projectRepository.save(project);
    }
    public void deleteProject (Long id){
        projectRepository.deleteById(id);
    }
    public Project findProject(Long id){
        return projectRepository.findById(id).orElse(null);
    }

    public List<Project> allProjects(){
        return projectRepository.findAll();
    }

}

