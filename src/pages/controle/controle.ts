import { FormBuilder } from '@angular/forms';
import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { LocalizacaoDTO } from './../../models/localizacao.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public localizacaoService: LocalizacaoService,
    public loadingCtrl: LoadingController,) {



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

}
