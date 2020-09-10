import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciomovilComponent } from './iniciomovil/iniciomovil.component';
import { MenuprinmovilComponent } from './menuprinmovil/menuprinmovil.component';
import { Escenario1movilComponent } from './escenario1movil/escenario1movil.component';
import { Escenario2movilComponent } from './escenario2movil/escenario2movil.component';
import { ForomovilComponent } from './foromovil/foromovil.component';
import { GestorpruebasmovilComponent } from './gestorpruebasmovil/gestorpruebasmovil.component';
import { GestorusuariosmovilComponent } from './gestorusuariosmovil/gestorusuariosmovil.component';
import { GuiasmovilComponent } from './guiasmovil/guiasmovil.component';
import { MaquinasmovilComponent } from './maquinasmovil/maquinasmovil.component';
import { PruebasmovilComponent } from './pruebasmovil/pruebasmovil.component';
import { RedesmovilComponent } from './redesmovil/redesmovil.component';
import { ResultadomovilComponent } from './resultadomovil/resultadomovil.component';


const routes: Routes = [
  {path: '', component: IniciomovilComponent},
  {path: 'home', component: IniciomovilComponent},
  {path: 'menup', component: MenuprinmovilComponent},
  {path: 'escenario1', component: Escenario1movilComponent},
  {path: 'escenario2', component: Escenario2movilComponent},
  {path: 'foromovil/:uid', component: ForomovilComponent},
  {path: 'gestorpruebas', component: GestorpruebasmovilComponent},
  {path: 'gestorusuario', component: GestorusuariosmovilComponent},
  {path: 'guiasmovil', component: GuiasmovilComponent},
  {path: 'maquinasmovil', component: MaquinasmovilComponent},
  {path: 'pruebasmovil', component: PruebasmovilComponent},
  {path: 'redesmovil', component: RedesmovilComponent},
  {path: 'resultadom', component: ResultadomovilComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
