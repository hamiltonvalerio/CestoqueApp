import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
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
  itensInsumos = [];

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
      this.itensInsumos = [];
      let insumoOrdenado = [];
      insumoOrdenado = response.sort();
      let letraAtual = "";
      let currentInsumos = [];

      insumoOrdenado.forEach((value, index) => {
        if(value.nome.charAt(0) != letraAtual){
          letraAtual = value.nome.charAt(0);
          let newGroup = {
            letra: letraAtual,
            insumos: []
        };
          currentInsumos = newGroup.insumos;
          this.itensInsumos.push(newGroup);
        
        }

        currentInsumos.push(value);
        new ConverteListaIonItemDivider().retornaArrayGroup(currentInsumos);

      });



    },
    error => {})
  }



}
