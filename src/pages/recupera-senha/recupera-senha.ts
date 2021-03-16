import { ColaboradorService } from './../../services/domain/colaborador.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RecuperaSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recupera-senha',
  templateUrl: 'recupera-senha.html',
})
export class RecuperaSenhaPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController,
    public colaboradorService: ColaboradorService,) {

      this.formGroup = this.formBuilder.group({
        email: ['',[Validators.required, Validators.email]]
      }, {}); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperaSenhaPage');
  }

  recuperaSenhaUser(){
    this.colaboradorService.recuperarSenha(this.formGroup.value).subscribe(response => {
      this.showInserOk();
    },
    error => {
      this.showErro();
    });
  }

  showInserOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Recuperação efetuada com sucesso! Verifique seu email.',
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

  showErro(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Email não cadastrado.',
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
