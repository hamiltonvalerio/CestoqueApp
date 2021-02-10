import { DirectivesModule } from './../../directives/directives.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovimentacaoInsumosPage } from './movimentacao-insumos';

@NgModule({
  declarations: [
    MovimentacaoInsumosPage,
  ],
  imports: [
    IonicPageModule.forChild(MovimentacaoInsumosPage),
    IonicSelectableModule,
    DirectivesModule
  ],
})
export class MovimentacaoInsumosPageModule {}
