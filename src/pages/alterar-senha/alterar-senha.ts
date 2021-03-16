import { ColaboradorAlterPassDTO } from './../../models/ColaboradorAlterPassDTO';
import { ColaboradorService } from './../../services/domain/colaborador.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ColaboradorDTO } from './../../models/colaborador.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlterarSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-senha',
  templateUrl: 'alterar-senha.html',
})
export class AlterarSenhaPage {

  colab: ColaboradorDTO;
  colabAlterSenha : ColaboradorAlterPassDTO;
  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public colaboradorService: ColaboradorService,) {
      
      this.colab = navParams.get('item');

      this.formGroup = this.formBuilder.group({
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

 showInserOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Senha alterada com sucesso!',
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

  alterPassUser(){
    this.colabAlterSenha = this.formGroup.value;
    this.colabAlterSenha.email = this.colab.email;
    console.log(this.colab);
    console.log(this.colabAlterSenha);
    this.colaboradorService.alterarSenha(this.formGroup.value).subscribe(response => {
      this.showInserOk();
    },
    error => {
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarSenhaPage');
  }

}
