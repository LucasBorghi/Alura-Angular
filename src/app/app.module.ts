import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FotoModule,
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
