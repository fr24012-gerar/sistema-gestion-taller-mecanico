package com.grupotrece.taller.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehiculoRequestDTO {
    private String marca;
    private String modelo;
    private String placa;
    private Long clienteId;
}
