abstract class CuentasBase {
    private saldo: number=0;
    abstract operar(): void;

    modificarSaldo(cantidad: number): void {
        this.saldo = cantidad;
    }
    obtenerSaldo(): number {
        return this.saldo;
    }
}
class CuentasAhorro extends CuentasBase {
    operar(): void {
        console.log("Registrando entrada en garita principal");
    }
}

class CuentasCorriente extends CuentasBase {
    operar(): void {
        console.log("Registrando salida de vehículo desde la garita");
    }
}

const cuenta2 = new CuentasAhorro();
cuenta2.operar();
cuenta2.operar();
console.log("Registros asociados a la entrada:", cuenta2.operar());