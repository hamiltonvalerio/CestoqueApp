import { ColaboradorService } from './../../services/domain/colaborador.service';
import { ColaboradorDTO } from './../../models/colaborador.dto';
import { PerfilService } from './../../services/domain/perfil.service';
import { PerfilDTO } from './../../models/perfil.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

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
  colaboradores: ColaboradorDTO[] = [];

  show: Boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public perfilService: PerfilService,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public colaboradorService: ColaboradorService) {
  }

  ionViewDidLoad() {
    this.type = 'perfis';
    this.loadPerfis();
    this.loadColaboradores();
  }

  toggleDetails() {
    this.show = this.show?false:true;
    console.log(this.show)
  }

  loadColaboradores(){
    this.colaboradorService.findAll()
    .subscribe(response => {
      this.colaboradores = response.sort();
      console.log(this.colaboradores);
    },
    error => {})
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  loadPerfis(){
    this.perfilService.findAll()
    .subscribe(response => {
      this.perfis = response.sort();
      //console.log(this.perfis);
    },
    error => {})
  }

  segmentChanged(ev: any) {
    //console.log('Segment changed', ev.value);
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
    let modal = this.modalCtrl.create('CadastroPerfilPage');
    modal.onDidDismiss(() => {
      this.loadPerfis();
    });
    modal.present();
  }

  openModalVincularPerfil(){
    let modal = this.modalCtrl.create('VinculaPerfilUsuarioPage');
    modal.onDidDismiss(() => {
      this.loadPerfis();
      this.loadColaboradores();
    });
    modal.present();
  }

  openModalNovaPagina(){
    let modal = this.modalCtrl.create('CadastroPaginaPage');
    modal.onDidDismiss(() => {
      //this.loadPerfis();
    });
    modal.present();
  }

  openModalVincularPagina(){
    
  }
}
