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
      console.log(this.insumosLocalizacoes);
    },
    error => {
      //loader.dismiss();
    });
  }

  loteLEIChange(event: {
    component: IonicSelectableComponent;
    value: InsumolocalizacaoDTO;
  }){
    console.log(event.value.loteLEI);
    this.insumoService.findInsumosLocalizacoesByLoteLEI(event.value.loteLEI).subscribe(response => {
      //this.citensInsumos = response.sort();
      this.insumosLocalizacoesSelecionados = response.sort();
     
    },
    error => {
      //loader.dismiss();
    });
  }


}
