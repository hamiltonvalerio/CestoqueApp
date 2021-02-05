import { EntradaDTO } from './../../models/entrada.dto';
import { CadastroEntradaPage } from './../cadastro-entrada/cadastro-entrada';
import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { EntradaService } from './../../services/domain/entrada.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, NavPush } from 'ionic-angular';


/**
 * Generated class for the EntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrada',
  templateUrl: 'entrada.html',
})
export class EntradaPage {

  @ViewChild('myNav') nav;

  itens: EntradaDTO[];
  itensEntradas : EntradaDTO[];
  page : number = 0;

  showDetails: boolean = false;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public entradaService: EntradaService,
    public modalCtrl: ModalController) {
   
  }

  ionViewDidLoad() {
    this.getItens();
  }

  getItens(){
    
    this.entradaService.findAll()
    .subscribe(response => {
      //this.itensEntradas = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
      this.itensEntradas = response.sort();
      console.log(this.itensEntradas);
    },
    error => {})
  }

  openModal() {
    console.log("aqui");
    let modal = this.modalCtrl.create('CadastroEntradaPage');
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  openCadastroEntrada(){
    this.navCtrl.push('CadastroEntradaPage', {}, {
      animate: true, 
      direction: 'forward'}).then(() => {
        this.navCtrl.getActive().onDidDismiss(data => {
          //console.log(data);
          this.getItens();
        });
      });
  }
0
  doRefresh(refresher){

    this.page = 0;
    this.getItens();
    setTimeout(()=>{
      refresher.complete();
    },1000);
  }

  doInfinite(infiniteScroll){
    this.page++;
    this.getItens();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

  toggleDetails(show, i) {
    this.itensEntradas.map(( _ , index ) => { 
      if (index == i ) {
         _.show = !_.show 
        }});
 }

}
