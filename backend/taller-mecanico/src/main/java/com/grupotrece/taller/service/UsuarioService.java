package com.grupotrece.taller.service;

import com.grupotrece.taller.dto.LoginRequest;
import com.grupotrece.taller.dto.LoginResponse;

public interface UsuarioService {

    LoginResponse login(LoginRequest request);
}
