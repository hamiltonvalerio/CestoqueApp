import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalizacaoInsumosPage } from './localizacao-insumos';

@NgModule({
  declarations: [
    LocalizacaoInsumosPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalizacaoInsumosPage),
  ],
})
export class LocalizacaoInsumosPageModule {}
