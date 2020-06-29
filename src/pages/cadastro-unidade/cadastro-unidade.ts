import { UnidadeService } from './../../services/domain/unidade.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroUnidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-unidade',
  templateUrl: 'cadastro-unidade.html',
})
export class CadastroUnidadePage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public unidadeService: UnidadeService) {

      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required]],
        sigla: ['',[Validators.required]]
        
      }, {}); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUnidadePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  cadastrarUnidade(){
    this.unidadeService.insert(this.formGroup.value).subscribe(response => {
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
