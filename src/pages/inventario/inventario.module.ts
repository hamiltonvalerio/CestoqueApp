import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventarioPage } from './inventario';

@NgModule({
  declarations: [
    InventarioPage,
  ],
  imports: [
    IonicPageModule.forChild(InventarioPage),
  ],
})
export class InventarioPageModule {}
