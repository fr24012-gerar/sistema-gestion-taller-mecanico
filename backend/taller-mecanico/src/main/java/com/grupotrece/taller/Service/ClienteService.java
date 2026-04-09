package com.grupotrece.taller.Service;

import com.grupotrece.taller.dto.ClienteRequestDTO;
import com.grupotrece.taller.dto.ClienteResponseDTO;
import java.util.List;

public interface ClienteService {

    List<ClienteResponseDTO> listar();

    ClienteResponseDTO guardar(ClienteRequestDTO dto);
}