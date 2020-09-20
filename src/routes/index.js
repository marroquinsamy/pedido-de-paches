const { Router } = require('express')
const nodemailer = require('nodemailer')
const router = Router()

function idGenerator(name) {
    let id = ''
    const date = new Date()
    name = name.trim().replace(/[^a-zA-Z]/g,'S');
    
    id += (date.getMonth() + 1) + name[0].toUpperCase() + date.getSeconds() + date.getDate() + name.slice(-1).toUpperCase()
    return id
}

router.post('/send-email', async (req, res) => {
    const { name, phone, address, quantity, spicy, observation } = req.body
    id = idGenerator(req.body.name)
    const date = new Date().toString()
    
    const contentHTML = `
        <h1>Pedido de paches</h1>
        <h2>ID del pedido: ${id}</h2>
        <p>Fecha: ${date}</p>
        <ul>
            <li>Nombre: ${req.body.name}</li>
            <li>Teléfono: ${req.body.phone}</li>
            <li>Dirección: ${req.body.address}</li>
            <li>Cantidad: ${req.body.quantity}</li>
            <li>Total: Q${req.body.quantity * 10}</li>
            <li>Picantes: ${(typeof req.body.spicy === 'undefined') ? 'No' : 'Sí'}</li>
            <li>Comentario: ${observation}</li>
        </ul>
    `

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        }
    })

    const info = await transporter.sendMail({
        from: '"Samuel Marroquín G." <samy23033@gmail.com>',
        to: 'jancarlogalvez1234@gmail.com',
        subject: `Pedido de paches, ${id}`,
        html: contentHTML
    })

    console.log('Message sent', info.messageId)
    res.redirect(`/success.html?id=${id}`)
})

module.exports = router;