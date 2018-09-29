import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "../foto/foto";
@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
  // é o "construtor" dos Pipes
  transform(listaFotos: Foto[], textoDigitado: string) {
    return listaFotos.filter(foto => foto.titulo.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()));
  }
}
