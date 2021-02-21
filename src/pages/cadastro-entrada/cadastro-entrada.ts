import { UnidadeService } from './../../services/domain/unidade.service';
import { UnidadeDTO } from './../../models/unidade.dto';
import { DateTimeFormatPipe } from './../../utils/date-time-format';
import { Constants } from './../../utils/contants';
import { EntradaService } from './../../services/domain/entrada.service';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { FornecedorDTO } from './../../models/fornecedor.dto';
import { FornecedorService } from './../../services/domain/fornecedor.service';
import { CInsumoEntradaDTO } from './../../models/cinsumoentrada.dto';
import { CInsumoDTO } from './../../models/cinsumo.dto';
import { CategoriaDTO } from './../../models/categoria.dto';
import { InsumoEntradaDTO } from './../../models/insumoentrada.dto';
import { EntradaDTO } from './../../models/entrada.dto';
import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { InsumoDTO } from './../../models/insumo.dto';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController, ScrollEvent, DateTime } from 'ionic-angular';
import { InsumoService } from '../../services/domain/insumo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Subscription, TestScheduler } from 'rxjs';
import { LocalizacaoDTO } from '../../models/localizacao.dto';
import * as moment from 'moment';


/**
 * Generated class for the CadastroEntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-entrada',
  templateUrl: 'cadastro-entrada.html',
})
export class CadastroEntradaPage {

  //itensInsumosxa : InsumoDTO[] = [];

  insumoEntrada : InsumoDTO;

  entrada : EntradaDTO;
  
  numeronf : number;
  numLIA : string;
  numProcesso: string;
  numRequisicao: string;
  dataEntrada: Date;
  
  //itensInsumosx : InsumoDTO;
  
  formControl : FormControl;
  formGroup : FormGroup;

  quantidade : number;
  valor: number;
  botaoEntrada: boolean = true;

  //usando classe
  citensInsumos : CInsumoDTO[] = [];
  citemInsumo : InsumoDTO;

  citensEntrada : CInsumoEntradaDTO;
  citensEntradas : CInsumoEntradaDTO[] = [];
  citensnovaentrada : CInsumoEntradaDTO[] = []; 
  cie : CInsumoEntradaDTO;

  fornecedores: FornecedorDTO[] = [];
  fornecedor : FornecedorDTO;

  localizacoes: LocalizacaoDTO[] = [];
  localizacao: LocalizacaoDTO;

  unidadesRecebida: UnidadeDTO[] = [];
  unidadeRecebida: UnidadeDTO;

  unidadesEntrada: UnidadeDTO[] = [];
  unidadeEntrada: UnidadeDTO;

  page : number = 0;

  portsSubscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController,
    public fornecedorService: FornecedorService,
    public localizacaoService: LocalizacaoService,
    public entradaService: EntradaService,
    public dateTimeFormatPipe: DateTimeFormatPipe,
    public unidadeService: UnidadeService
    ) {
      
     

    this.formGroup = this.formBuilder.group({
      insumo: this.formControl,
      loteFornecedor: ['',], 
      loteCR: ['',], 
      dataIrradiacao: ['',],
      dataValidade: ['',],
      quantidade: ['',[Validators.required]],
      valor: ['',],
      valorTotal: ['',],
      unidadeRecebida: ['',],
      unidadeEntrada: ['',],
    }, {});
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroEntradaPage');
    this.loadData();
    this.loadFornecedor();
    this.loadLocalizacao();
    this.loadUnidades();
    //console.log("oia"+this.fornecedor);
  }

  

  dismiss() {
    //this.navCtrl.push('EntradaPage', {}, {animate: true, direction: 'forward'});
    this.navCtrl.popToRoot();
    //this.viewCtrl.dismiss();
  }

  searchInsumo(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();
    if (this.portsSubscription) {
      this.portsSubscription.unsubscribe();
    }

    if (!text) {
      // Close any running subscription.
      if (this.portsSubscription) {
        this.portsSubscription.unsubscribe();
      }

      //event.component.items = this.portService.getPorts(1, 15);
      
      // Enable and start infinite scroll from the beginning.
      //this.page = 2;
      event.component.endSearch();
      event.component.enableInfiniteScroll();
      return;
    }
  
    this.portsSubscription = this.insumoService.findAll().subscribe(ports => {
      // Subscription will be closed when unsubscribed manually.
      if (this.portsSubscription.closed) {
        return;
      }

      event.component.items = this.filterPorts(ports, text);
      event.component.endSearch();
    });
  }

  filterPorts(ports: InsumoDTO[], text: string) {
    return ports.filter(port => {
      return port.nomecodalmox.toLowerCase().indexOf(text) !== -1 ;
    });
  }


  doInfinite(infiniteScroll){
    this.page++;
    this.loadData();
    setTimeout(() => {
      infiniteScroll.component.endInfiniteScroll();
    }, 1000);
  }


  loadData(){
    let loader = this.presentLoading();
    let itensIns : InsumoEntradaDTO[] = [];
    
    this.insumoService.findTotosPaginado(this.page, 30)
      .subscribe((response) => {
        let start = this.citensEntradas.length;
          this.citensInsumos = this.citensInsumos.concat(response['content']);
        let end = this.citensEntradas.length - 1;
        this.citensInsumos.forEach(function (value) {
          let insEnt : CInsumoEntradaDTO = {
            insumo: value, 
            loteFornecedor: null, 
            loteCR: null, 
            dataIrradiacao: null, 
            dataVencIrradiacao: null,
            dataValidade: null,
            quantidade: 0, 
            valor: 0,
            valorTotal: 0};
          
          itensIns.push(insEnt);
        }); 

        console.log("ITENSS "+itensIns[1].insumo.codigoalmox);

        this.citensEntradas = itensIns;
        //console.log(this.itensEntrada);
        loader.dismiss();
      },
      error => {
        loader.dismiss();
      })
    }

    loadFornecedor(){
      let loader = this.presentLoading();

      this.fornecedorService.findAll().subscribe((response) => {
        this.fornecedores = response.sort();
        this.fornecedorService.findByNome("almoxarifado central").subscribe((resp)=>{
          this.fornecedor = resp[0];
        })
        //console.log(this.fornecedores);
        loader.dismiss();
      });    
    }

    loadUnidades(){
      let loader = this.presentLoading();
      this.unidadeService.findAll().subscribe((response) => {
        this.unidadesRecebida = response.sort();
        this.unidadesEntrada = response.sort();
        loader.dismiss();
      });
        
    }

    buscaFornecedor(event: {
      component: IonicSelectableComponent,
      text: string
    }) {
     //this.fornecedor = {insumo: event.value, quantidade: 0, valor: 0};
     let text = event.text.trim().toLowerCase();
     console.log("Busca esse:"+text);
     this.fornecedorService.findByNome(text).subscribe((response) => {
      this.fornecedores = response.sort();
      //console.log(this.fornecedores);
    });
          //console.log('buscaFornecedor::', text);
    }

    
    loadLocalizacao(){
      let loader = this.presentLoading();
      this.localizacaoService.findAll().subscribe((response) => {
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

    

    insereListaEntrada() {
      
      this.cie = this.formGroup.value;
      this.cie.insumo.unidade = this.unidadeRecebida;
      console.log(this.cie);


      this.citensnovaentrada.push(this.formGroup.value);
      
      
      //calcular e gravar unidades


      this.botaoEntrada = false;
      this.reset();
      //console.log('this.numeronf',this.numeronf);
      //console.log('this.formGroup.value',this.citensnovaentrada);
    }
  
    insereInsumoEntradaDTO(event: {
      component: IonicSelectableComponent,
      value: any
    }) {
    
    this.insumoEntrada = event.value;
    this.insumoEntrada.unidade = this.unidadeEntrada;

     this.citensEntrada = {
      insumo: this.insumoEntrada,
      loteFornecedor: null, 
      loteCR: null, 
      dataIrradiacao: null, 
      dataVencIrradiacao: null,
      dataValidade: null,
      quantidade: 0, 
      valor: 0,
      valorTotal: 0};

     if(this.citensEntrada.insumo.unidade != null){
        this.unidadeEntrada = this.citensEntrada.insumo.unidade;
      }
      console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    }

    insereunidadeRecebidaDTO(event: {
      component: IonicSelectableComponent,
      value: any
    }) {
     this.unidadeRecebida = event.value;

     //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    }

    insereunidadeEntradaDTO(event: {
      component: IonicSelectableComponent,
      value: any
    }) {
     this.unidadeEntrada = event.value;

     //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    }

    insereFornecedorEntradaDTO(event: {
      component: IonicSelectableComponent,
      value: any
    }) {
     //this.fornecedor = {insumo: event.value, quantidade: 0, valor: 0};

     //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    }



    cadastrarInsumo(){
      let dto = Object.assign({});
      dto = Object.assign(dto,this.formGroup.value);
     
      //let newDto : InsumoNewDTO;
      //newDto.nome = dto.nome;
      //newDto.valor = +dto.valor;
      console.log("aqui");
      console.log(dto);
      /*this.insumoService.insert(this.formGroup.value).subscribe(response => {
        this.showInserOk();
      },
      error => {});*/
    }

    reset() {
      //console.log("teste");
      this.formGroup.reset();
    }

    excluiItem(cInsumoEntradaDTO: CInsumoEntradaDTO){

      this.citensnovaentrada.forEach(function(item, index, object) {
        if (item === cInsumoEntradaDTO) {
          object.splice(index, 1);
        }
      });
    if(this.citensnovaentrada.length == 0){
      this.botaoEntrada = true;
    }
    this.loadData();
    }

    inserirEntrada(){
      this.entrada = {} as any;    
      this.citensnovaentrada.forEach(function(item, index, object){
        if(item.loteFornecedor === null || item.loteFornecedor === ""){
          item.loteFornecedor = null;
        }else if(item.loteFornecedor.trim() === ""){
          item.loteFornecedor = null;
        }
        if(item.loteCR === null || item.loteCR === "" ){
          item.loteCR = null;
        }
        
        if(item.valorTotal != null && item.quantidade != null){
          item.valor = item.valorTotal / item.quantidade;
        }


      });
      console.log(this.dataEntrada);
      this.entrada.dataEntrada = this.dateTimeFormatPipe.transform(this.dataEntrada);
      //this.entrada.dataEntrada = moment(this.dataEntrada).format('MM/DD/YYYY HH:mm');
      this.entrada.numLIA = this.numLIA;
      this.entrada.numProcesso = this.numProcesso;
      this.entrada.numRequisicao = this.numRequisicao;
      this.entrada.itens = this.citensnovaentrada;
      this.entrada.localizacao = this.localizacao;
      console.log("this.entrada2: "+this.entrada);
      this.entradaService.insert(this.entrada).subscribe(response => {
        this.showInsertOk();
      },
      error => {});
      //console.log(this.entrada)
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

  

  /*async filtraInsumo(evt){
    this.itensInsumos = this.getInsumos();
    const busca = evt.srcElement.value;

    if (!busca) {
      return;
    }

    this.itensInsumos = this.itensInsumos.filter(insumo => {
      
      if (insumo.nome && busca) {
        //console.log(insumo.nome + " --- "+busca);
        return (insumo.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1);
      }
    });
    //console.log(evt.srcElement.value);
  }*/

  filtraInsumo(evt){
    const busca = evt.srcElement.value;
    //console.log(busca);
    if (!busca) {
      return this.loadData();
    }
    return this.citensEntradas = this.citensEntradas.filter((ine) => {
      return (ine.insumo.nome.toLowerCase().includes(busca.toLowerCase()));
    });

  }

  insereLista(){
   
    

  }




    
  

}
