export class Vehiculo{
    public marca: string;
    constructor(marca: string){
        this.marca = marca;
    }
    moverse(): void{
        console.log(this.marca, "ingresó por la garita.");
    }
}
class Moto extends Vehiculo{};
const miMoto = new Moto("Moto Alivida");
miMoto.moverse();
