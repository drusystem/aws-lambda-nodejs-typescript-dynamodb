
# SWAPI-LAMBDA

API "The Star Wars API" realizada en NodeJS bajo el framework serverless para despliegue en AWS.


## Requisitos previos

- Tener configurado el usuario AWS CLI con los permisos correspondientes.
- Tener instalador Docker para DynamoDB en local.


## Ejecutar proyecto localmente

### Clonar el proyecto

```bash
  git clone https://github.com/drusystem/aws-lambda-nodejs-typescript-dynamodb.git
```

### Ingresar a la carpeta del proyecto
```bash
  cd aws-lambda-nodejs-typescript-dynamodb
```

### Instalar dependencias
```bash
  npm install
```

### Desplegar contenedor docker
```bash
  docker-compose up -d
```

### Crear tabla "reto-indra-dev" en el contenedor de dynamodb-local
```bash
  http://localhost:8001/create-table
```
![Creación de tabla](./image/create_table_dynamodb.png)

### Configurar variables de entorno en el archivo "serverless.yml"
```bash
  DYNAMODB_HOST: http://localhost:8000
  DYNAMODB_TABLE: ${self:service}-${sls:stage}
  SWAPI_URL: https://swapi.py4e.com/api
```

### Inicializar servicio local
```bash
  npm run start
```
### Opcional
  Generar el build de la aplicación ( dist / .serverless)
```bash
  npm run build
```

## APIS disponibles
### Obtener todas las personas
```http
  GET http://localhost:3000/peoples
```
### Obtener una persona por id de DynamoDB
```http
  GET http://localhost:3000/peoples/${id}
```

### Obtener una persona por id de SWAPI
```http
  GET http://localhost:3000/peoples/${id}
```

| Headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `provider` | `string` | Se debe enviar el valor de **external_api** para que la API valide que debe obtener la data de SWAPI |

### Crear persona en DynamoDB
```http
  POST http://localhost:3000/peoples
```
| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nombre` | `string` | Campo **Requerido** |
| `altura` | `string` | Campo **Requerido** |
| `masa` | `string` | Campo **Requerido** |
| `color_pelo` | `string` | Campo **Requerido** |
| `color_piel` | `string` | Campo **Requerido** |
| `color_ojos` | `string` | Campo **Requerido** |
| `anio_nacimiento` | `string` | Campo **Requerido** |
| `genero` | `string` | Campo **Requerido** |
| `mundo_natal` | `string` | Campo **Requerido** |
| `peliculas` | `array[string]` | Campo **Requerido** |
| `especies` | `array[string]` | Campo **Requerido** |
| `vehiculos` | `array[string]` | Campo **Requerido** |
| `naves_estelares` | `array[string]` | Campo **Requerido** |

## Autor

- [@drusystem](https://www.github.com/drusystem)

