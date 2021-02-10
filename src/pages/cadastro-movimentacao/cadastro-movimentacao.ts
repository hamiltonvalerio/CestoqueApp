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

  page : number = 0;

  citensInsumos : InsumoDTO[] = [];
  citemInsumo : InsumoDTO;

  teste = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController,
    public localizacaoService: LocalizacaoService,
    public dateTimeFormatPipe: DateTimeFormatPipe,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroMovimentacaoPage');
    this.loadLocalizacao();
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

  insumoChange(event: {
    component: IonicSelectableComponent;
    value: LocalizacaoDTO;
  }) {
    if (event.value) {
      this.citensInsumos = [];
      this.insumoService.findByLocalizacaoNoPage(event.value.id).subscribe(response => {
        let start = this.teste.length;
        //this.teste = this.teste.concat(response['content']);
        this.citensInsumos = response.sort();
        let end = this.teste.length -1;
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
    console.log("this.citemInsumo: "+this.citemInsumo);
    this.citemInsumo = event.value;
    console.log(event.value);
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
  

}
