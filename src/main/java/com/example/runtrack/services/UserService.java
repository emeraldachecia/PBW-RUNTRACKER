package com.example.runtrack.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

// import com.example.runtrack.repositories.UserRepository;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

    // public String register(String username, String email, String plainPassword) {
    //     // Cek apakah username sudah ada
    //     if (userRepository.existsByUsername(username)) {
    //         throw new IllegalArgumentException("Username is already taken.");
    //     }

    //     // Cek apakah email sudah ada
    //     if (userRepository.existsByEmail(email)) {
    //         throw new IllegalArgumentException("Email is already registered.");
    //     }

    //     // Hash password
    //     String hashedPassword = passwordEncoder.encode(plainPassword);

    //     // Buat objek User baru
    //     User newUser = new User();
    //     newUser.setUsername(username);
    //     newUser.setEmail(email);
    //     newUser.setPassword(hashedPassword);

    //     // Simpan ke database
    //     userRepository.save(newUser);

    //     return "User registered successfully!";
    // }
// }
