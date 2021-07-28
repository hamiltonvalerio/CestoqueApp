import { OrgaoService } from './../../services/domain/orgao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroOrgaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-orgao',
  templateUrl: 'cadastro-orgao.html',
})
export class CadastroOrgaoPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public orgaoService: OrgaoService,) {

      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required]],
        ativo: [false,],
      }, {});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroOrgaoPage');
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

  cadastrarOrgao(){
    this.orgaoService.insert(this.formGroup.value).subscribe(response => {
      this.showInserOk();
    },
    error => {});
  }
}
