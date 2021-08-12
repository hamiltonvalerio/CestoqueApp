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
 * Generated class for the AlterarPrevisaoControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-previsao-controle',
  templateUrl: 'alterar-previsao-controle.html',
})
export class AlterarPrevisaoControlePage {
  
  il: InsumolocalizacaoDTO;
  formGroup: FormGroup;
  colaborador: ColaboradorDTO;
  localUser: LocalUser = this.storage.getLocalUser();
  dataprevisao: string;

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
    public insumoService: InsumoService) {

      this.il = navParams.get('item'); 
  
  }

  ionViewDidLoad() {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showInserOk(){
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

  alterarPrevisao(){
    let data : Date = this.dateTimeFormatPipe.transform(this.dataprevisao);
    const confirm = this.alertCtrl.create({
      title: 'Deseja alterar previsão?',
      message: '',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.insumoService.updatePrevisaoControle(this.il.id, this.storage.getLocalUser().nome, data).subscribe(resp => {
              this.showAlteradoOk();
            });
          }
        }
      ]
    });
    confirm.present();
  }

  showAlteradoOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Data de previsão alterada com sucesso!',
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
