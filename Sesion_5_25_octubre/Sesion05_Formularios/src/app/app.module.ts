import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { DetalumnosComponent } from './components/detalumnos/detalumnos.component';

import { CursoService } from './services/curso.service';
import { NumletraPipe } from './pipes/numletra.pipe'; 

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    DetalumnosComponent,
    NumletraPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
