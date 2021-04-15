import { ModalQuantidademinimaPage } from './../modal-quantidademinima/modal-quantidademinima';
import { TooltipsModule } from 'ionic-tooltips';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalizacaoInsumosPage } from './localizacao-insumos';

@NgModule({
  declarations: [
    LocalizacaoInsumosPage
  ],
  imports: [
    IonicPageModule.forChild(LocalizacaoInsumosPage),
    TooltipsModule.forRoot(),
  ],
  
})
export class LocalizacaoInsumosPageModule {}
