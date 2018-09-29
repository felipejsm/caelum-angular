import { FotoService } from './../services/foto.service';
import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { Router } from '@angular/router';
@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title = 'Caelum Pic';
  listaFotos: Foto[];
  // injeção de dependência | o angular te fornece uma instância única do HttpClient
  constructor(private fotoService: FotoService, private roteador: Router) {
    this.fotoService.listar().subscribe( fotosApi => {this.listaFotos = fotosApi; console.table(fotosApi); });
  }
  public apagar(foto: Foto) {

    console.table(foto);

    this.fotoService.deletar(foto).subscribe(
      (retorno) => {
        this.listaFotos = this.listaFotos.filter(item => item !== foto );
      });
    }
  }

