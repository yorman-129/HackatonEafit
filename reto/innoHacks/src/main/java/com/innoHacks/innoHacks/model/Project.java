package com.innoHacks.innoHacks.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class Project {
    @Id
    public Long id;
    public String nameProject;
    public String description;
    public String creationDate;
    public String status;

}
