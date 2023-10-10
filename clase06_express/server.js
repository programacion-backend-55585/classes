const http = require('http')

const server = http.createServer( (request, response) => {
    response.end('<h2>My first server. Hello World </h2> asdasdasd ')
} )

server.listen(8080, () => {
    console.log("Listening on port 8080 🏃 ...  .")    
})

//  http://127.0.0.1:8080/
//  http://localhost:8080/
//  http://192.168.0.6:8080/

/**
 * Instalar Nodemon
 * npm install -g nodemon
 * 
 * nodemon server.js // En vez de (node server.js)
 * 
 */