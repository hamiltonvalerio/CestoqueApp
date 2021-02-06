import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovimentacaoPage } from './movimentacao';

@NgModule({
  declarations: [
    MovimentacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(MovimentacaoPage),
  ],
})
export class MovimentacaoPageModule {}
