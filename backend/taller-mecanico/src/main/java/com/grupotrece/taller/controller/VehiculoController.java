package com.grupotrece.taller.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupotrece.taller.dto.VehiculoRequestDTO;
import com.grupotrece.taller.dto.VehiculoResponseDTO;
import com.grupotrece.taller.service.VehiculoService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/vehiculos")
@Tag(name = "Vehículos", description = "Operaciones sobre vehículos")
public class VehiculoController {

    private final VehiculoService vehiculoService;

    @Autowired
    public VehiculoController(VehiculoService vehiculoService) {
        this.vehiculoService = vehiculoService;
    }

    // GET - listar
    @GetMapping
    @Operation(summary = "Obtener todos los vehículos")
    public ResponseEntity<List<VehiculoResponseDTO>> listar() {
        return ResponseEntity.ok(vehiculoService.listar());
    }

    // POST - guardar
    @PostMapping
    @Operation(summary = "Crear un vehículo")
    public ResponseEntity<VehiculoResponseDTO> guardar(@RequestBody VehiculoRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(vehiculoService.guardar(dto));
    }

    // PUT - actualizar
    @PutMapping("/{id}")
    @Operation(summary = "Actualizar un vehículo")
    public ResponseEntity<VehiculoResponseDTO> actualizar(@PathVariable long id,
                                          @RequestBody VehiculoRequestDTO dto) {
        return ResponseEntity.ok(vehiculoService.actualizar(id, dto));
    }

    // DELETE - eliminar
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar un vehículo")
    public ResponseEntity<Void> eliminar(@PathVariable long id) {

        return vehiculoService.eliminar(id) ? ResponseEntity.noContent().build() :
                ResponseEntity.notFound().build();
    }
}
