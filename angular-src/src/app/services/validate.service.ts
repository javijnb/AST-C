import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(producto){
    let mensaje = "";
    if(producto.ID == undefined || producto.nombre == undefined || producto.marca == undefined || producto.descripcion == undefined || producto.seccion == undefined || producto.precio == undefined|| producto.cantidad == undefined|| producto.fecha_caducidad == undefined || producto.procedencia == undefined){
      mensaje = "Faltan campos por rellenar.";
      return mensaje;
    }

    const regexcant = /^[0-9]*$/; //Regexp para comprobar si un string solo tiene numeros,
    const regexprecio = /^[0-9].*$/;
    const regexfecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if(!regexprecio.test(producto.precio)){
      mensaje = "Precio no es un numero."
      return mensaje;
    }

    if(!regexcant.test(producto.cantidad)){
      mensaje = "Cantidad no es un numero."
      return mensaje;
    }

    if(!regexfecha.test(producto.fecha_caducidad)){
      mensaje = "Formato de fecha no valido."
      return mensaje;
    }

  
      return "correcto";
  }

  //Podemos anadir mas validaciones

}
