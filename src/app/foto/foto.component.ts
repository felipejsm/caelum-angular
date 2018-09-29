import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector : 'foto',
  template : '<img class="card-img-top" [src]="url" [alt]="titulo" [title]="tooltip">',
  styles : [],
})
export class FotoComponent {
  @Input()// esse decorator define que o campo será um atributo na tag criada (foto)
  url = ''; // -> equivalente a url: string = '';
  @Input()
  titulo = '';
  @Input()
  tooltip = '';
}
