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
    private Long id;
    private String nameProject;
    private String description;
    private String creationDate;
    private String status;

}
