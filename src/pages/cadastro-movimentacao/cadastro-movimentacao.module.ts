import { DirectivesModule } from './../../directives/directives.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMovimentacaoPage } from './cadastro-movimentacao';

@NgModule({
  declarations: [
    CadastroMovimentacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMovimentacaoPage),
    IonicSelectableModule,
    DirectivesModule
  ],
})
export class CadastroMovimentacaoPageModule {}
