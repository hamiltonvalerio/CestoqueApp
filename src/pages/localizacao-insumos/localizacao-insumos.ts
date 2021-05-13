import { InsumolocalizacaoDTO } from './../../models/insumolocalizacao.dto';
import { ModalQuantidademinimaPage } from './../modal-quantidademinima/modal-quantidademinima';
import { InsumoService } from './../../services/domain/insumo.service';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, ViewController, AlertController} from 'ionic-angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  insumosLocalizacao : InsumolocalizacaoDTO[];
  nomeLocalizacao : string = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public localizacaoService: LocalizacaoService,
    public insumoService: InsumoService,
    public LoadingController: LoadingController,
    public modal: ModalController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController) {

      this.nomeLocalizacao = this.navParams.get('localizacao_nome');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizacaoInsumosPage');
    //this.loadData();
    this.getItens();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  atualizaQtdMinima(event: Event){
    console.log("ENTROU")
    console.log(event)
    let modalQuantidademinimaPage  =  this.modal.create('ModalQuantidademinimaPage', {evento: event});
    modalQuantidademinimaPage.onDidDismiss(() => {
      this.getItens(); 
    });
    modalQuantidademinimaPage.present();
  }

 

  /*getItens(){
    let localizacaoId = this.navParams.get('localizacao_id');
    console.log("aqui: "+localizacaoId);

    this.insumoService.findInsumoLocalizacaoByLocalizacao(localizacaoId,this.page, 30)
    .subscribe(response => {
      
      this.insumosLocalizacao = response.sort();
      
    },
    error => {})

    console.log(this.insumosLocalizacao);

    this.insumosLocalizacao.forEach(function (value){
      console.log(value);
    })

  }*/

  getItens(){
    let localizacaoId = this.navParams.get('localizacao_id');
    let loader = this.presentLoading();
    this.insumosLocalizacao = [];
    //this.insumoService.findByLocalizacao(localizacaoId,this.page, 30)
    this.insumoService.findInsumoLocalizacaoByLocalizacao(localizacaoId)
    .subscribe(response => {
      let start = this.insumosLocalizacao.length;
      this.insumosLocalizacao = this.insumosLocalizacao.concat(response['content']);
      let end = this.insumosLocalizacao.length -1;
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
