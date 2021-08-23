import { LocalizacaoOrdenadaDTO } from './../../models/localizacaoordenada.dto';
import { LocalizacaoInsumosPage } from './../localizacao-insumos/localizacao-insumos';
import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
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

  excluirItem(itemId: string){
    this.getItens();
  }

   public openItem(itemId: string, itemNome: string, itemAtualizaqtdminima: string, itemControle: string, localizacao_filha: string): void {  
    this.navCtrl.push('LocalizacaoInsumosPage', {
      localizacao_id: itemId,
      localizacao_nome: itemNome,
      localizacao_atualizaqtdminima: itemAtualizaqtdminima,
      localizacao_controle: itemControle,
      localizacao_filha: localizacao_filha,
    });
  }

  openModal() {
    let modal = this.modalCtrl.create('CadastroLocalizacaoPage');
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  editarItem(itemId: string){
    let modal = this.modalCtrl.create('CadastroLocalizacaoPage', {itemId: itemId}, {cssClass: 'update-profile-modal'});
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  toggleDetails(show, i) {
    console.log(i)
    this.itensLocalizacoesOrd.map(( _ , index ) => { 
      if (index == i ) {
         _.show = !_.show 
        }});
  }

}
