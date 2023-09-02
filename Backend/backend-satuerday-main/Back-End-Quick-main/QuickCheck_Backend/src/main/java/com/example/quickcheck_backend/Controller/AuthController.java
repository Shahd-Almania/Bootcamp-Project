package com.example.quickcheck_backend.Controller;

import com.example.quickcheck_backend.DTO.ApiResponse;
import com.example.quickcheck_backend.Model.User;
import com.example.quickcheck_backend.Service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    @GetMapping("/users")
    public ResponseEntity<?> getUsers(@AuthenticationPrincipal User user){
        if (!user.getRole().equals("Admin")){
            return ResponseEntity.status(401).body(new ApiResponse("Only admin can get the users list",401));
        }
        return ResponseEntity.status(HttpStatus.OK).body(authService.getUsers());
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid User user){
        System.out.println(user);
        authService.register(user);
        return ResponseEntity.status(201).body(new ApiResponse("New user add.",200));
    }


    @PostMapping("/login")
    public ResponseEntity login(){
        return ResponseEntity.status(200).body(new ApiResponse("Welcome back.",200));
    }

}
