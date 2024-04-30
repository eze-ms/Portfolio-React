<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = limpiarEntrada($_POST["name"]);
    $correo = limpiarEntrada($_POST["email"]);
    $asunto = limpiarEntrada($_POST["subject"]);
    $mensaje = limpiarEntrada($_POST["message"]);
    
    // Validar el correo electrónico en el lado del servidor
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        die("El correo electrónico proporcionado no es válido");
    }
    
    // Configurar los destinatarios del correo
    $destinatarios = array("macchiezequiel@gmail.com");

    // Construir el cuerpo del correo
    $cuerpoCorreo = "Nombre: $nombre\n";
    $cuerpoCorreo .= "Correo electrónico: $correo\n";
    $cuerpoCorreo .= "Asunto: $asunto\n";
    $cuerpoCorreo .= "Mensaje:\n$mensaje";

    // Establecer los encabezados para especificar la codificación UTF-8
    $cabeceras = "MIME-Version: 1.0" . "\r\n";
    $cabeceras .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
    $cabeceras .= "From: $nombre <$correo>" . "\r\n"; // Añadir el nombre y el correo del remitente

    // Enviar el correo a los destinatarios especificados
    $envio_correcto = true;
    foreach ($destinatarios as $destinatario) {
        // Enviar el correo con los encabezados configurados
        if (!mail($destinatario, $asunto, $cuerpoCorreo, $cabeceras)) {
            $envio_correcto = false;
            break;
        }
    }

    if ($envio_correcto) {
        // Si el correo se envió correctamente, mostrar un mensaje de éxito
        echo "¡El mensaje se ha enviado correctamente! En breve nos pondremos en contacto contigo.";
    } else {
        // Si hubo un problema al enviar el correo, mostrar un mensaje de error
        echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
} else {
    // Si la solicitud no es de tipo POST, mostrar un mensaje de error
    echo "Acceso no autorizado";
}

// Función para limpiar la entrada de datos
function limpiarEntrada($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
