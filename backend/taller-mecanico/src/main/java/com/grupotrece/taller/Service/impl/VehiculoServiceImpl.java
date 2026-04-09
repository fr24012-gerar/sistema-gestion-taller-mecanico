package com.grupotrece.taller.Service.impl;

import com.grupotrece.taller.dto.VehiculoRequestDTO;
import com.grupotrece.taller.dto.VehiculoResponseDTO;
import com.grupotrece.taller.entity.Vehiculo;
import com.grupotrece.taller.repository.VehiculoRepository;
import com.grupotrece.taller.Service.VehiculoService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VehiculoServiceImpl implements VehiculoService {

    private final VehiculoRepository repository;

    public VehiculoServiceImpl(VehiculoRepository repository) {
        this.repository = repository;
    }

    // 🔁 ENTITY → RESPONSE DTO
    private VehiculoResponseDTO toResponseDTO(Vehiculo vehiculo) {
        VehiculoResponseDTO dto = new VehiculoResponseDTO();
        dto.setId(vehiculo.getId());
        dto.setMarca(vehiculo.getMarca());
        dto.setModelo(vehiculo.getModelo());
        dto.setPlaca(vehiculo.getPlaca());
        return dto;
    }

    // 🔁 REQUEST DTO → ENTITY
    private Vehiculo toEntity(VehiculoRequestDTO dto) {
        Vehiculo vehiculo = new Vehiculo();
        vehiculo.setMarca(dto.getMarca());
        vehiculo.setModelo(dto.getModelo());
        vehiculo.setPlaca(dto.getPlaca());
        return vehiculo;
    }

    @Override
    public List<VehiculoResponseDTO> listar() {
        return repository.findAll()
                .stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public VehiculoResponseDTO guardar(VehiculoRequestDTO dto) {
        Vehiculo vehiculo = toEntity(dto);
        Vehiculo guardado = repository.save(vehiculo);
        return toResponseDTO(guardado);
    }
}