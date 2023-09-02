package com.example.quickcheck_backend.Controller;

import com.example.quickcheck_backend.DTO.ApiResponse;
import com.example.quickcheck_backend.Model.Email;
import com.example.quickcheck_backend.Model.User;
import com.example.quickcheck_backend.Service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/email")
public class EmailController {

    private final EmailService emailService;


    @GetMapping
    public ResponseEntity getEmail(){
        return ResponseEntity.status(200).body(emailService.getEmail());

    }

    @PostMapping
    public ResponseEntity addEmail(@RequestBody @Valid Email email ){
        emailService.addEmail(email);
        return ResponseEntity.status(201).body(new ApiResponse("New email added..",201));

    }

    @PutMapping("/{id}")
    public ResponseEntity updateEmail(@RequestBody @Valid Email email, @PathVariable Integer id){
       emailService.updateEmail(email,id);
     return ResponseEntity.status(201).body(new ApiResponse("Update the email..",201));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteEmail(@PathVariable Integer id){
        emailService.deleteEmail(id);
        return ResponseEntity.status(201).body(new ApiResponse("Delete the email..",201));
    }



}
