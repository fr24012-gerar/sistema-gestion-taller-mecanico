package com.grupotrece.taller.Service;

import com.grupotrece.taller.dto.VehiculoRequestDTO;
import com.grupotrece.taller.dto.VehiculoResponseDTO;
import java.util.List;

public interface VehiculoService {

    List<VehiculoResponseDTO> listar();

    VehiculoResponseDTO guardar(VehiculoRequestDTO dto);
}