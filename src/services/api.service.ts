import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Requerimiento } from 'src/models/requerimiento';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlApi?: string = "https://localhost:7240/api/Requerimiento";
 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerRequerimiento();
  }

  obtenerRequerimiento(): Observable<Requerimiento[]> {
    const endpoint = `${this.urlApi}/Lista/`;
    return this.http.get<Requerimiento[]>(endpoint, {}).pipe(
      tap(ret => {
        console.log(ret)
      })
    );
  }

//Servicio para crear un nuevo requerimiento metodo post
  crearRequerimiento(req: any): Observable<any> {
    console.table(JSON.stringify(req));
    const endpoint = `${this.urlApi}/Guardar/`;
    return this.http.post<any>(endpoint, req).pipe(
      tap(ret => {
        console.log('correcto');
        let p = 0;
      })
    );
  }

    // HttpClient API delete() method => Delete 
  

    deleteRequerimiento(id: any): Observable<void> {
    const url = `${this.urlApi}/Eliminar/${id}`; // Cambia la URL según tu API
    return this.http.delete<void>(url);
  }

  actualizarRequerimiento(id: number, requerimiento: Requerimiento): Observable<any> {
    const url = `${this.urlApi}/Editar/`; // Ajusta la URL según tu API
    return this.http.put(url, requerimiento);
  }
}