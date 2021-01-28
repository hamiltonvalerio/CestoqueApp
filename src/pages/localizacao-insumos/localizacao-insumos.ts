import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public LocalizacaoService: LocalizacaoService,
    public LoadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizacaoInsumosPage');
    this.loadData();
  }

  loadData(){
    let localizacaoId = this.navParams.get('localizacao_id');
    let loader = this.presentLoading();
    
  }
  
  presentLoading() {
    let loader = this.LoadingController.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

}
