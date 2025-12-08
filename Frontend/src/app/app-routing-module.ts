import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './components/pages/home-page/home-page';
import { ContatoPage } from './components/pages/contato-page/contato-page';
import { GrupoPage } from './components/pages/grupo-page/grupo-page';
import { ContatoFormPage } from './components/pages/contato-form-page/contato-form-page';
import { GrupoFormPage } from './components/pages/grupo-form-page/grupo-form-page';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'contatos', component: ContatoPage},
  {path: 'grupos', component: GrupoPage},
  {path: 'contatos/novo', component: ContatoFormPage},
  {path: 'grupos/novo', component: GrupoFormPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
