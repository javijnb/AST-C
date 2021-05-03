import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {RegisterService} from '../../services/register.service';
import  Swal  from 'sweetalert2';
import { FormsModule, NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ID: String;
  nombre: String;
  marca: String;
  descripcion: String;
  seccion: String;
  precio: Number;
  cantidad: Number;
  fecha_caducidad: String;
  procedencia: String;

  constructor(private validateService: ValidateService,private registerService: RegisterService) { //Anadimos cada vez que utilicemos un servicio

  } 

  ngOnInit(): void {
  }

  onSubmit(MyForm: NgForm){
    const producto= {

      ID: this.ID,
      nombre: this.nombre,
      marca: this.marca,
      descripcion: this.descripcion,
      seccion: this.seccion,
      precio: this.precio,
      cantidad: this.cantidad,
      fecha_caducidad: this.fecha_caducidad,
      procedencia: this.procedencia
      
    }
    let mensaje = "";

    //Campos requeridos
    mensaje = this.validateService.validateRegister(producto);
    console.log(mensaje);
    if(mensaje!="correcto"){
      //console.log("Campos sin cubrir");
      Swal.fire({
        icon: 'error',
        //title: 'Oops...',
        text: mensaje,
        //footer: '<a href>Why do I have this issue?</a>'
      })
      return false;
    }

    //console.log(this.registerService.registerBook(book));    

    this.registerService.register(producto, "http://localhost:9000/admin/registro").subscribe(data => {
      if(data.success){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Envio realizado',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          MyForm.reset();
        })
      }else{
        Swal.fire({
          icon: 'error',
          //title: 'Oops...',
          text: data.msg,
          //footer: '<a href>Why do I have this issue?</a>'
        })
      }
    })
     
    

  }

  
}

