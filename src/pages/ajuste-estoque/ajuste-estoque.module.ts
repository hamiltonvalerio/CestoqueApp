import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjusteEstoquePage } from './ajuste-estoque';

@NgModule({
  declarations: [
    AjusteEstoquePage,
  ],
  imports: [
    IonicPageModule.forChild(AjusteEstoquePage),
    IonicSelectableModule,
  ],
})
export class AjusteEstoquePageModule {}
