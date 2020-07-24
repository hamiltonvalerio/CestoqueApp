import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroInsumoPage } from './cadastro-insumo';
import { BrMaskerModule, BrMaskerIonic3 } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    CadastroInsumoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroInsumoPage),
    BrMaskerModule
  ],
})
export class CadastroInsumoPageModule {}
