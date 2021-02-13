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

  itensMovimentacoes : MovimentacaoDTO[];
  page : number = 0;
  str : string ;

  showDetails: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movimentacaoService: MovimentacaoService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log("aqui")
   this.getItens();
  }

  /*getItens(){
    console.log("aqui2")
    this.movimentacaoService.findAll()
    .subscribe(response => {
      this.itensMovimentacoes = response.sort();
      console.log(this.itensMovimentacoes);
    },
    error => {})
  }*/

  getItens(){
    console.log("teste");
    /*this.movimentacaoService.findString().subscribe(resp => {
      console.log("entrou");
    });*/
    this.movimentacaoService.findAll().subscribe(resp => {
      this.itensMovimentacoes = resp.sort();
    },
    error => {});
    /*let loader = this.presentLoading();
    this.itensMovimentacoes = [];
    this.movimentacaoService.findTotosPaginado(this.page, 30)
    .subscribe(response => {
      let start = this.itensMovimentacoes.length;
      this.itensMovimentacoes = this.itensMovimentacoes.concat(response['content']);
      let end = this.itensMovimentacoes.length -1;
      console.log( this.itensMovimentacoes);
      loader.dismiss();


    },
    error => {
      loader.dismiss();
    });*/
  }

  presentLoading(){
    let loader = this.loadingCtrl.create({content: "Aguarde..."});
    loader.present();
    return loader;
  }

  toggleDetails(show, i) {
    /*this.itensMovimentacoes.map(( _ , index ) => { 
      if (index == i ) {
         _.show = !_.show 
        }});*/
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
