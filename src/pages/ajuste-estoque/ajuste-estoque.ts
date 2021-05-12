import { InsumoajusteNewDTO } from './../../models/insumoajustenew.dto';
import { AjusteEstoqueService } from './../../services/domain/ajusteestoque.service';
import { InsumoajusteDTO } from './../../models/insumoajuste.dto';
import { InsumoEntradaDTO } from './../../models/insumoentrada.dto';
import { CInsumoEntradaDTO } from './../../models/cinsumoentrada.dto';
import { Subscription } from 'rxjs';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CInsumoDTO } from './../../models/cinsumo.dto';
import { UnidadeDTO } from './../../models/unidade.dto';
import { EntradaDTO } from './../../models/entrada.dto';
import { InsumoDTO } from './../../models/insumo.dto';
import { LocalizacaoDTO } from './../../models/localizacao.dto';
import { UnidadeService } from './../../services/domain/unidade.service';
import { DateTimeFormatPipe } from './../../utils/date-time-format';
import { EntradaService } from './../../services/domain/entrada.service';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { CategoriaService } from './../../services/domain/categoria.service';
import { InsumoService } from './../../services/domain/insumo.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import moment from 'moment';

/**
 * Generated class for the AjusteEstoquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuste-estoque',
  templateUrl: 'ajuste-estoque.html',
})
export class AjusteEstoquePage {
  dataAjuste= moment().format();

  citensInsumos : CInsumoDTO[] = [];
  citemInsumo : InsumoDTO;
  
  insumoEntrada : InsumoDTO;
  entrada : EntradaDTO;

  formControl : FormControl;
  formGroup : FormGroup;

  localizacoes: LocalizacaoDTO[] = [];
  localizacao: LocalizacaoDTO;

  unidadesEntrada: UnidadeDTO[] = [];
  unidadeEntrada: UnidadeDTO;

  unidadesRecebida: UnidadeDTO[] = [];
  unidadeRecebida: UnidadeDTO;

  portsSubscription: Subscription;

  citensEntrada : CInsumoEntradaDTO;
  citensEntradas : CInsumoEntradaDTO[] = [];
  cie : CInsumoEntradaDTO;

  insumoAjusteDTO : InsumoajusteDTO;

  page : number = 0;

  teste : InsumoajusteNewDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public insumoService: InsumoService,
    public categoriaService: CategoriaService,
    public loadingCtrl: LoadingController,
    public localizacaoService: LocalizacaoService,
    public entradaService: EntradaService,
    public dateTimeFormatPipe: DateTimeFormatPipe,
    public unidadeService: UnidadeService,
    public ajusteEstoqueService: AjusteEstoqueService,
    ) {

      this.formGroup = this.formBuilder.group({
        insumo: this.formControl,
        loteFornecedor: ['',], 
        loteCR: ['',], 
        loteARM: ['',],
        dataValidade: ['',],
        dataFabricacao: ['',],
        quantidade: ['',[Validators.required]],
        unidade: this.formControl,
      }, {});
  }

  ionViewDidLoad() {
    this.loadData();
    this.loadLocalizacao();
    this.loadUnidades();
  }

  loadLocalizacao(){
    let loader = this.presentLoading();
    this.localizacaoService.findAll().subscribe((response) => {
      this.localizacoes = response.sort();
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
    loteARM: null,
    dataIrradiacao: null, 
    dataVencIrradiacao: null,
    dataValidade: null,
    dataFabricacao: null,
    quantidade: 0, 
    valor: 0,
    valorTotal: 0,
    quantidadeetiquetas: 1};

   if(this.citensEntrada.insumo.unidade != null){
      this.unidadeEntrada = this.citensEntrada.insumo.unidade;
    }
    
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
            loteARM: null,
            dataIrradiacao: null, 
            dataVencIrradiacao: null,
            dataValidade: null,
            dataFabricacao: null,
            quantidade: 0, 
            valor: 0,
            valorTotal: 0,
            quantidadeetiquetas: 1};
          
          itensIns.push(insEnt);
        }); 


        this.citensEntradas = itensIns;
        //console.log(this.itensEntrada);
        loader.dismiss();
      },
      error => {
        loader.dismiss();
      })
    }

    insereunidadeEntradaDTO(event: {
      component: IonicSelectableComponent,
      value: any
    }) {
     this.unidadeEntrada = event.value;

     //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    }
  
  reset() {
    //console.log("teste");
    this.formGroup.reset();
  }

  insereAjuste(){
    this.insumoAjusteDTO = this.formGroup.value;
    this.insumoAjusteDTO.localizacao = this.localizacao;
    this.insumoAjusteDTO.dataAjuste = new Date(this.dataAjuste);

    /*this.ajusteEstoqueService.insert(this.insumoAjusteDTO).subscribe(response => {
      this.showInsertOk();
    },
    error => {});*/
    this.ajusteEstoqueService.insert(this.insumoAjusteDTO).subscribe(response => {
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


}
