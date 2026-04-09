package com.grupotrece.taller.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "detalle_factura")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class DetalleFactura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer cantidad;
    private Double precioUnitario;
    private Double subtotal;

    @ManyToOne
    @JoinColumn(name = "factura_id")
    private Factura factura;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;
}
