import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movimentacao',
  templateUrl: 'movimentacao.html',
})
export class MovimentacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovimentacaoPage');
  }

  openCadastroMovimentacao(){
    this.navCtrl.push('CadastroMovimentacaoPage', {}, {
      animate: true, 
      direction: 'forward'}).then(() => {
        this.navCtrl.getActive().onDidDismiss(data => {
          //console.log(data);
          //this.getItens();
        });
      });
  }

}
