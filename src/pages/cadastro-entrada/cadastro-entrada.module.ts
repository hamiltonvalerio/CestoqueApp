import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEntradaPage } from './cadastro-entrada';

@NgModule({
  declarations: [
    CadastroEntradaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEntradaPage),
  ],
})
export class CadastroEntradaPageModule {}
