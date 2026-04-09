package com.grupotrece.taller.service;

import com.grupotrece.taller.dto.ClienteRequestDTO;
import com.grupotrece.taller.dto.ClienteResponseDTO;
import java.util.List;
import java.util.Optional;

public interface ClienteService {

    List<ClienteResponseDTO> listar();

    ClienteResponseDTO guardar(ClienteRequestDTO dto);

    ClienteResponseDTO actualizar(long id, ClienteRequestDTO dto);

    boolean eliminar(long id);
}