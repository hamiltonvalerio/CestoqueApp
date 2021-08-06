import { LocalUser } from './../../models/local_user';
import { ColaboradorService } from './../../services/domain/colaborador.service';
import { ColaboradorDTO } from './../../models/colaborador.dto';
import { StorageService } from './../../services/storage.service';
import { DateNow } from './../../utils/datenow';
import { InsumolocalizacaoDTO } from './../../models/insumolocalizacao.dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReceberNoControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receber-no-controle',
  templateUrl: 'receber-no-controle.html',
})
export class ReceberNoControlePage {

  il: InsumolocalizacaoDTO;
  formGroup: FormGroup;
  colaborador: ColaboradorDTO;
  localUser: LocalUser = this.storage.getLocalUser();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public dateNow: DateNow,
    public storage: StorageService,
    public colaboradorService: ColaboradorService,) {

      this.il = navParams.get('item');

      this.formGroup = this.formBuilder.group({
        datarecebimento: [this.dateNow.getDateNow(),''],
      });
     
  }

  ionViewDidLoad() {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  receberInsumo(){

  }

  
}
