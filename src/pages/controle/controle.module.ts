import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ControlePage } from './controle';

@NgModule({
  declarations: [
    ControlePage,
  ],
  imports: [
    IonicPageModule.forChild(ControlePage),
    IonicSelectableModule,
  ],
})
export class ControlePageModule {}
