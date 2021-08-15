import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { InsumomovimentacaoDTO } from './../../models/insumomovimentacao.dto';
import { MovimentacaoDTO } from './../../models/movimentacao.dto';
import { LocalizacaoDTO } from './../../models/localizacao.dto';
import { DateTimeFormatPipe } from './../../utils/date-time-format';
import { LocalUser } from './../../models/local_user';
import { ColaboradorDTO } from './../../models/colaborador.dto';
import { InsumoService } from './../../services/domain/insumo.service';
import { ColaboradorService } from './../../services/domain/colaborador.service';
import { StorageService } from './../../services/storage.service';
import { DateNow } from './../../utils/datenow';
import { InsumolocalizacaoDTO } from './../../models/insumolocalizacao.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LiberarInsumoControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liberar-insumo-controle',
  templateUrl: 'liberar-insumo-controle.html',
})
export class LiberarInsumoControlePage {

  localizacoes: LocalizacaoDTO[] = [];
  localizacao: LocalizacaoDTO;
  paralocalizacoes: LocalizacaoDTO[] = [];
  paralocalizacao: LocalizacaoDTO;

  insumosLocalizacoes : InsumolocalizacaoDTO[] = [];
  insumosLocalizacoesSelecionados : InsumolocalizacaoDTO[];
  
  movimentacao: MovimentacaoDTO = {} as MovimentacaoDTO;
  mov : MovimentacaoDTO = {} as MovimentacaoDTO; 
  itemMov : InsumomovimentacaoDTO;

  movimentacaogrid: MovimentacaoDTO = {} as any; 
  datamovimentacao : string;

  localUser: LocalUser = this.storage.getLocalUser();

  il: InsumolocalizacaoDTO;

  hiddenselect : boolean = true;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public dateNow: DateNow,
    public dateTimeFormatPipe: DateTimeFormatPipe,
    public storage: StorageService,
    public colaboradorService: ColaboradorService,
    public insumoService: InsumoService,
    public localizacaoService: LocalizacaoService,
    public loadingCtrl: LoadingController,) {

      this.il = navParams.get('item');
      this.localizacao = this.il.localizacao;

      if(this.localizacao.aprovacao != null){
        if(this.localizacao.aprovacao == true){
          this.localizacaoService.findAllLocalizacoesFilhasByLocalizacaoPai(this.localizacao.id).subscribe(resp => {
            this.localizacoes = resp;
            this.localizacoes.forEach(val => {
              if(val.resultado != null){
                if(val.resultado == true){
                  this.paralocalizacao = val;
                  this.hiddenselect = true;
                }  
              }
            });
          });
          if(this.paralocalizacao == null){
            this.hiddenselect = false;
          }
        }else{
          this.hiddenselect = false;
        }  
      }else{
        this.hiddenselect = false;
      }


      this.movimentacao = {} as any;
      this.itemMov = {
        insumo: this.il.insumo, 
        quantidadeOrigem: this.il.quantidade,
        quantidadeMovimentada: 0,
        loteFornecedor: this.il.loteFornecedor,
        loteCR: this.il.loteCR,
        loteProducao: this.il.loteProducao,
        dataIrradiacao: this.il.dataIrradiacao,
        dataValidade: this.il.dataValidade,
        dataAprovacao: this.il.dataAprovacao,
        dataReproprovacao: this.il.dataReproprovacao,
        aprovado: this.il.aprovado,
        fieldsGarantiaQualidade: true,
        loteRecebimento: this.il.loteRecebimento,
        loteLEI: this.il.loteLEI,
        loteARM: this.il.loteARM,
        irradiado: this.il.irradiado,
        subloteLEI: this.il.subloteLEI,
        unidadeRecebida: this.il.unidadeRecebida,
        quantidadeVolume: this.il.quantidadeVolume,
        unidadeEntrada: this.il.unidadeEntrada,

        condambamostragemgc: this.il.condambamostragemgc,
        condambamostragemur: this.il.condambamostragemur,
        quantidadeDescartada: this.il.quantidadeDescartada,

        show: null,

        armario: this.il.armario,
        posicao: this.il.posicao,
        cas: this.il.cas,
      };
      

  }

  ionViewDidLoad() {
    this.datamovimentacao = this.dateNow.getDateNow();
    this.loadParaLocalizacao();
  }

  loadParaLocalizacao(){
    let loader = this.presentLoading();
    this.localizacaoService.findAll().subscribe((response) => {
      this.paralocalizacoes = response.sort();
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  valida(m : InsumomovimentacaoDTO) {
    console.log(m)
    if (m.descartado == true) {
      m.isDisabledutilizado = true;
    } else if (m.utilizado == true) {
      m.isDisableddescartado = true;
    } else {
      m.isDisabledutilizado = false;
      m.isDisableddescartado = false;
    }
  }

  inserirMovimentacao(){
    if(this.validarCampos()){
      return;
    }else{
      let qtdvazio : boolean = false;
      let qtdacimaorigem : boolean = false;
      this.mov  = {} as any;
      this.mov.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
      this.mov.localizacaoOrigem = this.localizacao;
      this.mov.localizacaoDestino = this.paralocalizacao;
      
     console.log(this.mov);
    }
    
  }

  validarCampos(){
    if(this.itemMov.quantidadeMovimentada <= 0){
      this.showMensagem("Campo quantidade não pode ser nulo!")
      return true;
    }
    if(!this.itemMov.utilizado && !this.itemMov.descartado){
      this.showMensagem("Escolha utilizado ou descartado!")
      return true;
    }
    return false;
  }

  showMensagem(msg : string){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: msg,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
        }
      ]
    });
    alert.present();
  }



}
