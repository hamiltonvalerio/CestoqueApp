import { DateNow } from './../../utils/datenow';
import { DateTimeFormatPipe } from './../../utils/date-time-format';
import { IonicSelectableComponent } from 'ionic-selectable';
import { InsumoService } from './../../services/domain/insumo.service';
import { InsumolocalizacaoDTO } from './../../models/insumolocalizacao.dto';
import { FormBuilder } from '@angular/forms';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { LocalizacaoDTO } from './../../models/localizacao.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController, ModalController } from 'ionic-angular';

/**
 * Generated class for the ControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-controle',
  templateUrl: 'controle.html',
})
export class ControlePage {

  localizacoes: LocalizacaoDTO[] = [];
  localizacao: LocalizacaoDTO;

  insumosLocalizacao: InsumolocalizacaoDTO[];

  shouldShowCancel: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public localizacaoService: LocalizacaoService,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController,
    public dateTimeFormatPipe: DateTimeFormatPipe,
    public dateNow: DateNow,
    public modalCtrl: ModalController,) {



  }

  ionViewDidLoad() {
    this.loadLocalizacao();
  }

  loadLocalizacao(){
    let loader = this.presentLoading();
    this.localizacaoService.findByAprovacaoTrue().subscribe((response) => {
      this.localizacoes = response.sort();
      loader.dismiss();
    });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  carregaObjeto(event: {
    component: IonicSelectableComponent,
    value: any
  }){
    this.localizacao = event.value;
    this.carregaInsumos();
  }

  carregaInsumos(){
    if(this.localizacao != undefined){
      let loader = this.presentLoading();
      this.insumosLocalizacao = [];
      this.insumoService
        .findInsumoLocalizacaoByLocalizacao(this.localizacao.id)
        .subscribe(
          (response) => {
            let start = this.insumosLocalizacao.length;
            this.insumosLocalizacao = this.insumosLocalizacao.concat(
              response["content"]
            );
            this.insumosLocalizacao.forEach((il) => {
              if(il.dataPrevisaoControle != null){
                il.dataPrevisaoControle = this.dateTimeFormatPipe.transformhifem(this.dateNow.getDateFormatado(il.dataPrevisaoControle));
              }
            })
            console.log( this.insumosLocalizacao)
            let end = this.insumosLocalizacao.length - 1;
            loader.dismiss();
          },
          (error) => {
            loader.dismiss();
          }
        );
    }else{
      this.showLocalizacaoNulo();
    }
    
  }

  buscaInsumo(ev : any, tipo: string){
    let val = ev.target.value;
    if(this.insumosLocalizacao != undefined){
      if (val && val.trim() != '') {
          switch (tipo){
            case 'nome':
              this.insumosLocalizacao = this.insumosLocalizacao.filter((item) => {
                return (item.insumo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
              })
            break;
            case 'codalmox':
              this.insumosLocalizacao = this.insumosLocalizacao.filter((item) => {
                return (item.codigoalmoxarifado.toLowerCase().indexOf(val.toLowerCase()) > -1);
              })
            break;
            case 'lotelei':
              this.insumosLocalizacao = this.insumosLocalizacao.filter((item) => {
                return (item.loteLEI.toLowerCase().indexOf(val.toLowerCase()) > -1);
              })
            break;
            case 'sublotelei':
              this.insumosLocalizacao = this.insumosLocalizacao.filter((item) => {
                return (item.subloteLEI != null?item.subloteLEI.toLowerCase().indexOf(val.toLowerCase()) > -1:"");
              })
            break;
          }
      }
    }else{
      this.showListaVazia();
    }
  }

  onCancel(){
    this.carregaInsumos();
  }

  showListaVazia(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Não é possível pesquisar com a lista de insumos vazia!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();
  }

  showLocalizacaoNulo(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Localização não pode ser nulo!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
        }
      ]
    });
    alert.present();
  }

  liberarInsumo(il : InsumolocalizacaoDTO){
    console.log("liberarInsumo")
  }

  receberParaControle(il : InsumolocalizacaoDTO){
    let modal = this.modalCtrl.create('ReceberNoControlePage',{item : il});
    modal.onDidDismiss(() => {
      //this.getItens();
    });
    modal.present();
  }

  alterarPrevisao(il : InsumolocalizacaoDTO){
    let modal = this.modalCtrl.create('AlterarPrevisaoControlePage');
    modal.onDidDismiss(() => {
      //this.getItens();
    });
    modal.present();
  }


}
