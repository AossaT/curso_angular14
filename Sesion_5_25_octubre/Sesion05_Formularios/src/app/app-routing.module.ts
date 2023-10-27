import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalumnosComponent } from './components/detalumnos/detalumnos.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

const routes: Routes = [
  { path:"alumnos", component:AlumnosComponent , pathMatch:"full"},
  { path:"alumnos/:id", component:DetalumnosComponent , pathMatch:"full"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
