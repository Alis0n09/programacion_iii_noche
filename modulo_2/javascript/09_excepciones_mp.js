try {
    const user = JSON.parse('{ "nombre": "Guardia Luis", "turno": "Nocturno" }');
} catch (e) {
    console.log("Error al procesar datos del guardia:", e.message);
}

try {
    console.log("Intentando validar acceso al sistema...");
    throw new Error("No se pudo verificar la credencial del guardia");
}catch (e) {
    console.log("Error en la validación:", e.message);
}finally {
    console.log("Finalizó el intento de validación de acceso.");
}
