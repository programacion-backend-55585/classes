import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import __dirname from './utils/index.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUiExpress from 'swagger-ui-express';

const app = express();
const PORT = process.env.PORT||8080;
mongoose.connect(`mongodb://admin:admin@127.0.0.1:27017`, {
  dbName: 'clase39_55'
})

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: '🐶 Documentacion de Mascotas 😺',
            description: 'Este proyecto no es de pizzas, es de mascotas'
        }
    },
    apis: [`${__dirname}/../docs/**/*.yaml`]
}
const specs = swaggerJSDoc(swaggerOptions)
app.use('/apidocs', SwaggerUiExpress.serve, SwaggerUiExpress.setup(specs))


app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
