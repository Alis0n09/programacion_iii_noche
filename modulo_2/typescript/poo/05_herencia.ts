export class Vehiculo{
    public marca: string;
    constructor(marca: string){
        this.marca = marca;
    }
    moverse(): void{
        console.log(this.marca, "se está moviendo.");
    }
}
class Moto extends Vehiculo{};
const miMoto = new Moto("Yamaha");
miMoto.moverse();