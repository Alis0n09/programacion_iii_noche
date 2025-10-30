try {
    const user = JSON.parse('{ "nombre": "Pedro", "edad": 30 }');
} catch (e) {
    console.log("Error detectado:", e.message);
}

try {
    console.log("Intentando abrir un archivo...");
    throw new Error("No se pudo abrir el archivo");
}catch (e) {
    console.log("Error al abrir el archivo:", e.message);
}finally {
    console.log("Finalizo el intento de abrir archivo.");
}