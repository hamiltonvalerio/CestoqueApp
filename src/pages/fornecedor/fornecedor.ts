<<<<<<< HEAD
import { FornecedorDTO } from './../../models/fornecedor.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
=======
import { CadastroFornecedorPage } from './../cadastro-fornecedor/cadastro-fornecedor';
import { FornecedorService } from './../../services/domain/fornecedor.service';
import { FornecedorDTO } from './../../models/fornecedor.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
>>>>>>> 95d8ab5... Git Reset

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

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FornecedorPage');
=======
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fornecedorService: FornecedorService,
    public modalCtrl: ModalController) {
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
    this.fornecedorService.findAll()
    .subscribe(response => {
      this.itens = response;
    },
    error => {})
>>>>>>> 95d8ab5... Git Reset
  }

}
