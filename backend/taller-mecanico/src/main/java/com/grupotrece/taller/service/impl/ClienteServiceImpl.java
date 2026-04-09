package com.grupotrece.taller.service.impl;

import com.grupotrece.taller.dto.ClienteRequestDTO;
import com.grupotrece.taller.dto.ClienteResponseDTO;
import com.grupotrece.taller.entity.Cliente;
import com.grupotrece.taller.mapper.ClienteMapper;
import com.grupotrece.taller.repository.ClienteRepository;
import com.grupotrece.taller.service.ClienteService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository repository;

    public ClienteServiceImpl(ClienteRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<ClienteResponseDTO> listar() {
        return repository.findAll()
                .stream()
                .map(ClienteMapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public ClienteResponseDTO guardar(ClienteRequestDTO dto) {
        Cliente guardado = repository.save(ClienteMapper.toEntity(dto));

        return ClienteMapper.toResponseDto(guardado);
    }

    @Override
    public ClienteResponseDTO actualizar(long id, ClienteRequestDTO dto) {
        Cliente cliente = repository.findById(id)
                .orElseThrow();

        cliente.setNombre(dto.getNombre());
        cliente.setTelefono(dto.getTelefono());
        cliente.setEmail(dto.getEmail());

        return ClienteMapper.toResponseDto(repository.save(cliente));
    }

    @Override
    public boolean eliminar(long id) {
        Optional<Cliente> cliente = repository.findById(id);

        if (cliente.isPresent()) {
            repository.delete(cliente.get());
            return true;
        }

        return false;
    }


}