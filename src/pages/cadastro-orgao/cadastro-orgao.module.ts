import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroOrgaoPage } from './cadastro-orgao';

@NgModule({
  declarations: [
    CadastroOrgaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroOrgaoPage),
  ],
})
export class CadastroOrgaoPageModule {}
