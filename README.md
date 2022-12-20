# 📝 BACKEND: BuscaTuProfe

## Instalación

Clonar el presente repositorio en el directorio de su agrado con la siguiente línea de comando:

```
git clone https://github.com/KoriAntunez/BuscaTuProfe_Back
```

Ejecutar el comando:

```
npm install
```

## Despliegue

Cree el archivo `.env` y copie el siguiente contenido, luego complete las variables

```bash
HTTP= [Colocar URL del Front End]
MONGODB_URI=[colocar URL de Base de Datos]
JWT_SECRET=[Configurar token, Ejemplo: 123456]
SALT=[Número de bits del token, Ejemplo: 10]
cloud_name=[Nombre de cloud para despliegue de imagenes]
api_key=[api_key de la cloud]
api_secret=[api_secret de la cloud]
```

Finalmente, para levantar el proyecto en su máquina local, ejecutar el siguiente comando en la misma dirección anterior:

```
npm start
```

## Dependencias

Es necesario tener previamente instalado los siguientes programas para seguir las instrucciones exitosamente.

[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com) Para ejecutar los comandos de `git`

[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/es/) Para ejecutar los comandos de `npm`
