import { DirectivesModule } from './../../directives/directives.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalQuantidademinimaPage } from './modal-quantidademinima';

@NgModule({
  declarations: [
    ModalQuantidademinimaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalQuantidademinimaPage),
    DirectivesModule
  ],
})
export class ModalQuantidademinimaPageModule {}
