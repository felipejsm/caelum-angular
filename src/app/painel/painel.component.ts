import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Foto } from './../foto/foto';

@Component({
  selector: 'caelumpic-painel',
  templateUrl: './painel.component.html',
  styles: []
})
export class PainelComponent {
  @Input()
  foto: Foto;
  constructor(private conexaoApi: HttpClient) {}
  public remover() {
   console.table(this.foto);
   // this.conexaoApi.delete('http://localhost:3000/v1/fotos/' + this.foto.id).subscribe(
     // (retorno) => {
       // console.log(retorno);
      //});
  }
}
