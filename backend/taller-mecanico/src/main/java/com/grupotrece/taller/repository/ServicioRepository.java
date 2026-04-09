package com.grupotrece.taller.repository;

import com.grupotrece.taller.entity.EstadoServicio;
import com.grupotrece.taller.entity.Servicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ServicioRepository extends JpaRepository<Servicio, Long> {

    List<Servicio> findByVehiculoId(Long vehiculoId);

    List<Servicio> findByEstado(EstadoServicio estado);

    List<Servicio> findByFechaBetween(LocalDate inicio, LocalDate fin);
}