document.getElementById("calcular").addEventListener("click", function () {
    
  
    const cantidadVehiculos = Number(document.getElementById("valor_cuenta").value);
    const tipoAcceso = document.getElementById("propina").value;
    const acompanantes = Number(document.getElementById("personas").value);

    const resultadoDiv = document.getElementById("resultado");


    if (cantidadVehiculos <= 0 || isNaN(cantidadVehiculos)) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Ingresa una cantidad válida de vehículos.</p>";
        return;
    }

    if (acompanantes < 0 || isNaN(acompanantes)) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Número de acompañantes inválido.</p>";
        return;
    }

    let mensajeTipo = "";

    if (tipoAcceso === "Residentes") {
        mensajeTipo = "Ingreso autorizado: vehículo de RESIDENTE.";
    } else if (tipoAcceso === "Visitantes") {
        mensajeTipo = "Ingreso registrado: vehículo de VISITANTE.";
    } else if (tipoAcceso === "Delivery") {
        mensajeTipo = "Ingreso controlado: vehículo de DELIVERY.";
    }


    const mensajeFinal = `
        <h3>Registro realizado</h3>
        <p><strong>Vehículos:</strong> ${cantidadVehiculos}</p>
        <p><strong>Tipo de acceso:</strong> ${tipoAcceso}</p>
        <p><strong>Acompañantes:</strong> ${acompanantes}</p>
        <p>${mensajeTipo}</p>
    `;

    resultadoDiv.innerHTML = mensajeFinal;
});
