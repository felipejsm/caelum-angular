import { RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes } from '@angular/router';
const rotasApp: Routes = [
  {path: '', component: ListagemComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'busca/:id', component: CadastroComponent},
  {path: '**', redirectTo: ''}
];
export const ModuloRoteamento = RouterModule.forRoot(rotasApp);
