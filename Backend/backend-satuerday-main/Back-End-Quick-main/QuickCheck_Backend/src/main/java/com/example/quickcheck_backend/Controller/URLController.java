package com.example.quickcheck_backend.Controller;

import com.example.quickcheck_backend.DTO.ApiResponse;
import com.example.quickcheck_backend.Model.URL;
import com.example.quickcheck_backend.Model.User;
import com.example.quickcheck_backend.Service.URLService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/url")
public class URLController {

    private final URLService urlService;

    @GetMapping
    public ResponseEntity getURL(){
        return ResponseEntity.status(200).body(urlService.getURL());

    }

    @PostMapping
    public ResponseEntity addURL(@RequestBody @Valid URL url){
        urlService.addURL(url);
        return ResponseEntity.status(201).body(new ApiResponse("New URL added..",201));
    }

    @PutMapping("/{id}")
    public ResponseEntity updateURL(@RequestBody @Valid URL url, @PathVariable Integer id){
        urlService.updateURL(url,id);
        return ResponseEntity.status(201).body(new ApiResponse("Update the URL..",201));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteURL(@PathVariable Integer id){
        urlService.deleteURL(id);
        return ResponseEntity.status(201).body(new ApiResponse("Delete the URL..",201));
    }


}
