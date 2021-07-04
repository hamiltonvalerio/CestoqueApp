import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinculaPerfilUsuarioPage } from './vincula-perfil-usuario';

@NgModule({
  declarations: [
    VinculaPerfilUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(VinculaPerfilUsuarioPage),
    IonicSelectableModule,
  ],
})
export class VinculaPerfilUsuarioPageModule {}
