import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  // Render proporciona el PORT automáticamente

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración SMTP directa (evita problemas de encoding en .env)
const SMTP_CONFIG = {
  host: 'mail.voltiaelectricaldiagnostic.com',
  port: 465,
  secure: true,
  auth: {
    user: 'web@voltiaelectricaldiagnostic.com',
    pass: 'Voltia2025'
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1'
  }
};

const EMAIL_CONFIG = {
  from: 'web@voltiaelectricaldiagnostic.com',
  to: 'info@voltiaelectricaldiagnostic.com'
};

// Configurar transportador de Nodemailer
const transporter = nodemailer.createTransport(SMTP_CONFIG);

// Verificar la configuración del transportador
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Error en la configuración SMTP:', error);
  } else {
    console.log('✅ Servidor SMTP listo para enviar emails');
  }
});

// Ruta para enviar email
app.post('/api/send-email', async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: 'Por favor complete todos los campos obligatorios'
      });
    }

    // Configurar opciones del email
    const mailOptions = {
      from: `"${nombre}" <${EMAIL_CONFIG.from}>`,
      to: EMAIL_CONFIG.to,
      replyTo: email,
      subject: `Nuevo mensaje de contacto desde Voltia - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">Voltia Electrical Diagnostic</h1>
          </div>

          <div style="padding: 30px; background-color: #f9fafb;">
            <h2 style="color: #1e40af; margin-top: 0;">Nuevo mensaje de contacto</h2>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Nombre:</strong></p>
              <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">${nombre}</p>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Email:</strong></p>
              <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
              </p>
            </div>

            ${telefono ? `
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Teléfono:</strong></p>
              <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">${telefono}</p>
            </div>
            ` : ''}

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Mensaje:</strong></p>
              <p style="margin: 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px; white-space: pre-wrap;">${mensaje}</p>
            </div>
          </div>

          <div style="padding: 20px; background-color: #f3f4f6; border-radius: 0 0 10px 10px; text-align: center; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de voltiaelectricaldiagnostic.com</p>
            <p style="margin: 5px 0 0 0;">Fecha: ${new Date().toLocaleString('es-AR')}</p>
          </div>
        </div>
      `,
      text: `
        Nuevo mensaje de contacto

        Nombre: ${nombre}
        Email: ${email}
        ${telefono ? `Teléfono: ${telefono}` : ''}

        Mensaje:
        ${mensaje}

        ---
        Este mensaje fue enviado desde el formulario de contacto de voltiaelectricaldiagnostic.com
        Fecha: ${new Date().toLocaleString('es-AR')}
      `
    };

    // Enviar email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email enviado:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Email enviado correctamente',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Error al enviar email:', error);
    res.status(500).json({
      success: false,
      message: 'Error al enviar el email. Por favor intente nuevamente.',
      error: error.message
    });
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor backend funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
  console.log(`📧 SMTP configurado: ${SMTP_CONFIG.host}:${SMTP_CONFIG.port}`);
  console.log(`📨 Emails se enviarán desde: ${EMAIL_CONFIG.from} hacia: ${EMAIL_CONFIG.to}`);
});
