import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Producto } from '../../../../models/producto';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  private URL = "http://localhost:9000/admin/consultar";

  // headers: HttpHeaders = new HttpHeaders({
  //  'Content-Type': 'application/json'
  // });

  constructor(private http:HttpClient) { }

  getLista(): Observable<any>{

    return this.http.get(this.URL);
    /*let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
    let options = { headers: headers };
    
    //let json = JSON.stringify();
    //console.log(json);

    return this.http.post( this.URL, "", options).pipe(map(res =>(res)));*/

  }

  borrarProducto(id: String) : Observable<any> {
    return this.http.delete(this.URL= this.URL+"/"+id).pipe(map(id=>id));
  }

  filtrarProductos(cadena: String){
    return this.http.get(this.URL= this.URL+"/"+cadena).pipe(map((id=>id) || (nombre=>nombre)));
  }
  
}
