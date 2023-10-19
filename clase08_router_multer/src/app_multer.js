import express from 'express'
import multer from 'multer'

const app = express()

app.use(express.json())
app.use('/static', express.static('./src/public'))

// Configuracion Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/public/') // DOnde vamops a guardar los archivos
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname ) // Como se llaman los arhcivos
    }
})
const uploader = multer({ storage })

app.post('/',  uploader.single('file'), (req, res) => {
    if(!req.file) {
        return res.status(500).send('No file')
    }

    console.log(req.file)

    res.send('File uploaded!')
})


app.listen(8080)