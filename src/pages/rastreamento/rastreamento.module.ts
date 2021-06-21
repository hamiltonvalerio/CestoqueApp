import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RastreamentoPage } from './rastreamento';

@NgModule({
  declarations: [
    RastreamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(RastreamentoPage),
    IonicSelectableModule,
  ],
})
export class RastreamentoPageModule {}
