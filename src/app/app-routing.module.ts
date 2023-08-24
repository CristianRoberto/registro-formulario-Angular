import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Agrega la nueva ruta
  { path: 'nueva-ruta', component: DetallesComponent }, // Agrega la nueva ruta

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
