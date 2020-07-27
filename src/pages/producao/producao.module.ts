import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProducaoPage } from './producao';

@NgModule({
  declarations: [
    ProducaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProducaoPage),
  ],
})
export class ProducaoPageModule {}
