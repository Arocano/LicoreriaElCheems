## Tabla de contenidos
1. [Información General](#general-info)
2. [Tecnologías](#technologies)
3. [Instalación](#installation)
4. [Colaboración](#collaboration)
5. [FAQs](#faqs)
### Información General
***
Un e-commerce que puede sera adaptado para las necesidades del usuario. Integra pasarale de pago y un administrador para los productos que estan a la venta. Además gran parte del contenido de la página es modificable para que el usuario pueda adaptar la página a posbiles festividades o promociones, sin la necesidad de modifcar el código, solo es necesario hacer los cambios en el adminstrador de la página.

## Technologies
***
Una lista de las tecnologias utilizadas en el proyecto:
* [React](https://es.react.dev/): Version 17.0.2 
* [Next.JS](https://nextjs.org/): Version 12.1.0
* [Sanity](https://www.sanity.io/): Version 3.2.0
* [Stripe](https://stripe.com/es): Version 8.209.0
## Instalación
***
Para instalar la aplicación clona el repositorio y sigue el orden de los comandos que te dejo a continuación 
```
$ git clone https://github.com/Arocano/LicoreriaElCheems
$ cd ../path/to/the/file
$ npm install
```
Antes de iniciar la aplicación debes iniciar el cliente sanity para ello debes moverte a la carpeta sanitycheems y utilizar los siguiente comandos
```
$ npm install --global sanity@latest
$ npm run dev
```
Ahora ya puedes iniciar la aplicación desde la carpeta raiz utilizando el comando 
```
$ npm run dev
```
## Colaboración
***
El proyecto puede ser mejorado, no dudes en colaborar con el si asi lo desesas
## FAQs
***
1. **El poyecto puede utilizar otra tecnologia en vez de sanity?**
Si el proyecto puede utilizar otra tecnologia, solo tendrias que cambiar el url de la API
2. __Porque sanity dejo de funcionar con el esquema del proyecto?__ 
Es posible que una nueva versión de sanity, tenga un nueva estructura para su esquemas, por lo cual deberas revisar la documentación para utilizar la ultima estructura de sanity o puedes utilizar las versiones de las tecnologias con las cuales fue creado este proyecto
