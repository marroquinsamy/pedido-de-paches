const { Router } = require('express')
const nodemailer = require('nodemailer')
const router = Router()

router.post('/send-email', async (req, res) => {
    const { name, phone, address, quantity, spicy, observation } = req.body
    contentHTML = `
        
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
        to: 'samy23033@gmail.com',
        subject: 'Pedido de paches',
        // html: contentHTML
        text: 'Formulario leído'
    })

    console.log('Message sent', info.messageId)
    res.redirect('/success.html')
})

module.exports = router;