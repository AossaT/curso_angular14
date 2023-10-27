import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { DalumnoComponent } from './components/dalumno/dalumno.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AlumnosComponent,
    DalumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
