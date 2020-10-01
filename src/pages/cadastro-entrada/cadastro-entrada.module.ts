import { DirectivesModule } from './../../directives/directives.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEntradaPage } from './cadastro-entrada';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    CadastroEntradaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEntradaPage),
    IonicSelectableModule,
    DirectivesModule
  ],
})
export class CadastroEntradaPageModule {}
