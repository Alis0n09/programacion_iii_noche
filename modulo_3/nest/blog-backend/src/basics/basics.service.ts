import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
  myFirstGet(): object {
    return {
      service: 'Blog Backend API',
      function: 'basics get',
      message: 'My new get',
    };
  }

  mySecondGet(): object {
    return {
      service: 'Blog Backend API',
      function: 'basics second get',
      message: 'My second get',
    };
  }

  functionWithParameter(parameter: string): object {
    return {
      service: 'Blog Backend API',
      function: 'basic get with parameter',
      message: 'Función con parámetro',
      parameter: parameter,
    };
  }

  functionWithPost(data: any): object {
    return {
      service: 'Blog Backend API',
      function: 'basic post with parameter', // Cambiado para reflejar POST
      message: 'Función con datos recibidos por POST',
      data: data,
    };
  }
  updateWithPut(parameter: string,
    body: object
  ): object {
    return{
        service:'Blag Backend API',
        function:'basics peticion put',
        message:'Funcion con parametro',
        parameter:parameter,
        body: body
    }
  }
  updateWithPatch(parameter: string,
    body: object
  ): object {
    return{
        service:'Blag Backend API',
        function:'basics peticion patch',
        message:'Funcion con parametro',
        parameter:parameter,
        body: body
    }
  }
  delete(parameter: string) : object {
    return{
        service:'Blag Backend API',
        function:'basics peticion Delete',
        message:'Funcion para borrar',
        parameter:parameter,
    };
  }
  licencia(body: any): object {
    let respuesta: string;
    if (body.edad > 17 && body.licencia) {
      respuesta = 'Puede conducir';
    } else if (body.edad > 17) {
      respuesta = 'Debe sacar licencia';
    } else {
      respuesta = 'es menor de edad';
    }
    return {
      service: 'Blog Backend API',
      function: 'basics peticion Delete',
      message: 'Funcion para borrar',
      parameter: body,
      respuesta: respuesta,
    };
    
  }
areaTriangulo(parameter:any): object{
    const area = (parameter.base*parameter.altura)/2;
    return{
      service: 'Blog Backend API',
      function: 'basics peticion post',
      message: 'Funcion por parametro',
      parameter: parameter,
      area: area,
    }
  }
  calcularMayor(parameter:any): object{
    let mayor:number;
    if(parameter.valor1>parameter.valor2){
      mayor= parameter.valor1;
    }else{
      mayor=parameter.valor2;
    }if(parameter.valor3>mayor){
      mayor=parameter.valor3
    }
    return {
      service: 'Blog Backend API',
      function: 'basics peticion post',
      message: 'Funcion por parametro',
      parameter: parameter,
      mayor: mayor,
    }
  }
  calcularPromedio(nota1: number, nota2: number, nota3: number): object {
    const promedio = (nota1 + nota2 + nota3) / 3;
    return {
      service: 'Blog Backend API',
      function: 'basics peticion get',
      message: 'Funcion por parametro',
      nota1: nota1,
      nota2: nota2,
      nota3: nota3,
      promedio: promedio,
    };  
  }
  verificarCredito(edad: number, ingresos: number, historialCrediticio: string): object {
    let elegible: string;
    if (edad >= 21 && ingresos >= 30000 && historialCrediticio === 'bueno') {
      elegible = 'Elegible para crédito';
    } else {
      elegible = 'No elegible para crédito';
    }
    return {
      service: 'Blog Backend API',
      function: 'basics peticion get',
      message: 'Funcion para verificar credito',
      edad: edad,
      ingresos: ingresos,
      historialCrediticio: historialCrediticio,
      elegible: elegible,
    };
  } 
}