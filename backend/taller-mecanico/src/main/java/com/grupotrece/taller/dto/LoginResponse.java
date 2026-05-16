package com.grupotrece.taller.dto;

public record LoginResponse(
        Long id,
        String username,
        String message
) {
}
