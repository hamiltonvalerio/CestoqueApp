import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPaginaPage } from './cadastro-pagina';

@NgModule({
  declarations: [
    CadastroPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPaginaPage),
  ],
})
export class CadastroPaginaPageModule {}
