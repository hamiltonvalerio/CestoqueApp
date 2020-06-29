import { ColaboradorService } from './../../services/domain/colaborador.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController,
    public colaboradorService: ColaboradorService,
    ) {

    this.formGroup = this.formBuilder.group({
      nome: ['',[Validators.required]],
      cpf: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      senha: ['',[Validators.required]],
      confirmarsenha: ['',[Validators.required]]
    }, {validator: this.MatchPassword}); 

  }

  private MatchPassword(AC: AbstractControl) {
    const newPassword = AC.get('senha').value // to get value in input tag
    const confirmPassword = AC.get('confirmarsenha').value // to get value in input tag
     if(newPassword != confirmPassword) {
         AC.get('confirmarsenha').setErrors( { MatchPassword: true } )
     } else {
         AC.get('confirmarsenha').setErrors(null);
     }
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  signupUser(){
    this.colaboradorService.insert(this.formGroup.value).subscribe(response => {
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

  focused() {
    console.log("focussed"); 
  }

  passwordAlert(){
    let alert = this.alertCtrl.create({
      title: 'Erro 401: Falha de autenticação',
      message: 'Email ou senha incorretos',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
    alert.present();
  }

}
