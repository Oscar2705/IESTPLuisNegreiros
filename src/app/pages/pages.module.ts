import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { AdmisionComponent } from './admision/admision.component';
import { TramitesComponent } from './tramites/tramites.component';
import { BienestarComponent } from './bienestar/bienestar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    CarrerasComponent,
    ComunicadosComponent,
    AdmisionComponent,
    TramitesComponent,
    BienestarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    NosotrosComponent,
    CarrerasComponent,
    ComunicadosComponent,
    AdmisionComponent,
    TramitesComponent,
    BienestarComponent
  ],
})
export class PagesModule { }
