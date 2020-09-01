import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciomovilComponent } from './iniciomovil/iniciomovil.component';
import { MenuprinmovilComponent } from './menuprinmovil/menuprinmovil.component';
import { RedesmovilComponent } from './redesmovil/redesmovil.component';
import { GuiasmovilComponent } from './guiasmovil/guiasmovil.component';
import { PruebasmovilComponent } from './pruebasmovil/pruebasmovil.component';
import { Escenario1movilComponent } from './escenario1movil/escenario1movil.component';
import { Escenario2movilComponent } from './escenario2movil/escenario2movil.component';
import { GestorusuariosmovilComponent } from './gestorusuariosmovil/gestorusuariosmovil.component';
import { GestorpruebasmovilComponent } from './gestorpruebasmovil/gestorpruebasmovil.component';
import { MaquinasmovilComponent } from './maquinasmovil/maquinasmovil.component';
import { ResultadomovilComponent } from './resultadomovil/resultadomovil.component';
import { ForomovilComponent } from './foromovil/foromovil.component';
import { Breadcrumbs4gComponent } from './shared4g/breadcrumbs4g/breadcrumbs4g.component';
import { Footer4gComponent } from './shared4g/footer4g/footer4g.component';
import { Sliderbar4gComponent } from './shared4g/sliderbar4g/sliderbar4g.component';
import { Header4gComponent } from './shared4g/header4g/header4g.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciomovilComponent,
    MenuprinmovilComponent,
    RedesmovilComponent,
    GuiasmovilComponent,
    PruebasmovilComponent,
    Escenario1movilComponent,
    Escenario2movilComponent,
    GestorusuariosmovilComponent,
    GestorpruebasmovilComponent,
    MaquinasmovilComponent,
    ResultadomovilComponent,
    ForomovilComponent,
    Breadcrumbs4gComponent,
    Footer4gComponent,
    Sliderbar4gComponent,
    Header4gComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
