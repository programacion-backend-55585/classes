import express from 'express'
const app = express()
app.get('/', (req, res) => res.send('<h1>[R2] My service 🔥🔥</h1>'))
app.listen(8080, () => console.log('(8080) Running 🏃...'))

/**
 * === Construir la imagen
 * docker build -t r2service .
 * 
 * === Ver lista de imagenes
 * docker images
 * 
 * === Crear un contenedor a partir de la imagen
 * docker run -d -p 8080:8080 --name mycontainer r2service
 * 
 * === Listar contenedores
 * docker ps    (Mostrar lista de contenedores solo si estan corriendo)
 * docker ps -a (Mostrar lista de contenedores que no estan corriendo)
 * 
 * === Borrar un Contenedor
 * docker rm mycontainer
 * 
 * === Detener un contanedor
 * docker stop mycontainer
 * 
 * 
 * ********************************************* PASOS PARA SUBIR A DOCKER HUB ***********************
 * 
 * === Login con DOcker
 * docker login
 * 
 * === Asignamos una version a la imagen
 * docker tag r2service arturoverbel/r2service:1.0.0
 * 
 * === Subir la imagen que versionamos
 * docker push arturoverbel/r2service:1.0.0
 * 
 * 
 * === Correr una imagen que se subio
 * docker run -d -p 8081:8080 --name mycontainer2 arturoverbel/r2service:1.0.0
 * 
 * 
 */