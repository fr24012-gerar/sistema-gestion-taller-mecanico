package com.grupotrece.taller.controller;

import com.grupotrece.taller.dto.LoginRequest;
import com.grupotrece.taller.dto.LoginResponse;
import com.grupotrece.taller.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request
    ) {

        return ResponseEntity.ok(
                usuarioService.login(request)
        );
    }
}
