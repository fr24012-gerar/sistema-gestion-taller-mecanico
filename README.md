# 🚗 Sistema de Gestión para Taller Mecánico

Aplicación web desarrollada con Spring Boot para la administración de un taller mecánico.

En esta etapa del proyecto se ha implementado la gestión de **clientes** y **vehículos**, incluyendo operaciones CRUD.

---

## 👥 Integrantes

- Gerardo Adonay Flores Rodas - FR24012  
- César Antonio Castro Aquino - CA07001  
- Josué Stanley Ruiz Gaitán - RG24040  
- Josué Fernando Mata Hernández - MH24055  
- Gabriel Enrique López Alvarado - LA23024  

---

## ⚙️ Tecnologías utilizadas

- Java 21  
- Spring Boot  
- Spring Data JPA  
- PostgreSQL  
- Lombok  
- Swagger (OpenAPI)  

---

## 🗂️ Arquitectura del proyecto

El sistema está estructurado en capas:

- **controller** → Manejo de endpoints (API REST)  
- **service** → Lógica de negocio  
- **repository** → Acceso a base de datos  
- **entity** → Entidades JPA  
- **dto** → Transferencia de datos  
- **mapper** → Conversión entre Entity y DTO  

---

## 🚀 Funcionalidades implementadas

- CRUD de clientes  
- CRUD de vehículos  
- Relación entre cliente y vehículo  
- Uso de DTOs y mappers  

---

## 🧪 Documentación API (Swagger)

Una vez ejecutado el proyecto, puedes acceder a la documentación en:

👉 http://localhost:8080/swagger-ui/index.html

Desde ahí puedes probar todos los endpoints disponibles.

---

## ▶️ Ejecución del proyecto

1. Clonar el repositorio  
2. Configurar la base de datos en `application.properties`  
3. Ejecutar la aplicación desde la clase principal  
4. Acceder a Swagger en el navegador  

---

## 🗄️ Base de datos

El sistema utiliza PostgreSQL.  
Las tablas se generan automáticamente mediante JPA/Hibernate.

---

## 📌 Notas

- Se implementa arquitectura en capas  
- Uso de DTOs para evitar exponer entidades directamente  
- Uso de mappers para conversión de datos  