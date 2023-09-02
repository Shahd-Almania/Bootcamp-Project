package com.example.quickcheck_backend.Controller;

import com.example.quickcheck_backend.DTO.ApiResponse;
import com.example.quickcheck_backend.Model.PhoneNumber;
import com.example.quickcheck_backend.Model.User;
import com.example.quickcheck_backend.Service.PhoneNumberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/phoneNumber")
public class PhoneNumberController {

    private final PhoneNumberService phoneNumberService;

    @GetMapping
    public ResponseEntity getPhoneNumber(){
        return ResponseEntity.status(200).body(phoneNumberService.getPhoneNumber());
    }

    @PostMapping
    public ResponseEntity addPhoneNumber(@RequestBody @Valid PhoneNumber phoneNumber){
        phoneNumberService.addPhoneNumber(phoneNumber);
        return ResponseEntity.status(201).body(new ApiResponse("New phone number added..",201));
    }

    @PutMapping("/{id}")
    public ResponseEntity updatePhoneNumber(@RequestBody @Valid PhoneNumber phoneNumber, @PathVariable Integer id ){
        phoneNumberService.updatePhoneNumber(phoneNumber,id);
        return ResponseEntity.status(201).body(new ApiResponse("Update phone Number ..",201));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity deletePhoneNumber(@PathVariable Integer id){
        phoneNumberService.deletePhoneNumber(id);
        return ResponseEntity.status(201).body(new ApiResponse(" Delete phone Number..",201));
    }
}
