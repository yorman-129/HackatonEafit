package com.innoHacks.innoHacks.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@Builder
public class Project {
    @Id
    private String taskId;
    private String nombre;
    private String description;
    private Integer state;
    private String
}
