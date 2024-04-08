# Conecta Turismo

Esta prueba técnica ha sido concebida con la idea de valorar tanto el desarrollo de la lógica de negocio, como la calidad del código y las buenas prácticas.

### Enlaces relevantes

[API Rest Data](http://34.49.228.18)

[Graphql Server Data](http://34.49.228.18/graphql)

[Desing in Penpot](https://design.penpot.app/#/view/6e12068a-09a0-801a-8004-128ebf8b3b3e?page-id=c5fbf94c-ca48-8019-8004-12a519664786&section=interactions&index=0&share-id=af2058fc-4f53-80f4-8004-13dd885b4be9)

### Requisitos a valorar

- Desarrollo de la lógica de negocio correcta
- Se respeta el estilo visual otorgado
- Código limpio, fácil de entender, y reutilizable
- No hay errores en el aplicativo

### Puntos opcionales extra

- Uso de Typescript
- Hacer uso de graphQL
- Generar un tipado correcto
- Poder compartir los resultados por URL
- Uso de docker para conectarse a la api
- Test unitarios

## Descripción

Como desarrollador frontend se te ha encargado desarrollar el nuevo panel del buscador aéreo de nuestra empresa, el cual se compone de un input de origen y un input de destino autocompletable, además de un panel de resultados categorizado por diferentes opciones combinables.

Nuestro equipo de backend ya ha desarrollado el sistema que te ofrecerá la API requerida para el desarrollo del panel en 2 versiones disponibles: API rest y GraphQL

Parte del trabajo ya está hecho, por lo que tu labor será terminar la funcionalidad y asegurarte que cumple con el diseño aportado

## Arquitectura

El proyecto ya tiene todo lo necesario para levantar un frontend con next.js y typescript, usando el nuevo APP Router para la navegación, respecto al sistema de estado global no hay nada predefinido, por lo que puedes elegir el que más te guste si lo ves necesario.

Para la conexión con la API de Backend, ya dispones de 2 interfaces en la carpeta `client`, donde haciendo uso la función setClient puedes obtener el servicio para cualquiera de las 2 apis del backend

La aplicación está predefinida para su uso con Typescript, y es lo que nos gustaría ver en tu código, pero si no te sientes cómodo con TS, también es compatible con javascript por lo que puedes realizar la prueba con dicho lenguaje.

### Levantar el proyecto

- Instalar librerías
- `npm run dev` Levanta el aplicativo en modo desarrollo
- `npm run test` En este comando debes implementar los test unitarios (Opcional)

### Directorio de archivos

- `app`: Carpeta del Router de nextjs
- `components`: Directorio de componentes
- `client`: Interface conexión con las apis
- `public`: Archivos públicos estáticos

### Pasos a seguir

- Rellenar el autocompletado con los datos obtenidos de la API
- Poder seleccionar una opción del autocompletado con el ratón
- Ir a la pantalla /result al hacer click en el botón buscar
- Rellenar combinaciones con los datos de la api
- Restringir seleccionar a 1 ida y 1 vuelta de una sola combinación, no se pueden coger idas y vueltas de combinaciones distintas
- Estilar esta pantalla según estilos otorgados

### Documentacion API

El Graphql ya está documentado gracias a sus esquemas, pero la api Rest consta de 2 endpoint:

- `GET /airports` -> No tiene parámetros
- `POST /combinations` -> Hay que enviar un body con la siguiente estructura

```
{
    "offset": 5, // Desde donde empieza a devolver resultados
    "limit": 4, // Número de resultados a mostrar
    "route": "VLC-VLC" // Rutas sobre las que quieres obtener combinaciones
}
```

`VLC-VLC` Las rutas son el código de aeropuertos de salida y llegada separados por un guion. Salida Valencia(VLC) - Llegada Barcelona(BNC)

#### Autentificación:

La aplicación requiere autentificación para poder hacer consultas, o no devolverá nada, para ello deberás usar el token JWT:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
