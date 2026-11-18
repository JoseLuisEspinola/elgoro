const qrContacto = document.getElementById("qr-contacto");
const mensajeQrContacto = document.getElementById("qr-contacto-mensaje");

if (typeof qrcode === "undefined") {
    mensajeQrContacto.textContent = "No se pudo cargar el código QR. Recargá la página para volver a intentar.";
} else {
    const datosContacto = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Goro;;;;",
        "FN:El Goro",
        "TEL;TYPE=CELL,VOICE:+543487360514",
        "ADR;TYPE=WORK:;;Bandera Argentina 200, ruta 193 km 10.5;Escalada, Zárate;Buenos Aires;;Argentina",
        "END:VCARD"
    ].join("\r\n");

    qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
    const codigoQrContacto = qrcode(0, "M");
    codigoQrContacto.addData(datosContacto);
    codigoQrContacto.make();

    const imagenQrContacto = document.createElement("img");
    imagenQrContacto.src = codigoQrContacto.createDataURL(3, 4);
    imagenQrContacto.alt = "Código QR con el teléfono y la dirección de El Goro";
    qrContacto.appendChild(imagenQrContacto);
}
