package com.grupotrece.taller.service.impl;

import com.grupotrece.taller.dto.VehiculoRequestDTO;
import com.grupotrece.taller.dto.VehiculoResponseDTO;
import com.grupotrece.taller.entity.Vehiculo;
import com.grupotrece.taller.mapper.VehiculoMapper;
import com.grupotrece.taller.repository.VehiculoRepository;
import com.grupotrece.taller.service.VehiculoService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VehiculoServiceImpl implements VehiculoService {

    private final VehiculoRepository repository;

    public VehiculoServiceImpl(VehiculoRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<VehiculoResponseDTO> listar() {
        return repository.findAll()
                .stream()
                .map(VehiculoMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public VehiculoResponseDTO guardar(VehiculoRequestDTO dto) {
        Vehiculo guardado = repository.save(VehiculoMapper.toEntity(dto));

        return VehiculoMapper.toResponseDTO(guardado);
    }

    @Override
    public VehiculoResponseDTO actualizar(long id, VehiculoRequestDTO dto) {
        Vehiculo vehiculo = repository.findById(id)
                .orElseThrow();

        vehiculo.setMarca(dto.getMarca());
        vehiculo.setModelo(dto.getModelo());
        vehiculo.setPlaca(dto.getPlaca());

        return VehiculoMapper.toResponseDTO(repository.save(vehiculo));
    }

    @Override
    public boolean eliminar(long id) {
        Optional<Vehiculo> vehiculo = repository.findById(id);

        if (vehiculo.isPresent()){
            repository.delete(vehiculo.get());
            return true;
        }

        return false;
    }
}