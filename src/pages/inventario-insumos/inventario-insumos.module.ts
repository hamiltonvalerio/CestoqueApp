import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventarioInsumosPage } from './inventario-insumos';

@NgModule({
  declarations: [
    InventarioInsumosPage,
  ],
  imports: [
    IonicPageModule.forChild(InventarioInsumosPage),
  ],
})
export class InventarioInsumosPageModule {}
