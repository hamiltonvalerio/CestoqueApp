import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { InsumoService } from '../../services/domain/insumo.service';
import { InsumoDTO } from '../../models/insumo.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

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
  itensInsumos = [];
  page : number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public insumoService: InsumoService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

  openModal() {
    console.log("aqui");
    let modal = this.modalCtrl.create('CadastroInsumoPage',{cssClass: 'select-modal' });
    modal.onDidDismiss(() => {
      this.getItens();
    });
    
    modal.present();
  }

  getItens(){
    this.insumoService.findAll()
    .subscribe(response => {
      this.itensInsumos = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
    },
    error => {})
  }

  getItens2(){
    let loader = this.presentLoading();
    this.itensInsumos = [];
    this.insumoService.findTotosPaginado(this.page, 10)
    .subscribe(response => {
      let start = this.itensInsumos.length;


    },
    error => {
      loader.dismiss();
    });
  }

  presentLoading(){
    let loader = this.loadingCtrl.create({content: "Aguarde..."});
    loader.present();
    return loader;
  }



}
