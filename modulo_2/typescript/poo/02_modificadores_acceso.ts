class Libro{
    public titulo: string;
    private autor: string;
    protected cota: string = '1233232233';
    constructor(titulo: string, autor: string){ 
        this.titulo = titulo;
        this.autor = autor;
    }
    getAutor(): string{
        return this.autor;
    }
    setAutor(autor: string): void{
        this.autor = autor;
    }
    getcota(): string{
        return this.cota;
    }
    
}

const LibroHostoriaQuito = new Libro("Historia de Quito", "Pedro Pérez");
console.log("Titulo del libro:", LibroHostoriaQuito.titulo);
console.log("Autor del libro:", LibroHostoriaQuito.getAutor());
console.log("Modificando autor...", LibroHostoriaQuito.setAutor("Lius Lozano"));
console.log("Cota del libro:", LibroHostoriaQuito.getcota()); 
console.log("Autor", LibroHostoriaQuito.getAutor());
