package com.innoHacks.innoHacks.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document("task")
public class Task {
    @Id
    private Long id;
    private Long idProject;
    private String nameTask;
    private String description;
    private Integer state;
    private String type;
    private String initDate;
    private String endDate;
    private String estimatedTime;
    private String updateTime;
}
