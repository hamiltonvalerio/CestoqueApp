import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroSaidaPage } from './cadastro-saida';

@NgModule({
  declarations: [
    CadastroSaidaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroSaidaPage),
  ],
})
export class CadastroSaidaPageModule {}
