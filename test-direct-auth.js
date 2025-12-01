import nodemailer from 'nodemailer';

console.log('🔍 Probando autenticación directa sin .env...\n');

// Configuración directa en código para evitar problemas de escape
const transporter = nodemailer.createTransport({
  host: 'mail.voltiaelectricaldiagnostic.com',
  port: 465,
  secure: true,
  auth: {
    user: 'web@voltiaelectricaldiagnostic.com',
    pass: 'Voltia2025#'
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1'
  },
  debug: true,
  logger: true
});

console.log('📧 Verificando conexión SMTP...\n');

transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Error de conexión:');
    console.log(error);

    // Intentar con la contraseña entre comillas
    console.log('\n\n🔄 Intentando configuración alternativa...\n');

    const transporter2 = nodemailer.createTransport({
      host: 'mail.voltiaelectricaldiagnostic.com',
      port: 465,
      secure: true,
      authMethod: 'PLAIN',
      auth: {
        user: 'web@voltiaelectricaldiagnostic.com',
        pass: String('Voltia2025#')
      },
      tls: {
        rejectUnauthorized: false,
        servername: 'mail.voltiaelectricaldiagnostic.com'
      },
      debug: true,
      logger: true
    });

    transporter2.verify((error2, success2) => {
      if (error2) {
        console.log('❌ También falló la segunda configuración:');
        console.log(error2);
        process.exit(1);
      } else {
        console.log('✅ ¡Conexión exitosa con la segunda configuración!');
        testSend(transporter2);
      }
    });
  } else {
    console.log('✅ ¡Conexión SMTP exitosa!');
    testSend(transporter);
  }
});

function testSend(transporter) {
  console.log('\n📤 Enviando email de prueba...\n');

  transporter.sendMail({
    from: 'web@voltiaelectricaldiagnostic.com',
    to: 'info@voltiaelectricaldiagnostic.com',
    subject: 'Prueba de configuración SMTP - Voltia',
    text: 'Este es un email de prueba. La configuración SMTP funciona correctamente.',
    html: '<p>Este es un email de prueba.</p><p><strong>La configuración SMTP funciona correctamente.</strong></p>'
  }, (err, info) => {
    if (err) {
      console.log('❌ Error al enviar email:');
      console.log(err);
    } else {
      console.log('✅ ¡Email enviado exitosamente!');
      console.log('Message ID:', info.messageId);
      console.log('\n🎉 Todo funciona correctamente!');
    }
    process.exit();
  });
}
