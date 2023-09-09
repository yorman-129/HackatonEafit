package com.innoHacks.innoHacks.repository;

import com.innoHacks.innoHacks.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskInterfaceRepository extends MongoRepository<Task, Long> {
}
