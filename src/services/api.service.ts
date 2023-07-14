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
  }
  



/*

  // HttpClient API get() method => Fetch students list
  getStudents(): Observable<Student> {
    return this.http.get<Student>(this.apiURL + '/students')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch Student
  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.apiURL + '/students/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create Student
  createStudent(_student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiURL + '/students', JSON.stringify(_student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update Student
  updateStudent(id: string, _student:Student): Observable<Student> {
    return this.http.put<Student>(this.apiURL + '/students/' + id, JSON.stringify(_student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete Student
  deleteStudent(id: string){
    return this.http.delete<Student>(this.apiURL + '/students/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
*/