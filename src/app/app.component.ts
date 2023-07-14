import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Requerimiento } from 'src/models/requerimiento';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onAddMascota(arg0: any) {
throw new Error('Method not implemented.');
}
  title = 'Gilces';

  requerimeinto: Requerimiento[] = [];
  
  loginForm: FormGroup;


  constructor(private service: ApiService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      valorRenta: ['', Validators.required]
    });
    this.inicializarForm();
  }

  ngOnInit(): void {
    this.obtenerRequerimiento();
    
  }

  obtenerRequerimiento() {
    this.service.obtenerRequerimiento().subscribe((dat) => {
      this.requerimeinto = dat;
    });
  }

  inicializarForm() {
    this.loginForm = this.fb.group({
      cantidad_bultos: ['', Validators.required],
      cantidad_contenedores_unidades: ['', Validators.required],
      tipo_carga: ['', Validators.required],
      tipo_contenedor: ['', Validators.required],
      deposito_devolucion_registro_vacio: [''],
      dimensiones: ['', Validators.required],
      direccion_bodega: ['', Validators.required]
    });
  }


  grabar() {
    let req = new Requerimiento(this.loginForm);
    this.service.crearRequerimiento(req).subscribe((dat) => {
      this.obtenerRequerimiento();
    })
  }


}



