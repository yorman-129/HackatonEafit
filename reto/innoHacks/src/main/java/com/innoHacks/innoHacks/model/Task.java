package com.innoHacks.innoHacks.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@Builder
public class Task {
    @Id
    private String taskId;
    private String nameTask;
    private String description;
    private Integer state;
    private String tipo;
    private String fechaInicio;
}
