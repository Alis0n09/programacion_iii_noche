abstract class RegistroAccesos2 {
    abstract registrarEntrada(): void;

    reposo1(): void {
        console.log("Sistema en modo reposo...");
    }
}
class Visitantes3 extends RegistroAccesos2 {
    registrarEntrada(): void {
        console.log("Visitante registrado en el sistema");
    }
}

const ingreso2 = new Visitantes3();
ingreso2.registrarEntrada();
ingreso2.reposo1();