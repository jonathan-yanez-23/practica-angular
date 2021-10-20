import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DefinicionComponent } from './home/definicion/definicion.component';
import { ActividadComponent } from './home/actividad/actividad.component';
import { FuncionamientoComponent } from './home/funcionamiento/funcionamiento.component';
import { SortPipe } from './pipes/sort.pipe';
import { ApiheroesService } from './services/apiheroes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    NavbarComponent,
    DefinicionComponent,
    ActividadComponent,
    FuncionamientoComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiheroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
