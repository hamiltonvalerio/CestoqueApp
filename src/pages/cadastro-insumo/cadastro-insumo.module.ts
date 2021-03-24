import { DirectivesModule } from './../../directives/directives.module';
import { IonicSelectableModule } from 'ionic-selectable';
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
    IonicSelectableModule,
    DirectivesModule,
    BrMaskerModule
  ],
})
export class CadastroInsumoPageModule {}
