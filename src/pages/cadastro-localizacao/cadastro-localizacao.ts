import { LocalizacaoService } from './../../services/domain/localizacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroLocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-localizacao',
  templateUrl: 'cadastro-localizacao.html',
})
export class CadastroLocalizacaoPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public localizacaoService: LocalizacaoService) {

      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required]]
        
      }, {}); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroLocalizacaoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  cadastrarLocalizacao(){
    this.localizacaoService.insert(this.formGroup.value).subscribe(response => {
      this.showInserOk();
    },
    error => {});
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

}
