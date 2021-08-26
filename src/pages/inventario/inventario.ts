import { LocalizacaoOrdenadaDTO } from './../../models/localizacaoordenada.dto';
import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { LocalizacaoDTO } from './../../models/localizacao.dto';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the InventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventario',
  templateUrl: 'inventario.html',
})
export class InventarioPage {

  itens: LocalizacaoDTO[];
  itensLocalizacoes = [];

  itenslocord: LocalizacaoOrdenadaDTO[];
  itensLocalizacoesOrd = [];

  showDetails: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public localizacaoService: LocalizacaoService,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

  getItens(){ 
    this.localizacaoService.findAllOrdenado()
    .subscribe(response => {
      this.itensLocalizacoes = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
    },
    error => {})

    this.localizacaoService.findAllOrdenadoFilhas()
    .subscribe(response => {
      this.itensLocalizacoesOrd = response.sort();
      console.log(this.itensLocalizacoesOrd)
    },
    error => {})
  }

  public openItem(itemId: string, itemNome: string, itemAtualizaqtdminima: string, itemControle: string, localizacao_filha: string): void {  
    this.navCtrl.push('InventarioInsumosPage', {
      localizacao_id: itemId,
      localizacao_nome: itemNome,
      localizacao_atualizaqtdminima: itemAtualizaqtdminima,
      localizacao_controle: itemControle,
      localizacao_filha: localizacao_filha,
    });
  }

  toggleDetails(show, i) {
    console.log(i)
    this.itensLocalizacoesOrd.map(( _ , index ) => { 
      if (index == i ) {
         _.show = !_.show 
        }});
  }

  

}
