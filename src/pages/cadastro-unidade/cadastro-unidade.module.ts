import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroUnidadePage } from './cadastro-unidade';

@NgModule({
  declarations: [
    CadastroUnidadePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroUnidadePage),
  ],
})
export class CadastroUnidadePageModule {}
