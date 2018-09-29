import { ModuloRoteamento } from './app.routes';
import { FotoModule } from './foto/foto.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PainelComponent } from './painel/painel.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FotoModule,
    ModuloRoteamento,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
