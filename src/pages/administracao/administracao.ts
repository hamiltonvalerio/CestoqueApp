import { PerfilService } from './../../services/domain/perfil.service';
import { PerfilDTO } from './../../models/perfil.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdministracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administracao',
  templateUrl: 'administracao.html',
})
export class AdministracaoPage {
  type: string;

  perfis: PerfilDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public perfilService: PerfilService) {
  }

  ionViewDidLoad() {
    this.type = 'paginas';
    this.loadPerfis();
  }

  loadPerfis(){
    this.perfilService.findAll()
    .subscribe(response => {
      this.perfis = response.sort();
      console.log(this.perfis);
    },
    error => {})
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.value);
    switch (ev.value) {
      case 'paginas':
        this.type = 'paginas';
          break;
      case 'perfis':
        this.type = 'perfis';
          break;
      default: 
        this.type = 'paginas';
          break;
    }
  }

  openModalNovoPerfil(){

  }

  openModalVincularPerfil(){

  }

  openModalNovaPagina(){

  }

  openModalVincularPagina(){
    
  }
}
