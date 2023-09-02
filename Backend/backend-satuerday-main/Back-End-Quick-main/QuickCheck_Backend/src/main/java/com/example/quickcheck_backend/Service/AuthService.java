package com.example.quickcheck_backend.Service;

import com.example.quickcheck_backend.Model.User;
import com.example.quickcheck_backend.Repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthRepository authRepository;

    public List<User> getUsers() {
        return authRepository.findAll();
    }

    public void register(User user) {
        String hashedPassword = new BCryptPasswordEncoder().encode(user.getPassword());
        user.setRole("User");
        user.setPassword(hashedPassword);
        user.setConfirmPassword(hashedPassword);
        System.out.print(user);
        authRepository.save(user);
    }


}
