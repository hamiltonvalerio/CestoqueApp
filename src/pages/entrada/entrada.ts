import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { EntradaService } from './../../services/domain/entrada.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EntradaDTO } from '../../models/entrada.dto';

/**
 * Generated class for the EntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrada',
  templateUrl: 'entrada.html',
})
export class EntradaPage {

  itens: EntradaDTO[];
  itensEntradas = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public entradaService: EntradaService,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

  getItens(){
    this.entradaService.findAll()
    .subscribe(response => {
      this.itensEntradas = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());;
    },
    error => {})
  }

}
