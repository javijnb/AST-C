import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin:boolean;
  cliente:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(usuario){

    if(usuario == "admin"){
      this.admin = true;
      this.cliente =false;
    }else if(usuario == "cliente"){
      this.admin= false;
      this.cliente = true;
    }
  }
  
}
