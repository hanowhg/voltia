import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Probando configuración SMTP...\n');
console.log('Host:', process.env.SMTP_HOST);
console.log('Puerto:', process.env.SMTP_PORT);
console.log('Usuario:', process.env.SMTP_USER);
console.log('Contraseña:', process.env.SMTP_PASS ? '***configurada***' : '❌ NO CONFIGURADA');
console.log('\n');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true,
  logger: true
});

console.log('📧 Verificando conexión SMTP...\n');

transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Error de conexión SMTP:');
    console.log(error);
  } else {
    console.log('✅ Conexión SMTP exitosa!');
    console.log('\n📤 Enviando email de prueba...\n');

    // Enviar email de prueba
    transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Prueba de configuración SMTP - Voltia',
      text: 'Este es un email de prueba. Si lo recibes, la configuración SMTP está funcionando correctamente.',
      html: '<p>Este es un email de prueba.</p><p>Si lo recibes, la configuración SMTP está funcionando correctamente.</p>'
    }, (err, info) => {
      if (err) {
        console.log('❌ Error al enviar email:');
        console.log(err);
      } else {
        console.log('✅ Email enviado exitosamente!');
        console.log('Message ID:', info.messageId);
        console.log('\n✅ Todo está funcionando correctamente!');
      }
      process.exit();
    });
  }
});
