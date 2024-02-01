import express from 'express'
import { addLogger } from './utils/logger.js'

const app = express()
app.use(addLogger)

app.get('/test', (req, res) => {

    // req.logger.silly('silly')
    req.logger.debug('debug')
    // req.logger.verbose('Verbise')
    // req.logger.http('This is for http')
    req.logger.info('R2 rocks !! (Info)')
    // req.logger.warn('WARNING')
    req.logger.warning('WARNING')
    req.logger.error('Erros ')
    req.logger.fatal('Fatal ')

    res.send('Todo ok')
})

app.get('/', (req, res) => res.send('Logger Testing'))
app.post('/', (req, res) => res.send('Logger Testing by POSt'))

app.listen(8080)