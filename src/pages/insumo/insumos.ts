import { InsumoService } from '../../services/domain/insumo.service';
import { InsumoDTO } from '../../models/insumo.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the InsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insumos',
  templateUrl: 'insumos.html',
})
export class InsumosPage {

  itens: InsumoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public insumoService: InsumoService,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

  openModal() {
    console.log("aqui");
    let modal = this.modalCtrl.create('CadastroInsumoPage');
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  getItens(){
    this.insumoService.findAll()
    .subscribe(response => {
      this.itens = response;
    },
    error => {})
  }

}
