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
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

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
    public insumoService: InsumoService,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiberarInsumoControlePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
