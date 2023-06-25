# ✨Examen Jooy Car✨
> Este repositorio contiene la implementacion del examen a JooyCar

Para ejecutar el proyecto se debe actulizar la variable de entorno de la direccion de la base de datos de Mongo, un ejemplo default de configuracion esta en ```.env-example```

Por ultimo ejecutar docker en la terminal
docker-compose up
```sh
docker-compose up
```
Por defecto se ejecutará en http://localhost:505/


## Comandos adicionales

Para ejecutar el proyecto en local
```sh
npm run start
```

Para ejecutar los test del proyecto
```sh
npm run test
```

## Rutas de apis de ejemplo

Listado
http://localhost:505/api/trips/v1?start_gte=1642500462000&start_lte=1642500462000&distance_gte=0&limit=1&offset=0

Creación
http://localhost:505/api/trips/v1

- En la carpeta Postman esta el ejemplo de las apis en postman

## Punto a considerar

el campo "boundingBox" No se ha encontrado la implementacion que este de acuerdo a la muestra en el portar del swager de JooyCar y no ha sido posible la implementacion por defecto de ingresa valores fijos en un array
