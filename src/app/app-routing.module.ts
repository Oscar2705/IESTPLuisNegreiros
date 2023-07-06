import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { ComunicadosComponent } from './pages/comunicados/comunicados.component';
import { AdmisionComponent } from './pages/admision/admision.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { BienestarComponent } from './pages/bienestar/bienestar.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'carreras', component:CarrerasComponent},
  {path:'comunicados', component:ComunicadosComponent},
  {path:'admision', component:AdmisionComponent},
  {path:'tramites', component:TramitesComponent},
  {path:'bienestar', component:BienestarComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
