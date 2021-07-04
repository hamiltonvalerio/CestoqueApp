import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPerfilPage } from './cadastro-perfil';

@NgModule({
  declarations: [
    CadastroPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPerfilPage),
  ],
})
export class CadastroPerfilPageModule {}
