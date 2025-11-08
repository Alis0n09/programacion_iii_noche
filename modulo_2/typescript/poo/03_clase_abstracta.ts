abstract class Animal {
    abstract hacerSonido(): void;

    dormir(): void {
        console.log("Zzzzzzz...");
    }
}
class Perro extends Animal {
    hacerSonido(): void {
        console.log("Guau Guau");
    }
}

const doggy = new Perro();
doggy.hacerSonido();
doggy.dormir();