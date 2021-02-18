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
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { InsumoDTO } from '../../models/insumo.dto';
import { Console } from '@angular/core/src/console';

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
  datamovimentacao: Date = new Date();

  de: LocalizacaoDTO;
  para: LocalizacaoDTO;

  botaoMovimenta: boolean = true;

  fieldsGarantiaQualidade: boolean = true;

  aprovacao: string;

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
    public movimentacaoService: MovimentacaoService,) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroMovimentacaoPage');
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
    this.formGroup.reset();
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
      if(event.value.nome === "GARANTIA DA QUALIDADE"){
        this.fieldsGarantiaQualidade = false;
        console.log("teste: "+this.fieldsGarantiaQualidade);
      }else{
        this.fieldsGarantiaQualidade = true;
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
    //this.citemInsumo = event.value;
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
     
      console.log("entrou")
      return;
    }


    this.movimentacao = {} as any; 
    let itensInsumosMovimentacao : InsumomovimentacaoDTO[] = [];

    this.de = this.localizacao;
    this.movimentacao.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
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
      };
      itensInsumosMovimentacao.push(itemMov);
    });
    
    this.movimentacao.localizacaoOrigem = this.localizacao;
    if(this.localizacao.nome === "GARANTIA DA QUALIDADE"){
      //this.movimentacao.fieldsGarantiaQualidade = false;
    }else{
      //this.movimentacao.fieldsGarantiaQualidade = true;
    }
    this.movimentacao.localizacaoDestino = this.paralocalizacao;
    this.movimentacao.itens = itensInsumosMovimentacao;
    this.te = this.localizacao;
    this.botaoMovimenta = false;
    //console.log(this.movimentacao);

    //console.log(this.localizacao)
    //console.log(this.citemInsumoSelecionados);
    //console.log(this.paralocalizacao);
    //console.log(this.movimentacao);
  }

  inserirMovimentacao(){
    //console.log(this.movimentacao);

    this.mov  = {} as any;

    this.mov.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
    this.mov.localizacaoOrigem = this.localizacao;
    this.mov.localizacaoDestino = this.paralocalizacao;
    this.mov.itens = this.movimentacao.itens;

    this.movimentacaoService.insert(this.mov).subscribe(response => {
      this.showInsertOk();
    },
    error => {});
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
  

}
