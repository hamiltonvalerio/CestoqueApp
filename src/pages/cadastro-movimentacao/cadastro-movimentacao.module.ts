import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMovimentacaoPage } from './cadastro-movimentacao';

@NgModule({
  declarations: [
    CadastroMovimentacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMovimentacaoPage),
  ],
})
export class CadastroMovimentacaoPageModule {}
