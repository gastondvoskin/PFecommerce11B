const nodemailer = require("nodemailer");
// const { User } = require("../db");
require("dotenv").config();
const { EMAIL_USER, EMAIL_PASS } = process.env;

async function sendEmailWelcome(userEmail) {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        }
    });

    const mailSend = {
        from: EMAIL_PASS,
        to: userEmail,
        subject: "Vianda Express",
        text: "¡Bienvenido a Vianda Express! Gracias por registrarte en nuestra plataforma.",
    };

    transporter.sendMail(mailSend, (error, info) => {
        if (error) {
            console.log("Error al enviar el correo electrónico:", error);
        } else {
            console.log("Correo enviado con éxito", info.response);
        };
    });

    try {
        const info = await transporter.sendMail(mailSend);
        console.log("Correo enviado con éxito", info.response);
    } catch (error) {
        console.log("Error al enviar el correo electrónico:", error);
    };
};

module.exports = sendEmailWelcome;

