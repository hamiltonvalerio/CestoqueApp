import { PerfilService } from './../../services/domain/perfil.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-perfil',
  templateUrl: 'cadastro-perfil.html',
})
export class CadastroPerfilPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public perfilService: PerfilService) {

      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required]],
        descricao: ['',[Validators.required]]
      }, {});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPerfilPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  cadastrarPerfil(){
    this.perfilService.insert(this.formGroup.value).subscribe(response => {
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
