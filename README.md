# 🚗 Sistema de Gestión para Taller Mecánico

Aplicación web desarrollada para la administración de un taller mecánico, implementando una arquitectura de n capas y una interfaz web moderna para la gestión de clientes y vehículos.

## 👥 Integrantes

* Gerardo Adonay Flores Rodas - FR24012
* César Antonio Castro Aquino - CA07001
* Josué Stanley Ruiz Gaitán - RG24040
* Josué Fernando Mata Hernández - MH24055
* Gabriel Enrique López Alvarado - LA23024

---

# ⚙️ Tecnologías utilizadas

## Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Spring Web
* PostgreSQL
* Lombok
* Swagger (OpenAPI)

## Frontend

* React
* Vite
* Bootstrap
* React Router DOM

## Contenedorización

* Docker
* Docker Compose

---

# 🏗️ Arquitectura del proyecto

El sistema está desarrollado siguiendo una arquitectura en n capas que facilita la escalabilidad, mantenibilidad y separación de responsabilidades.

```
Cliente (React)
        │
        ▼
Controller (API REST)
        │
        ▼
Service (Lógica de negocio)
        │
        ▼
Repository (Acceso a datos)
        │
        ▼
Entity (Persistencia JPA)
        │
        ▼
PostgreSQL
```

Además, el proyecto incorpora:

* **DTOs** para la transferencia de datos.
* **Mappers** para convertir entre entidades y DTOs.
* Separación entre frontend y backend mediante una API REST.

---

# 🚀 Funcionalidades implementadas

## Gestión de clientes

* Registrar clientes.
* Consultar clientes.
* Actualizar información de clientes.
* Eliminar clientes.
* Búsqueda de clientes.

## Gestión de vehículos

* Registrar vehículos.
* Consultar vehículos.
* Actualizar vehículos.
* Eliminar vehículos.
* Búsqueda de vehículos.

## Características adicionales

* Relación entre clientes y vehículos.
* Navegación mediante menú lateral.
* Componentes reutilizables.
* Diseño responsivo utilizando Bootstrap.
* Comunicación entre frontend y backend mediante API REST.

---

# 🖥️ Interfaz gráfica

La aplicación incorpora una interfaz web desarrollada con **React + Vite**, diseñada para representar visualmente las operaciones implementadas en el backend.

Entre sus principales características se encuentran:

* Gestión completa (CRUD) de clientes.
* Gestión completa (CRUD) de vehículos.
* Búsqueda de registros.
* Navegación entre módulos mediante un menú lateral.
* Componentes reutilizables para facilitar el mantenimiento.
* Adaptación a diferentes tamaños de pantalla mediante diseño responsivo.

Una vez iniciado el proyecto, el frontend estará disponible en:

```
http://localhost:5173/login
```

---

# 📚 Documentación de la API

La documentación interactiva de los servicios REST se encuentra disponible mediante Swagger.

Acceso:

```
http://localhost:8080/swagger-ui/index.html
```

Desde esta interfaz es posible probar todos los endpoints implementados.

---

# 🐳 Ejecución mediante Docker Compose

El proyecto puede ejecutarse completamente utilizando Docker Compose, levantando automáticamente la base de datos PostgreSQL, el backend y el frontend.

## Requisitos

* Docker
* Docker Compose

## Levantar los servicios

Desde la carpeta raíz del proyecto ejecutar:

```bash
docker compose up --build
```

Se crearán los siguientes contenedores:

| Servicio            | Puerto |
| ------------------- | ------ |
| PostgreSQL          | 5433   |
| Backend Spring Boot | 8080   |
| Frontend React      | 5173   |

La configuración utilizada es:

* **Base de datos:** `taller_mecanico`
* **Usuario:** `postgres`
* **Contraseña:** `postgres`

El backend se conecta automáticamente al contenedor de PostgreSQL mediante la red interna de Docker utilizando:

```
jdbc:postgresql://postgres:5432/taller_mecanico
```

---

# ▶️ Ejecución manual

## Backend

1. Ingresar al proyecto backend.
2. Configurar la conexión a PostgreSQL en `application.properties` o mediante variables de entorno.
3. Ejecutar la aplicación desde la clase principal de Spring Boot.
4. Acceder a Swagger desde el navegador.

## Frontend

Entrar a la carpeta del frontend:

```bash
cd frontend/taller-grupo13
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:5173/login
```

---

# 🗄️ Base de datos

El sistema utiliza PostgreSQL como gestor de base de datos relacional.

Las tablas son generadas automáticamente mediante JPA/Hibernate según las entidades definidas en el proyecto.

Cuando se ejecuta con Docker Compose, la información se conserva utilizando un volumen persistente:

```
postgres_data
```

---

# 📌 Características del proyecto

* Arquitectura en n capas.
* API REST desarrollada con Spring Boot.
* Persistencia con Spring Data JPA y PostgreSQL.
* Uso de DTOs para desacoplar la capa de presentación de las entidades.
* Uso de mappers para la conversión entre entidades y DTOs.
* Frontend SPA desarrollado con React + Vite.
* Interfaz responsiva utilizando Bootstrap.
* Separación completa entre frontend y backend.
* Despliegue simplificado mediante Docker Compose.
