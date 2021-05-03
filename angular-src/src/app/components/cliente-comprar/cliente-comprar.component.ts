import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-cliente-comprar',
  templateUrl: './cliente-comprar.component.html',
  styleUrls: ['./cliente-comprar.component.css']
})
export class ClienteComprarComponent implements OnInit {

  ID_producto:String;
  nombre_producto:String;
  cantidad:Number;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const compra= {

      ID_producto: this.ID_producto,
      nombre_producto: this.nombre_producto,
      cantidad: this.cantidad
    }

    let mensaje = "";


    //console.log(this.registerService.registerBook(book));    

    this.registerService.register(compra, "http://localhost:9000/cliente/comprar").subscribe(data => {
      if(data.success){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Envio realizado',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          icon: 'error',
          text: data.msg,
        })
      }
    })
  

  }
}
