import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Probando múltiples configuraciones SMTP...\n');
console.log('Host:', process.env.SMTP_HOST);
console.log('Usuario:', process.env.SMTP_USER);
console.log('\n');

// Intentar con diferentes configuraciones
const configs = [
  {
    name: 'Config 1: Puerto 587 con STARTTLS',
    config: {
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    }
  },
  {
    name: 'Config 2: Puerto 465 SSL con auth type LOGIN',
    config: {
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        type: 'LOGIN',
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
      }
    }
  },
  {
    name: 'Config 3: Puerto 2525 (alternativo)',
    config: {
      host: process.env.SMTP_HOST,
      port: 2525,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    }
  }
];

async function testConfig(configObj) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Probando: ${configObj.name}`);
  console.log('='.repeat(60));

  const transporter = nodemailer.createTransport(configObj.config);

  return new Promise((resolve) => {
    transporter.verify((error, success) => {
      if (error) {
        console.log('❌ Error:', error.message);
        resolve({ success: false, config: configObj });
      } else {
        console.log('✅ ¡Conexión SMTP exitosa!');

        // Intentar enviar email de prueba
        console.log('\n📤 Enviando email de prueba...');
        transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO,
          subject: 'Prueba SMTP - Voltia',
          text: 'Este es un email de prueba. La configuración SMTP funciona correctamente.',
          html: '<p>Este es un email de prueba.</p><p><strong>La configuración SMTP funciona correctamente.</strong></p>'
        }, (err, info) => {
          if (err) {
            console.log('❌ Error al enviar:', err.message);
            resolve({ success: false, config: configObj });
          } else {
            console.log('✅ ¡Email enviado exitosamente!');
            console.log('Message ID:', info.messageId);
            resolve({ success: true, config: configObj });
          }
        });
      }
    });
  });
}

async function testAll() {
  let foundWorking = false;

  for (const configObj of configs) {
    const result = await testConfig(configObj);
    if (result.success) {
      console.log('\n\n🎉🎉🎉 ¡CONFIGURACIÓN EXITOSA ENCONTRADA! 🎉🎉🎉\n');
      console.log('Usa esta configuración:');
      console.log(JSON.stringify(result.config.config, null, 2));
      foundWorking = true;
      break;
    }
    // Esperar un poco entre intentos
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  if (!foundWorking) {
    console.log('\n\n❌ Ninguna configuración funcionó.');
    console.log('Por favor verifica:');
    console.log('1. Que la contraseña sea correcta');
    console.log('2. Que la cuenta de email esté activa');
    console.log('3. Contacta con el soporte de SiteGround para verificar la configuración SMTP');
  }

  process.exit();
}

testAll();
