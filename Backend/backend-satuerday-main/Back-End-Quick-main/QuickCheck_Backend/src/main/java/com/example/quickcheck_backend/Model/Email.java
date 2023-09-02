package com.example.quickcheck_backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;


@AllArgsConstructor
@NoArgsConstructor
@Data @Entity
public class Email {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String emailAdress;

    private boolean spam;
    
    //private Integer userId;


}
