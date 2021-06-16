import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroLocalizacaoPage } from './cadastro-localizacao';

@NgModule({
  declarations: [
    CadastroLocalizacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroLocalizacaoPage),
    IonicSelectableModule,
  ],
})
export class CadastroLocalizacaoPageModule {}
