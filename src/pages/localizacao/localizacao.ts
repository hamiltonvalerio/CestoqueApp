import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LocalizacaoDTO } from '../../models/localizacao.dto';
import { LocalizacaoService } from '../../services/domain/localizacao.service';

/**
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  itens: LocalizacaoDTO[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public localizacaoService: LocalizacaoService,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

  openModal() {
    console.log("aqui");
    let modal = this.modalCtrl.create('CadastroLocalizacaoPage');
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  getItens(){ 
    this.localizacaoService.findAll()
    .subscribe(response => {
      this.itens = response;
    },
    error => {})
  }

}
