import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { CadastroFornecedorPage } from './../cadastro-fornecedor/cadastro-fornecedor';
import { FornecedorService } from './../../services/domain/fornecedor.service';
import { FornecedorDTO } from './../../models/fornecedor.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';

/**
 * Generated class for the FornecedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fornecedor',
  templateUrl: 'fornecedor.html',
})
export class FornecedorPage {

  itens: FornecedorDTO[];
  itensFornecedores = [];
  page : number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fornecedorService: FornecedorService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

  openModal() {
    console.log("aqui");
    let modal = this.modalCtrl.create('CadastroFornecedorPage');
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  getItens(){
    let loader = this.presentLoading();
    this.itensFornecedores = [];
    this.fornecedorService.findTotosPaginado(this.page, 30)
    .subscribe(response => {
      let start = this.itensFornecedores.length;
      this.itensFornecedores = this.itensFornecedores.concat(response['content']);
      let end = this.itensFornecedores.length - 1;
      loader.dismiss();
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

  doRefresh(refresher){
    this.page = 0;
    this.itensFornecedores = [];
    this.getItens();
    setTimeout(()=>{
      refresher.complete();
    },1000);
  }

  doInfinite(infiniteScroll){
    this.page++;
    this.getItens();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

}
