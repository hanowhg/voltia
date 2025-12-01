<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Manejar preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit();
}

// Leer datos JSON del request
$data = json_decode(file_get_contents('php://input'), true);

// Validar campos requeridos
if (empty($data['nombre']) || empty($data['email']) || empty($data['tipoServicio']) || empty($data['tension']) || empty($data['longitud'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Por favor complete todos los campos obligatorios'
    ]);
    exit();
}

$nombre = htmlspecialchars($data['nombre']);
$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$telefono = isset($data['telefono']) ? htmlspecialchars($data['telefono']) : '';
$tipoServicio = htmlspecialchars($data['tipoServicio']);
$tension = htmlspecialchars($data['tension']);
$aislacion = isset($data['aislacion']) ? htmlspecialchars($data['aislacion']) : '';
$longitud = htmlspecialchars($data['longitud']);
$comentarios = isset($data['comentarios']) ? htmlspecialchars($data['comentarios']) : '';
$mensaje = isset($data['mensaje']) ? htmlspecialchars($data['mensaje']) : '';

// Validar email
if (!$email) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Email inválido'
    ]);
    exit();
}

// Configuración del email
$to = 'info@voltiaelectricaldiagnostic.com';
$subject = 'Nuevo mensaje de contacto desde Voltia - ' . $nombre;
$from = 'web@voltiaelectricaldiagnostic.com';
$replyTo = $email;

// Construir el mensaje HTML
$htmlMessage = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">Voltia Electrical Diagnostic</h1>
        </div>

        <div style="padding: 30px; background-color: #f9fafb;">
            <h2 style="color: #1e40af; margin-top: 0;">Nuevo mensaje de contacto</h2>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Nombre:</strong></p>
                <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">' . $nombre . '</p>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Email:</strong></p>
                <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">
                    <a href="mailto:' . $email . '" style="color: #3b82f6; text-decoration: none;">' . $email . '</a>
                </p>
            </div>';

if (!empty($telefono)) {
    $htmlMessage .= '
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Teléfono:</strong></p>
                <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">' . $telefono . '</p>
            </div>';
}

$htmlMessage .= '
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Tipo de Servicio:</strong></p>
                <p style="margin: 0; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">' . $tipoServicio . '</p>
            </div>

            <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #0284c7;">
                <h3 style="color: #0369a1; margin-top: 0; margin-bottom: 15px;">Especificaciones del Cable</h3>

                <div style="background-color: white; padding: 15px; border-radius: 5px; margin-bottom: 10px;">
                    <p style="margin: 0 0 5px 0;"><strong style="color: #1e40af;">Tensión:</strong></p>
                    <p style="margin: 0;">' . $tension . ' kV</p>
                </div>';

if (!empty($aislacion)) {
    $htmlMessage .= '
                <div style="background-color: white; padding: 15px; border-radius: 5px; margin-bottom: 10px;">
                    <p style="margin: 0 0 5px 0;"><strong style="color: #1e40af;">Aislación:</strong></p>
                    <p style="margin: 0;">' . $aislacion . '</p>
                </div>';
}

$htmlMessage .= '
                <div style="background-color: white; padding: 15px; border-radius: 5px;">
                    <p style="margin: 0 0 5px 0;"><strong style="color: #1e40af;">Longitud:</strong></p>
                    <p style="margin: 0;">' . $longitud . ' km</p>
                </div>
            </div>';

if (!empty($comentarios)) {
    $htmlMessage .= '
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #1e40af;">Comentarios Adicionales:</strong></p>
                <p style="margin: 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px; white-space: pre-wrap;">' . nl2br($comentarios) . '</p>
            </div>';
}

$htmlMessage .= '
        </div>

        <div style="padding: 20px; background-color: #f3f4f6; border-radius: 0 0 10px 10px; text-align: center; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de voltiaelectricaldiagnostic.com</p>
            <p style="margin: 5px 0 0 0;">Fecha: ' . date('d/m/Y H:i:s') . '</p>
        </div>
    </div>
</body>
</html>
';

// Mensaje en texto plano
$textMessage = "Nuevo mensaje de contacto\n\n";
$textMessage .= "Nombre: $nombre\n";
$textMessage .= "Email: $email\n";
if (!empty($telefono)) {
    $textMessage .= "Teléfono: $telefono\n";
}
$textMessage .= "\n--- SERVICIO REQUERIDO ---\n";
$textMessage .= "Tipo de Servicio: $tipoServicio\n\n";
$textMessage .= "--- ESPECIFICACIONES DEL CABLE ---\n";
$textMessage .= "Tensión: $tension kV\n";
if (!empty($aislacion)) {
    $textMessage .= "Aislación: $aislacion\n";
}
$textMessage .= "Longitud: $longitud km\n";
if (!empty($comentarios)) {
    $textMessage .= "\n--- COMENTARIOS ADICIONALES ---\n";
    $textMessage .= "$comentarios\n";
}
$textMessage .= "\n---\n";
$textMessage .= "Este mensaje fue enviado desde el formulario de contacto de voltiaelectricaldiagnostic.com\n";
$textMessage .= "Fecha: " . date('d/m/Y H:i:s');

// Headers del email
$headers = array(
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: "' . $nombre . '" <' . $from . '>',
    'Reply-To: ' . $replyTo,
    'X-Mailer: PHP/' . phpversion()
);

// Enviar email
$success = mail($to, $subject, $htmlMessage, implode("\r\n", $headers));

if ($success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email enviado correctamente'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error al enviar el email. Por favor intente nuevamente.'
    ]);
}
?>
