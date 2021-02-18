import { InsumomovimentacaoDTO } from './../../models/insumomovimentacao.dto';
import { InsumoService } from './../../services/domain/insumo.service';
import { MovimentacaoService } from './../../services/domain/movimentacao.service';
import { MovimentacaoDTO } from './../../models/movimentacao.dto';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

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

  movimentacoes : MovimentacaoDTO[] = [];
  page : number = 0;
  str : string ;

  showDetails: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movimentacaoService: MovimentacaoService,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
   this.getItens();
  }

  getItens(){
    console.log("aqui2")
    this.movimentacaoService.findAll()
    .subscribe(response => {
      this.movimentacoes = response.sort();
      console.log(this.movimentacoes);
    },
    error => {})
  }

  presentLoading(){
    let loader = this.loadingCtrl.create({content: "Aguarde..."});
    loader.present();
    return loader;
  }

  toggleDetails(show, i) {
    this.movimentacoes.map(( _ , index ) => { 
      if (index == i ) {
         _.show = !_.show 
        }});
 }

  openCadastroMovimentacao(){
    this.navCtrl.push('CadastroMovimentacaoPage', {}, {
      animate: true, 
      direction: 'forward'}).then(() => {
        this.navCtrl.getActive().onDidDismiss(data => {
          //console.log(data);
          this.getItens();
        });
      });
  }

}
