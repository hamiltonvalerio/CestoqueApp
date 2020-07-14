import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { InsumoService } from '../../services/domain/insumo.service';
import { CurrencyMaskModule } from "ng2-currency-mask";
/**
 * Generated class for the CadastroInsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-insumo',
  templateUrl: 'cadastro-insumo.html',
})
export class CadastroInsumoPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public insumoService: InsumoService) {

      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required]],
        nomenclatura: ['',[Validators.required]],
        valor: ['',[]]
      }, {});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroInsumoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  cadastrarInsumo(){
    this.insumoService.insert(this.formGroup.value).subscribe(response => {
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
