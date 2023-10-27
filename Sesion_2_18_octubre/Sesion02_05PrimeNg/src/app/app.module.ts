import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MifondoDirective } from './directives/mifondo.directive';

@NgModule({
  declarations: [
    AppComponent,
    MifondoDirective
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
