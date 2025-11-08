import { Vehiculo } from "./05_herencia";

class Camion extends Vehiculo{
    capacidadCarga: number=0;
    setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    };
    getcapacidad(): number {
        return this.capacidadCarga;
    }
};
const miCamion = new Camion("Ford");
miCamion.setCapacidadCarga(5000);
console.log("Capacidad", miCamion.getcapacidad(),"kg");

