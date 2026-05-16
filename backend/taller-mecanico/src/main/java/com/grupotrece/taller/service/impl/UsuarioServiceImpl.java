package com.grupotrece.taller.service.impl;

import com.grupotrece.taller.dto.LoginRequest;
import com.grupotrece.taller.dto.LoginResponse;
import com.grupotrece.taller.entity.Usuario;
import com.grupotrece.taller.repository.UsuarioRepository;
import com.grupotrece.taller.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Override
    public LoginResponse login(LoginRequest request) {

        Usuario usuario = usuarioRepository
                .findByUsername(request.username())
                .orElseThrow(() ->
                        new RuntimeException("Usuario no encontrado")
                );

        if (!usuario.getPassword().equals(request.password())) {
            throw new RuntimeException("Contraseña incorrecta");
        }

        return new LoginResponse(
                usuario.getId(),
                usuario.getUsername(),
                "Login exitoso"
        );
    }
}