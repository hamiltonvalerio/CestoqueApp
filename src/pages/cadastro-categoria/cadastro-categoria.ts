import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from './../../services/domain/categoria.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

/**
 * Generated class for the CadastroCategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-categoria',
  templateUrl: 'cadastro-categoria.html',
})
export class CadastroCategoriaPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public categoriaService: CategoriaService) {
      
      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required]]
      }, {});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCategoriaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  cadastrarCategoria(){
    this.categoriaService.insert(this.formGroup.value).subscribe(response => {
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
