import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { CategoriaDTO } from './../../models/categoria.dto';
import { CategoriaService } from './../../services/domain/categoria.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  itens: CategoriaDTO[];
  itensCategorias = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public CategoriaService: CategoriaService,
    public modalCtrl: ModalController) {
  }

  openModal() {
    console.log("aqui");
    let modal = this.modalCtrl.create('CadastroCategoriaPage');
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  ionViewDidLoad() {
    this.getItens();
  }

  getItens(){
    this.CategoriaService.findAll()
    .subscribe(response => {
      this.itensCategorias = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());;
    },
    error => {})
  }

}
