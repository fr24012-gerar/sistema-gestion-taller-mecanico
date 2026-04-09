package com.grupotrece.taller.mapper;

import com.grupotrece.taller.dto.VehiculoRequestDTO;
import com.grupotrece.taller.dto.VehiculoResponseDTO;
import com.grupotrece.taller.entity.Vehiculo;

public class VehiculoMapper {
    //metodo para converti una entidad a un dto
    public static VehiculoResponseDTO toResponseDTO(Vehiculo vehiculo){
        if(vehiculo == null) return null;

        VehiculoResponseDTO dto = new VehiculoResponseDTO();
        dto.setId(vehiculo.getId());
        dto.setMarca(vehiculo.getMarca());
        dto.setModelo(vehiculo.getModelo());
        dto.setPlaca(vehiculo.getPlaca());
        if(vehiculo.getCliente() != null){
            dto.setClienteId(vehiculo.getCliente().getId());
        }
        return dto;
    }


    //metodo para convertir de dto a entidad
    public static Vehiculo toEntity(VehiculoRequestDTO dto){
        if(dto == null) return null;

        Vehiculo vehiculo = new Vehiculo();
        vehiculo.setMarca(dto.getMarca());
        vehiculo.setModelo(dto.getModelo());
        vehiculo.setPlaca(dto.getPlaca());
        return vehiculo;
    }
}
