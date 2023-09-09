package com.innoHacks.innoHacks.services;

import com.innoHacks.innoHacks.model.Task;
import com.innoHacks.innoHacks.repository.TaskInterfaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class taskService {
    @Autowired
    private TaskInterfaceRepository taskInterfaceRepository;

    public void saveTask(Task task){
        taskInterfaceRepository.save(task);
    }
    public List<Task> findAll(){
        return taskInterfaceRepository.findAll();
    }
    public Optional<Task> findById(Long id){
        return taskInterfaceRepository.findById(id);
    }
    public void deleteById(Long id){
        taskInterfaceRepository.deleteById(id);
    }
}
