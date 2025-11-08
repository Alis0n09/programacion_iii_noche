abstract class CuentaBase {
    private saldo: number=0;
    abstract operar(): void;

    modificarSaldo(cantidad: number): void {
        this.saldo = cantidad;
    }
    obtenerSaldo(): number {
        return this.saldo;
    }
}
class CuentaAhorro extends CuentaBase {
    operar(): void {
        console.log("Operando desde cuenta de ahorros");
    }
}

class CuentaCorriente extends CuentaBase {
    operar(): void {
        console.log("Operando desde cuenta corriente");
    }
}

const cuenta1 = new CuentaAhorro();
cuenta1.modificarSaldo(1000);
cuenta1.operar();
console.log("Saldo cuenta de ahorro:", cuenta1.obtenerSaldo());