package com.grupotrece.taller.service;

import com.grupotrece.taller.dto.VehiculoRequestDTO;
import com.grupotrece.taller.dto.VehiculoResponseDTO;
import java.util.List;
import java.util.Optional;

public interface VehiculoService {

    List<VehiculoResponseDTO> listar();

    Optional<VehiculoResponseDTO> encontrarPorPlaca(String placa);

    VehiculoResponseDTO guardar(VehiculoRequestDTO dto);

    VehiculoResponseDTO actualizar(long id, VehiculoRequestDTO dto);

    boolean eliminar(long id);
}