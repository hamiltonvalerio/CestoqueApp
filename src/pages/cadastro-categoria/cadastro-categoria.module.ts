import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCategoriaPage } from './cadastro-categoria';

@NgModule({
  declarations: [
    CadastroCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCategoriaPage),
  ],
})
export class CadastroCategoriaPageModule {}
