import { Component, OnInit } from '@angular/core';
import { ConsultarService } from '../../services/consultar.service';
import  Swal  from 'sweetalert2';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  ID_producto: String;

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const eliminar_producto= {

      ID: this.ID_producto

    }

    const URL = "http://localhost:9000/admin/eliminar";

    this.registerService.register(eliminar_producto,URL).subscribe((data) => {
      console.log("data: "+data);
      if(data.success){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto eliminado',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          
        });
      }else{
        Swal.fire({
          icon: 'error',
          text: data.msg,

        })
      }
    });
    
  }
}