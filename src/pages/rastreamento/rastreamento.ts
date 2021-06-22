import { InsumomovimentacaoDTO } from './../../models/insumomovimentacao.dto';
import { EntradaDTO } from './../../models/entrada.dto';
import { InsumoEntradaDTO } from './../../models/insumoentrada.dto';
import { InsumolocalizacaoDTO } from './../../models/insumolocalizacao.dto';
import { IonicSelectableComponent } from 'ionic-selectable';
import { InsumoService } from './../../services/domain/insumo.service';
import { MovimentacaoService } from './../../services/domain/movimentacao.service';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { DateTimeFormatPipe } from './../../utils/date-time-format';
import { DateNow } from './../../utils/datenow';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the RastreamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rastreamento',
  templateUrl: 'rastreamento.html',
})
export class RastreamentoPage {

  lotesLEI : string[];
  insumolocalizacao : InsumolocalizacaoDTO;
  insumosLocalizacoes : InsumolocalizacaoDTO[] = [];
  insumosLocalizacoesSelecionados : InsumolocalizacaoDTO[];
  insumoEntradaDTO : InsumoEntradaDTO;
  entradaDTO : EntradaDTO;
  insumosMovimentacoes : InsumomovimentacaoDTO[] = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dateNow: DateNow,
    public dateTimeFormatPipe: DateTimeFormatPipe,
    public localizacaoService: LocalizacaoService,
    public movimentacaoService: MovimentacaoService,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    this.loadLotesLEI();
  }

  loadLotesLEI(){
    this.insumoService.findLotesLEIInsumosLocalizacoes().subscribe(response => {
      this.insumosLocalizacoes = response.sort();
    },
    error => {
      //loader.dismiss();
    });
  }

  loteLEIChange(event: {
    component: IonicSelectableComponent;
    value: InsumolocalizacaoDTO;
  }){

    this.insumoService.findInsumoEntradaByLoteLEI(event.value.loteLEI).subscribe(response => {
      this.insumoEntradaDTO = response;
    },
    error => {
      //loader.dismiss();
    });


    this.insumoService.findInsumosLocalizacoesByLoteLEI(event.value.loteLEI).subscribe(response => {
      this.insumosLocalizacoesSelecionados = response.sort();
    },
    error => {
      //loader.dismiss();movimentacoesPorLoteLEI
    });


    this.movimentacaoService.movimentacoesPorLoteLEI(event.value.loteLEI).subscribe(response => {
      this.insumosMovimentacoes = response.sort();
      console.log(this.insumosMovimentacoes)
    },
    error => {
      //loader.dismiss();movimentacoesPorLoteLEI
    });
  }


}
