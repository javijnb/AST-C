import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-cliente-elim-compra',
  templateUrl: './cliente-elim-compra.component.html',
  styleUrls: ['./cliente-elim-compra.component.css']
})
export class ClienteElimCompraComponent implements OnInit {

  ID_compra: String;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const cancel_compra= {

      ID: this.ID_compra

    }


    this.registerService.register(cancel_compra, "http://localhost:9000/cliente/cancelarcompra").subscribe(data => {
        if(data.success){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra eliminada',
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
