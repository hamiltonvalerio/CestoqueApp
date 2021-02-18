import { LocalizacaoDTO } from './../../models/localizacao.dto';
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

  updateLocalizacaoDTO: LocalizacaoDTO;

  itemId;

  constructor(public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public localizacaoService: LocalizacaoService
    ) {

      this.formGroup = this.formBuilder.group({
          id: ['',''],
          nome: ['',[Validators.required]],
          aprovacao: [false,'']
        }, {}); 


  }

  ionViewDidLoad() {
    this.itemId = this.navParams.get('itemId');
    if(this.itemId != null){
      this.localizacaoService.findById(this.itemId).subscribe((resp) => {
        this.updateLocalizacaoDTO = resp;
        this.formGroup = this.formBuilder.group({
          id: [this.updateLocalizacaoDTO[0].id,''],
          nome: [this.updateLocalizacaoDTO[0].nome,[Validators.required]],
          aprovacao: [this.updateLocalizacaoDTO[0].aprovacao,'']
        }, {}); 
      });
    }
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  cadastrarLocalizacao(){
    let loc: LocalizacaoDTO = this.formGroup.value;
    console.log(loc)
    if(loc.id === null || loc.id === ''){
      this.localizacaoService.insert(this.formGroup.value).subscribe(response => {
        this.showInserOk();
      },
      error => {});
    }else{
      this.localizacaoService.update(this.formGroup.value).subscribe(response => {
        this.showUpdateOk();
      },
      error => {});
    }

    


    
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

  showUpdateOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Cadastro atualizado com sucesso!',
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
