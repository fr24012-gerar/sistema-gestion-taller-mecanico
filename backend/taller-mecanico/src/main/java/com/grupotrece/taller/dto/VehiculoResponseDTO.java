package com.grupotrece.taller.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VehiculoResponseDTO {
    private Long id;
    private String marca;
    private String modelo;
    private String placa;
    private Long clienteId;
}
