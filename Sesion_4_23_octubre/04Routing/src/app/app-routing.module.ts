import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DalumnoComponent } from './components/dalumno/dalumno.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CursosComponent } from './pages/cursos/cursos.component';

const routes: Routes = [
  {path:"cursos", component: CursosComponent , pathMatch: "full" },
  {path:"alumnos", component: AlumnosComponent, pathMatch: "full" },
  {path:"alumnos/:id", component: DalumnoComponent, pathMatch: "full" },


];

//const appRoutes = [{ path: "", component: UsersComponent, pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
