import { InsumoService } from './../../services/domain/insumo.service';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InsumoDTO } from '../../models/insumo.dto';
import { ConverteListaIonItemDivider } from '../../utils/converte-list-ionitemdivider';

/**
 * Generated class for the LocalizacaoInsumosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localizacao-insumos',
  templateUrl: 'localizacao-insumos.html',
})
export class LocalizacaoInsumosPage {
  page : number = 0;
  itens = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public localizacaoService: LocalizacaoService,
    public insumoService: InsumoService,
    public LoadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizacaoInsumosPage');
    //this.loadData();
    this.getItens();
  }

  loadData(){
    let localizacaoId = this.navParams.get('localizacao_id');
    console.log("aqui: "+localizacaoId);

    this.insumoService.findByLocalizacao(localizacaoId,this.page, 30)
    .subscribe(response => {
      
      this.itens = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
      
    },
    error => {})

    console.log(this.itens);

    this.itens.forEach(function (value){
      console.log(value);
    })

  }

  getItens(){
    let localizacaoId = this.navParams.get('localizacao_id');
    let loader = this.presentLoading();
    this.itens = [];
    this.insumoService.findByLocalizacao(localizacaoId,this.page, 30)
    .subscribe(response => {
      let start = this.itens.length;
      this.itens = this.itens.concat(response['content']);
      let end = this.itens.length -1;
      console.log(this.itens);
      loader.dismiss();
    },
    error => {
      loader.dismiss();
    });
    
  }
  




  presentLoading() {
    let loader = this.LoadingController.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }


}
