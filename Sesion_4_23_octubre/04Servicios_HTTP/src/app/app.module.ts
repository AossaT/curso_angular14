import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CursoService } from './services/curso.service';
import { ListaComponent } from './components/lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule

  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
