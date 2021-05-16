import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministracaoPage } from './administracao';

@NgModule({
  declarations: [
    AdministracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdministracaoPage),
  ],
})
export class AdministracaoPageModule {}
