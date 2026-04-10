package com.grupotrece.taller.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Sistema de Gestión de Taller Mecánico")
                        .version("1.0")
                        .description("API para gestionar clientes, vehículos y servicios del taller")
                        .contact(new Contact()
                                .name("Taller_mecanico")
                                .email("taller_mecanico@gmail.com")
                        )
                );
    }
}