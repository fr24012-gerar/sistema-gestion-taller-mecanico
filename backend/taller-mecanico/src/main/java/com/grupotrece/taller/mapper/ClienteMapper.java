package com.grupotrece.taller.mapper;

import com.grupotrece.taller.dto.ClienteResponseDTO;
import com.grupotrece.taller.dto.ClienteRequestDTO;
import com.grupotrece.taller.entity.Cliente;

public class ClienteMapper {

    // Metodo para convertir un Cliente a ClienteResponseDTO
    public static ClienteResponseDTO toResponseDto(Cliente cliente){
        if(cliente == null) return null;
        ClienteResponseDTO dto = new ClienteResponseDTO();
        dto.setId(cliente.getId());
        dto.setNombre(cliente.getNombre());
        dto.setTelefono(cliente.getTelefono());
        dto.setEmail(cliente.getEmail());
            return dto;
    }
    // Metodo para convertir un ClienteRequestDTO a Cliente
    public static Cliente toEntity(ClienteRequestDTO dto){
        if(dto == null) return null;

        Cliente cliente = new Cliente();
        cliente.setNombre(dto.getNombre());
        cliente.setTelefono(dto.getTelefono());
        cliente.setEmail(dto.getEmail());
        return cliente;
    }

}

