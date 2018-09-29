import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { Router, ActivatedRoute } from '@angular/router';
import { FotoService } from './../services/foto.service';
@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto: Foto = new Foto();
  constructor(private fotoService: FotoService, private roteador: Router, private rotaAtiva: ActivatedRoute) {}

  ngOnInit() {
    let id = this.rotaAtiva.snapshot.params.id;
    if(id) {
      this.fotoService.buscar( id ).subscribe( pic => this.foto = pic );
    }

    /*this.rotaAtiva.params.subscribe(paramsRota => {
      console.log(paramsRota.id);
    });*/
  }

  /**
   * salvar
   */
  public salvar() {
    console.table(this.foto);
    if (this.foto._id) {
      this.atualizar();
    } else {
      this.fotoService.cadastrar(this.foto).subscribe((resposta) => {
        console.log(resposta);
        this.roteador.navigate(['']);
      });
    }
  }

  public atualizar() {
    this.fotoService.atualizar(this.foto).subscribe((resposta) => {
      console.log(resposta);
      this.roteador.navigate(['']);
    });
  }

}
