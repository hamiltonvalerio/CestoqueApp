import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinculaPaginaPerfilPage } from './vincula-pagina-perfil';

@NgModule({
  declarations: [
    VinculaPaginaPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(VinculaPaginaPerfilPage),
    IonicSelectableModule,
  ],
})
export class VinculaPaginaPerfilPageModule {}
