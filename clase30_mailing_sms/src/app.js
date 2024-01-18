import express from 'express'
import nodemailer from 'nodemailer'
import twilio from 'twilio'
import __dirname from './utils.js'

const TWILIO_ACCOUNT_SID = 'ACd5ae84527483081d485342c931ff9787'
const TWILIO_AUTH0_TOKEN = '38ccf3858d6b500843828a5bd0603db9'
const TWILIO_SMS_NUMBER = '+19735005234'

const app = express()
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'r2coderhouse@gmail.com',
        pass: 'glgfytevvwcnusuv' // La que creamos en App Password (Contraseña de Aplicaciones)
    }
})

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH0_TOKEN)

app.get('/sms', async(req, res) => {
    const result = await client.messages.create({
        body: `The Dark Night is my favorite move 🦇`,
        from: TWILIO_SMS_NUMBER,
        to: `+573054004683`
    })

    console.log(result)
    res.send('SMS sent!')
})

app.get('/mail', async (req, res) => {
    const result = await transport.sendMail({
        from: 'r2coderhouse@gmail.com',
        to: 'r2coderhouse@gmail.com',
        subject: 'Bruno Perez Rules !!! 🤘',
        html: `
            <div>
                <h1> The Dark Night </h1>
                <img src="cid:image2" />
            </div>
        `,
        attachments: [
            {
                filename: 'joker.jpg',
                path: __dirname + '/images/joker.jpg',
                cid: 'image1'
            },
            {
                filename: 'batman.jpg',
                path: __dirname + '/images/batman.jpg',
                cid: 'image2'
            }
        ]
    })

    console.log(result)
    res.send(`Email sent! 😎`)
})

app.listen(8080, () => console.log('Running 🏃 ...'))