console.log("CICLOS O BUCLES EN JAVASCRIPT");
console.log("USANDO WHILE");
let i= 1;
while(i<=3){
    console.log("Contador: ", i); 
    i++;
}

let valores = [3,4,-2,4,5];
let indice = 0;

while (valores[index]>0){
    console.log("Valor valido: ", valores[indice]);
    indice++;
}

let n=1;
while(n<10){
    if(n%2!==0){
        console.log("Numero impar: ", n);
    }
    n++;
}

let x=1;
do{
    console.log("Numero: ", x);
    x++;                
} while(x<=5);


let contador=1;
suma=0;
do{
    suma += contador;
    contador++;
} while(contador<=5);
console.log("La suma es: ", suma);

let reduccion = 1;
do {
    console.log("Reduccion: ", reduccion);
    reduccion --;
} while(reduccion >=0);


let tabladel6 = 6;
let multiplicador = 1;
do{
    let resultado = tabladel6 * multiplicador;
    console.log(`${tabladel6} x ${multiplicador} = ${resultado}`);
    console.log(tabladel6 + " x " + multiplicador + " = " + resultado);
    multiplicador++;
} while(multiplicador <=10);







