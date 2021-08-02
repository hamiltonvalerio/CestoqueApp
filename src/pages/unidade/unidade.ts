import { UnidadeService } from './../../services/domain/unidade.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UnidadeDTO } from '../../models/unidade.dto';

/**
 * Generated class for the UnidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unidade',
  templateUrl: 'unidade.html',
})
export class UnidadePage {

  itens: UnidadeDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public unidadeService: UnidadeService,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

   openModal() {
    let modal = this.modalCtrl.create('CadastroUnidadePage');
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  getItens(){ 
    this.unidadeService.findAll()
    .subscribe(response => {
      this.itens = response;
    },
    error => {})
  }

}
