import { MovimentacaoService } from './../../services/domain/movimentacao.service';
import { MovimentacaoDTO } from './../../models/movimentacao.dto';
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

  itensMovimentacoes : MovimentacaoDTO[];
  page : number = 0;

  showDetails: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movimentacaoService: MovimentacaoService) {
  }

  ionViewDidLoad() {
    console.log("aqui")
   this.getItens();
  }

  getItens(){
    console.log("aqui2")
    this.movimentacaoService.findAll()
    .subscribe(response => {
      this.itensMovimentacoes = response.sort();
      console.log(this.itensMovimentacoes);
    },
    error => {})
  }

  toggleDetails(show, i) {
    this.itensMovimentacoes.map(( _ , index ) => { 
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
          //this.getItens();
        });
      });
  }

}
