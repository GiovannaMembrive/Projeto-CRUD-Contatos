import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './components/navbar/navbar-component/navbar-component';
import { HomePage } from './components/pages/home-page/home-page';
import { ContatoPage } from './components/pages/contato-page/contato-page';
import { GrupoPage } from './components/pages/grupo-page/grupo-page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatoFormPage } from './components/pages/contato-form-page/contato-form-page';
import { GrupoFormPage } from './components/pages/grupo-form-page/grupo-form-page';
import { provideHttpClient } from '@angular/common/http';
import { ContatoEditModal } from './components/modals/contato-edit-modal/contato-edit-modal';
import { GrupoEditModal } from './components/modals/grupo-edit-modal/grupo-edit-modal';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    HomePage,
    ContatoPage,
    GrupoPage,
    ContatoFormPage,
    GrupoFormPage,
    ContatoEditModal,
    GrupoEditModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }