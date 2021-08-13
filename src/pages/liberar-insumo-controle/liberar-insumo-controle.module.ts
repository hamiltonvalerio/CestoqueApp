import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiberarInsumoControlePage } from './liberar-insumo-controle';

@NgModule({
  declarations: [
    LiberarInsumoControlePage,
  ],
  imports: [
    IonicPageModule.forChild(LiberarInsumoControlePage),
    IonicSelectableModule,
  ],
})
export class LiberarInsumoControlePageModule {}
