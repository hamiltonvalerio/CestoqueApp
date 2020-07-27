import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsumosPage } from './insumos';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    InsumosPage,
  ],
  imports: [
    IonicPageModule.forChild(InsumosPage),
    TooltipsModule.forRoot(),
  ],
})
export class InsumoPageModule {}
