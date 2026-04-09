package com.grupotrece.taller.repository;

import com.grupotrece.taller.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findByStockLessThan(Integer stock);

    List<Producto> findByNombreContainingIgnoreCase(String nombre);
}
