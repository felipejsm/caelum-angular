import { Foto } from './../foto/foto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  private url = 'http://localhost:3000/v1/fotos/';
  constructor(private conexaoApi: HttpClient) {}

  listar(): Observable<Foto[]> {
    return this.conexaoApi.get<Foto[]>(this.url); // this.conexaoApi.get(this.url) as Observable<Foto[]>;
   }
  cadastrar(foto: Foto): Observable<Object> {
    return this.conexaoApi.post(this.url, foto);
  }
  deletar(foto: Foto): Observable<Object> {
    return this.conexaoApi.delete(this.url.concat(foto._id));
   }
  atualizar(foto: Foto) {
    return this.conexaoApi.put(this.url.concat(foto._id), foto);
   }
  buscar(id: string): Observable<Foto> {
    return this.conexaoApi.get<Foto>(this.url.concat(id));
   }
}
