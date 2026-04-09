package com.grupotrece.taller.Service.impl;

import com.grupotrece.taller.dto.ClienteRequestDTO;
import com.grupotrece.taller.dto.ClienteResponseDTO;
import com.grupotrece.taller.entity.Cliente;
import com.grupotrece.taller.repository.ClienteRepository;
import com.grupotrece.taller.Service.ClienteService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository repository;

    public ClienteServiceImpl(ClienteRepository repository) {
        this.repository = repository;
    }

    // 🔁 ENTITY → RESPONSE DTO
    private ClienteResponseDTO toResponseDTO(Cliente cliente) {
        ClienteResponseDTO dto = new ClienteResponseDTO();
        dto.setId(cliente.getId());
        dto.setNombre(cliente.getNombre());
        dto.setEmail(cliente.getEmail());
        return dto;
    }

    // 🔁 REQUEST DTO → ENTITY
    private Cliente toEntity(ClienteRequestDTO dto) {
        Cliente cliente = new Cliente();
        cliente.setNombre(dto.getNombre());
        cliente.setEmail(dto.getEmail());
        return cliente;
    }

    @Override
    public List<ClienteResponseDTO> listar() {
        return repository.findAll()
                .stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ClienteResponseDTO guardar(ClienteRequestDTO dto) {
        Cliente cliente = toEntity(dto);
        Cliente guardado = repository.save(cliente);
        return toResponseDTO(guardado);
    }
}