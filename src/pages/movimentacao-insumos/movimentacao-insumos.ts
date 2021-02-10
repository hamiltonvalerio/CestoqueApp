import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the MovimentacaoInsumosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movimentacao-insumos',
  templateUrl: 'movimentacao-insumos.html',
})
export class MovimentacaoInsumosPage {
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovimentacaoInsumosPage');
  }

  

}
