import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { InsumoService } from '../../services/domain/insumo.service';
import { InsumoDTO } from '../../models/insumo.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the InsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insumos',
  templateUrl: 'insumos.html',
})
export class InsumosPage {

  itens: InsumoDTO[];
  itensInsumos = [];
  page : number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public insumoService: InsumoService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.getItens();
  }

  openModal() {
    let modal = this.modalCtrl.create('CadastroInsumoPage',{cssClass: 'select-modal' });
    modal.onDidDismiss(() => {
      this.getItens();
    });
    
    modal.present();
  }

  openModalAjuste() {
    let modal = this.modalCtrl.create('AjusteEstoquePage',{cssClass: 'select-modal' });
    modal.onDidDismiss(() => {
      this.getItens();
    });
    
    modal.present();
  }

  /*getItens(){
    this.insumoService.findAll()
    .subscribe(response => {
      this.itensInsumos = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
    },
    error => {})
  }*/

  searchInsumo(event){
    let text = event.srcElement.value;
    if (!text) {
      this.getItens();
    }
    this.itensInsumos = this.filterPorts(this.itensInsumos, text);
    console.log("aqui: "+this.itensInsumos);
  }

  filterPorts(ports: InsumoDTO[], text: string) {
    return ports.filter(port => {
      return port.nomecodalmox.toLowerCase().indexOf(text) !== -1 ;
    });
  }

  getItens(){
    let loader = this.presentLoading();
    this.itensInsumos = [];
    this.insumoService.findTotosPaginado(this.page, 30)
    .subscribe(response => {
      let start = this.itensInsumos.length;
      this.itensInsumos = this.itensInsumos.concat(response['content']);
      
      let end = this.itensInsumos.length -1;
      //console.log( this.itensInsumos);
      loader.dismiss();


    },
    error => {
      loader.dismiss();
    });

    
  }

  presentLoading(){
    let loader = this.loadingCtrl.create({content: "Aguarde..."});
    loader.present();
    return loader;
  }

  doRefresh(refresher){
    this.page = 0;
    this.itensInsumos = [];
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

  excluirItem(itemId: string){
    this.getItens();
  }

  editarItem(itemId: string){
    let modal = this.modalCtrl.create('CadastroInsumoPage', {itemId: itemId});
    modal.onDidDismiss(() => {
      this.getItens();
    });
    modal.present();
  }

  openPdf() {
    this.insumoService.relatorioInsumos().subscribe((response) => {
      const file = new Blob([response], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }


}
