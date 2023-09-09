package com.innoHacks.innoHacks.repository;

import com.innoHacks.innoHacks.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends MongoRepository<Project,Long> {

}
