package com.grupotrece.taller.controller;

import com.grupotrece.taller.dto.ClienteRequestDTO;
import com.grupotrece.taller.dto.ClienteResponseDTO;
import com.grupotrece.taller.service.ClienteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@Tag(name = "Clientes", description = "Gestión de clientes del taller mecánico")
public class ClienteController {

    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    // GET
    @GetMapping
    @Operation(
            summary = "Listar todos los clientes",
            description = "Retorna la lista completa de clientes registrados en el taller"
    )
    public ResponseEntity<List<ClienteResponseDTO>> listar() {
        return ResponseEntity.ok(clienteService.listar());}

    // POST
    @PostMapping
    @Operation(
            summary = "Registrar nuevo cliente",
            description = "Crea un nuevo registro de cliente en el sistema del taller"
    )
    public ResponseEntity<ClienteResponseDTO> guardar(@RequestBody ClienteRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteService.guardar(dto));
    }

    // PUT
    @PutMapping("/{id}")
    @Operation(
            summary = "Actualizar cliente",
            description = "Actualiza los datos de un cliente existente por su ID"
    )
    public ResponseEntity<ClienteResponseDTO> actualizar(@PathVariable Long id,
                                                         @RequestBody ClienteRequestDTO dto) {
        return ResponseEntity.ok(clienteService.actualizar(id, dto));
    }

    // DELETE
    @DeleteMapping("/{id}")
    @Operation(
            summary = "Eliminar cliente",
            description = "Elimina permanentemente un cliente del sistema por su ID"
    )
    public ResponseEntity<String> eliminar(@PathVariable Long id) {
        clienteService.eliminar(id);
        return ResponseEntity.ok("Cliente eliminado correctamente.");
    }
}