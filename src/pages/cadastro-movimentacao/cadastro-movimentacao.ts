import { DateNow } from './../../utils/datenow';
import { InsumolocalizacaoDTO } from './../../models/insumolocalizacao.dto';
import { MovimentacaoService } from './../../services/domain/movimentacao.service';
import { InsumomovimentacaoDTO } from './../../models/insumomovimentacao.dto';
import { MovimentacaoDTO } from './../../models/movimentacao.dto';
import { CInsumoDTO } from './../../models/cinsumo.dto';
import { IonicSelectableComponent } from 'ionic-selectable';
import { DateTimeFormatPipe } from './../../utils/date-time-format';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { InsumoService } from './../../services/domain/insumo.service';
import { LocalizacaoDTO } from './../../models/localizacao.dto';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { InsumoDTO } from '../../models/insumo.dto';
import { Console } from '@angular/core/src/console';
import moment from 'moment';

/**
 * Generated class for the CadastroMovimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-movimentacao',
  templateUrl: 'cadastro-movimentacao.html',
})
export class CadastroMovimentacaoPage {
  formControl : FormControl;
  formGroup : FormGroup;

  localizacoes: LocalizacaoDTO[] = [];
  localizacao: LocalizacaoDTO;
  paralocalizacoes: LocalizacaoDTO[] = [];
  paralocalizacao: LocalizacaoDTO;

  te : LocalizacaoDTO = {} as any;;

  page : number = 0;

  citensInsumos : InsumoDTO[] = [];
  citemInsumoSelecionados : InsumoDTO[];

  insumosLocalizacoes : InsumolocalizacaoDTO[] = [];
  insumosLocalizacoesSelecionados : InsumolocalizacaoDTO[];


  movimentacao: MovimentacaoDTO = {} as any;
  mov : MovimentacaoDTO;

  movimentacaogrid: MovimentacaoDTO = {} as any; 
  datamovimentacao : string;

  de: LocalizacaoDTO;
  para: LocalizacaoDTO;

  botaoMovimenta: boolean = true;

  fieldsGarantiaQualidade: boolean = true;
  fieldsAlmoxarifadoPrincipal: boolean = true;
  fieldsIrradiacao: boolean = true;
  aprovacao: string;

  @ViewChild('insumoComponent') insumoComponent: IonicSelectableComponent;

 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController,
    public localizacaoService: LocalizacaoService,
    public dateTimeFormatPipe: DateTimeFormatPipe,
    public movimentacaoService: MovimentacaoService,
    public dateNow: DateNow,) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroMovimentacaoPage');
    this.datamovimentacao = this.dateNow.getDateNow();
    this.loadLocalizacao();
    this.loadParaLocalizacao();
  }

  dismiss() {
    //this.navCtrl.push('EntradaPage', {}, {animate: true, direction: 'forward'});
    this.navCtrl.popToRoot();
    //this.viewCtrl.dismiss();
  }

  reset() {
    //console.log("teste");
    this.insumosLocalizacoesSelecionados = [];
    this.movimentacao.itens = [];
    this.paralocalizacao = null;
  }

  clear() {
    this.insumoComponent.clear();
    this.insumoComponent.close();
  }

  toggleItems() {
    this.insumoComponent.toggleItems(this.insumoComponent.itemsToConfirm.length ? false : true);
  }

  confirm() {
    this.insumoComponent.confirm();
    this.insumoComponent.close();
  }

  loadLocalizacao(){
    let loader = this.presentLoading();
    this.localizacaoService.findAllInsumoLocalizacao().subscribe((response) => {
      this.localizacoes = response.sort();
      loader.dismiss();
    });
  }

  loadParaLocalizacao(){
    let loader = this.presentLoading();
    this.localizacaoService.findAll().subscribe((response) => {
      this.paralocalizacoes = response.sort();
      loader.dismiss();
    });
  }

  insumoChange(event: {
    component: IonicSelectableComponent;
    value: LocalizacaoDTO;
  }) {
    if (event.value) {
      this.reset();
      if(event.value.aprovacao === true){
        this.fieldsGarantiaQualidade = false;
      }else{
        this.fieldsGarantiaQualidade = true;
      }
      if(event.value.almoxarifadoprincipal === true){
        this.fieldsAlmoxarifadoPrincipal = false;
      }else{
        this.fieldsAlmoxarifadoPrincipal = true;
      }
      if(event.value.irradiacao === true){
        this.fieldsIrradiacao = false;
      }else{
        this.fieldsIrradiacao = true;
      }
      this.citensInsumos = [];
      this.insumoService.findByLocalizacaoNoPage(event.value.id).subscribe(response => {
        //this.citensInsumos = response.sort();
        this.insumosLocalizacoes = response.sort();
       
      },
      error => {
        //loader.dismiss();
      });
     

    } else {
      this.citensInsumos = [];
      this.insumosLocalizacoes = [];
    }
  }

  imprimeItem(event: {
    component: IonicSelectableComponent;
    value: CInsumoDTO;
  }) {
    
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  doInfinite(infiniteScroll){
    this.page++;
    setTimeout(() => {
      infiniteScroll.component.endInfiniteScroll();
    }, 1000);
  }
  
  gerarGridMovimentacao(){
    if(this.datamovimentacao == null || this.localizacao == null || this.paralocalizacao == null || (typeof this.insumosLocalizacoesSelecionados == 'undefined')){
      return;
    }

    this.movimentacao = {} as any; 
    let itensInsumosMovimentacao : InsumomovimentacaoDTO[] = [];
    this.de = this.localizacao;
    this.movimentacao.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);

    const confirm = this.alertCtrl.create({
      title: 'QUANTIDADES',
      message: 'Deseja incluir as quantidades totais nos insumos para movimentação?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.insumosLocalizacoesSelecionados.forEach(function (value){
              let itemMov : InsumomovimentacaoDTO = {
                insumo: value.insumo, 
                quantidadeOrigem: value.quantidade,
                quantidadeMovimentada: 0,
                loteFornecedor: value.loteFornecedor,
                loteCR: value.loteCR,
                loteProducao: value.loteProducao,
                dataIrradiacao: value.dataIrradiacao,
                dataValidade: value.dataValidade,
                dataAprovacao: value.dataAprovacao,
                dataReproprovacao: value.dataReproprovacao,
                aprovado: value.aprovado,
                fieldsGarantiaQualidade: true,
                loteRecebimento: value.loteRecebimento,
                loteLEI: value.loteLEI,
                loteARM: value.loteARM,
                irradiado: value.irradiado,
                subloteLEI: value.subloteLEI,
                unidadeRecebida: value.unidadeRecebida,
                quantidadeVolume: value.quantidadeVolume,
                unidadeEntrada: value.unidadeEntrada,
        
                condambamostragemgc: value.condambamostragemgc,
                condambamostragemur: value.condambamostragemur,
                quantidadeDescartada: value.quantidadeDescartada,
        
                show: null,
        
                armario: value.armario,
                posicao: value.posicao,
                cas: value.cas,
              };
              itensInsumosMovimentacao.push(itemMov);
            });
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.insumosLocalizacoesSelecionados.forEach(function (value){
              let itemMov : InsumomovimentacaoDTO = {
                insumo: value.insumo, 
                quantidadeOrigem: value.quantidade,
                quantidadeMovimentada: value.quantidade,
                loteFornecedor: value.loteFornecedor,
                loteCR: value.loteCR,
                loteProducao: value.loteProducao,
                dataIrradiacao: value.dataIrradiacao,
                dataValidade: value.dataValidade,
                dataAprovacao: value.dataAprovacao,
                dataReproprovacao: value.dataReproprovacao,
                aprovado: value.aprovado,
                fieldsGarantiaQualidade: true,
                loteRecebimento: value.loteRecebimento,
                loteLEI: value.loteLEI,
                loteARM: value.loteARM,
                irradiado: value.irradiado,
                subloteLEI: value.subloteLEI,
                unidadeRecebida: value.unidadeRecebida,
                quantidadeVolume: value.quantidadeVolume,
                unidadeEntrada: value.unidadeEntrada,
        
                condambamostragemgc: value.condambamostragemgc,
                condambamostragemur: value.condambamostragemur,
                quantidadeDescartada: value.quantidadeDescartada,
        
                show: null,
        
                armario: value.armario,
                posicao: value.posicao,
                cas: value.cas,
              };
              itensInsumosMovimentacao.push(itemMov);
            });
          }
        }
      ]
    });
    confirm.present();

    this.movimentacao.localizacaoOrigem = this.localizacao;
    if(this.localizacao.aprovacao === true){
      this.fieldsGarantiaQualidade = false;
    }else{
      this.fieldsGarantiaQualidade = true;
    }
    this.movimentacao.localizacaoDestino = this.paralocalizacao;
    this.movimentacao.itens = itensInsumosMovimentacao;
    this.te = this.localizacao;
    this.botaoMovimenta = false;
  }

  inserirMovimentacao(){
    this.botaoMovimenta = true;
    let qtdvazio : boolean = false;
    let qtdacimaorigem : boolean = false;
    this.mov  = {} as any;

    this.mov.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
    this.mov.localizacaoOrigem = this.localizacao;
    this.mov.localizacaoDestino = this.paralocalizacao;
    this.mov.itens = this.movimentacao.itens;

    console.log(this.mov.itens);
    if(this.mov.localizacaoDestino.aprovacao == true){
      this.mov.itens.forEach((f) => {
        f.dataPrevisaoControle = this.dateNow.addDaysStartingNow(15);
      });
    }

    this.mov.itens.forEach(element => {
      if(element.quantidadeMovimentada != null){
        if(element.quantidadeMovimentada == 0){
          qtdvazio = true;  
        }else if(element.quantidadeMovimentada > element.quantidadeOrigem){
          qtdacimaorigem = true;
        }else{
          qtdvazio = false;

          if(element.utilizado == true){
            let valor = element.quantidadeMovimentada;
            element.quantidadeUtilizada = valor;
            element.quantidadeMovimentada = element.quantidadeOrigem - element.quantidadeMovimentada;
          }
          if(element.descartado == true){
            let valor = element.quantidadeMovimentada;
            element.quantidadeDescartada = valor;
            element.quantidadeMovimentada = element.quantidadeOrigem - element.quantidadeMovimentada;
          }

        }
      }else{
        qtdvazio = true; 
      }


      console.log(element)
    });

    //console.log(this.mov);
    
    if(qtdvazio){
      this.showQtdVazio();
    }else if(qtdacimaorigem){
      this.showQtdAcimaDaOrigem();
    }else{
      this.movimentacaoService.insert(this.mov).subscribe(response => {
        this.showInsertOk();
      },
      error => {});
    }
  }

  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Cadastro efetuado com sucesso!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  showQtdVazio(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Não é possível inserir movimentação sem quantidade!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
        }
      ]
    });
    alert.present();
  }

  showQtdAcimaDaOrigem(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Quantidade de movimentação não pode ser maior que a quantidade de origem!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
        }
      ]
    });
    alert.present();
  }

  showQtdVazio2(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Não é possível inserir movimentação sem quantidade!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
        }
      ]
    });
    alert.present();
  }

  excluiItem(insumomovimentacaoDTO: InsumomovimentacaoDTO){

  this.movimentacao.itens.forEach(function(item, index, object) {
      if (item === insumomovimentacaoDTO) {
        object.splice(index, 1);
      }
    });
    if(this.movimentacao.itens.length == 0){
      this.botaoMovimenta = true;
    }
  //this.loadData();
  }

  limpar(){
    this.datamovimentacao = null;
    this.localizacao = null;
    this.paralocalizacao = null;
    this.insumosLocalizacoesSelecionados = [];
  }

  toggleDetails(show, i) {
    this.movimentacao.itens.map(( _ , index ) => { 
      if (index == i ) {
         _.show = !_.show 
        }});
  }

  valida(m : InsumomovimentacaoDTO) {
    if (m.descartado == true) {
      m.isDisabledutilizado = true;
    } else if (m.utilizado == true) {
      m.isDisableddescartado = true;
    } else {
      m.isDisabledutilizado = false;
      m.isDisableddescartado = false;
    }
  }
  

}
