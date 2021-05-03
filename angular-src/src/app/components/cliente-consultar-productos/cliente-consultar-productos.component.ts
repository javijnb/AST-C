import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-cliente-consultar-productos',
  templateUrl: './cliente-consultar-productos.component.html',
  styleUrls: ['./cliente-consultar-productos.component.css']
})
export class ClienteConsultarProductosComponent implements OnInit {

  IDsearch: String;
  ID:String[] = new Array();
  nombre_producto:String[] = new Array();
  marca:String[] = new Array();
  descripcion:String[] = new Array();
  seccion:String[] = new Array();
  cantidad:number[] = new Array();
  precio:number[] = new Array();
  fecha_caducidad:String[] = new Array();
  procedencia:String[] = new Array();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

    let body;
    let objetos;
    this.registerService.register(body, "http://localhost:9000/cliente/listar").subscribe(data => {

      objetos = data.msg;

      // Recorremos cada elemento compra devuelto y guardamos sus campos en las variables globales
      for (let i = 0; i < objetos.length; i++) {
        this.ID[i] = objetos[i].ID;
        this.cantidad[i] = objetos[i].cantidad;
        this.precio[i] = objetos[i].precio;
        this.nombre_producto[i] = objetos[i].nombre;
        this.marca[i] = objetos[i].marca;
        this.descripcion[i] = objetos[i].descripcion;
        this.seccion[i] = objetos[i].seccion;
        this.fecha_caducidad[i] = objetos[i].fecha_caducidad;
        this.procedencia[i] = objetos[i].procedencia;

      }
      
    })

  }

  onSubmit(){

    console.log("ID de filtrado: ",this.IDsearch);
    console.log("Length: ", this.ID.length);

      for(var i = this.ID.length-1; i >= 0; i--){
        if((this.ID[i]) != (this.IDsearch)){
          this.ID.splice(i,1);
          this.cantidad.splice(i,1);
          this.precio.splice(i,1);
          this.nombre_producto.splice(i,1);
          this.marca.splice(i,1);
          this.descripcion.splice(i,1);
          this.seccion.splice(i,1);
          this.fecha_caducidad.splice(i,1);
          this.procedencia.splice(i,1);
        }
      }

      console.log("Resultado del filtrado: ", this.ID);
     
  }
}