package com.grupotrece.taller.repository;

import com.grupotrece.taller.entity.DetalleFactura;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetalleFacturaRepository extends JpaRepository<DetalleFactura, Long> {
}
