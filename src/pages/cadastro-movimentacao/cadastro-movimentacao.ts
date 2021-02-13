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

  movimentacao: MovimentacaoDTO = {} as any;
  mov : MovimentacaoDTO;

  movimentacaogrid: MovimentacaoDTO = {} as any; 
  datamovimentacao: Date = new Date();

  de: LocalizacaoDTO;
  para: LocalizacaoDTO;

  botaoMovimenta: boolean = true;

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
    console.log('ionViewDidLoad CadastroMovimentacaoPage');
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
      this.citensInsumos = [];
      this.insumoService.findByLocalizacaoNoPage(event.value.id).subscribe(response => {
       
        //this.teste = this.teste.concat(response['content']);
        this.citensInsumos = response.sort();

      },
      error => {
        //loader.dismiss();
      });

      //this.citensInsumos = this.insumoService.findByLocalizacaoNoPage(event.value.id);

      /*this.citensInsumos = this.insumoService.findByLocalizacaoNoPage(event.value.id).filter(il => {
        return il.il.id.localizacao_id  === event.value.id;
      });*/

      /*if (this.port && this.port.id !== event.value.id) {
        this.port = null;
      }*/
    } else {
      this.citensInsumos = [];
      //this.citemInsumo = null;
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
    console.log(this.dateTimeFormatPipe.transform(this.datamovimentacao));
    console.log(this.localizacao);
    this.movimentacao = {} as any; 
    let itensInsumosMovimentacao : InsumomovimentacaoDTO[] = [];

    this.de = this.localizacao;
    this.movimentacao.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
    this.citemInsumoSelecionados.forEach(function (value){
      let itemMov : InsumomovimentacaoDTO = {
        insumo: value, 
        quantidadeOrigem: value.quantidade,
        quantidadeMovimentada: 0
      };
      itensInsumosMovimentacao.push(itemMov);
    });
    this.movimentacao.localizacaoOrigem = this.localizacao;
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

    this. mov.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
    this.mov.localizacaoOrigem = this.localizacao;
    this.mov.localizacaoDestino = this.paralocalizacao;
    this.mov.itens = this.movimentacao.itens;


    console.log(this.mov);

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

   /* this.citensnovaentrada.forEach(function(item, index, object) {
      if (item === cInsumoEntradaDTO) {
        object.splice(index, 1);
      }
    });
  if(this.citensnovaentrada.length == 0){
    this.botaoEntrada = true;
  }
  this.loadData();*/
  }
  

}
