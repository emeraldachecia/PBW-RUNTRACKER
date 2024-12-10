package com.example.runtrack.controllers;

import com.example.runtrack.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;

import jakarta.validation.Valid;

@Controller
public class UserController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Menampilkan halaman register
    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("user", new User());
        return "html/register";
    }

    // Memproses form register
    @PostMapping("/register")
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, Model model){

        // Jika validasi error, maka mengirim error
        if (result.hasErrors()){
            model.addAttribute("errors", result.getAllErrors());
            return "html/register"; // kembali ke halaman register
        }

        // Jika validasi berhasil, simpan user ke database
        String sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, user.getName(), user.getEmail(), user.getPassword(), user.getRole());

        //redirect ke halaman homepage
        return "redirect:/results";
    }

    @GetMapping("/results")
    public String showResults() {
        return "html/homepage";
    }
}
