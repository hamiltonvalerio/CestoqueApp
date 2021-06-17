import { LocalizacaoFilhaDTO } from './../../models/localizacaofilha.dto';
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

  fieldLocalizacaoFilha: boolean = true;

  localizacoes: LocalizacaoDTO[];

  

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
          aprovacao: [false,''],
          descarte: [false,''],
          utilizado: [false,''],
          almoxarifadoprincipal: [false,''],
          irradiacao: [false,''],
          localizacaofilha: [false,''],
          localizacao: [,],
        }, {}); 


  }

  ionViewDidLoad() {
    this.itemId = this.navParams.get('itemId');
    if(this.itemId != null){
      this.localizacaoService.findLocalizacaoById(this.itemId).subscribe((resp) => {
        this.updateLocalizacaoDTO = resp;
        this.formGroup = this.formBuilder.group({
          id: [this.updateLocalizacaoDTO.id,''],
          nome: [this.updateLocalizacaoDTO.nome,[Validators.required]],
          aprovacao: [this.updateLocalizacaoDTO.aprovacao,'']
        }, {}); 
      });
    }

    this.getItens();
    
  }

  getItens(){ 
    this.localizacaoService.findAllOrderByNome()
    .subscribe(response => {
      this.localizacoes = response.sort();
    },
    error => {})
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  cadastrarLocalizacao(){
    if(this.formGroup.get('localizacaofilha').value === true){
      let locfilha: LocalizacaoFilhaDTO = this.formGroup.value;
      locfilha.localizacaopai = locfilha.localizacao; 
      if(locfilha.id === null || locfilha.id === ''){
        if(locfilha.almoxarifadoprincipal == true){
            this.showAlmoxPrincFilha();
        }else{
          this.localizacaoService.insertfilha(locfilha).subscribe(response => {
            this.showInserOk();
          },
          error => {});
        }
      }else{
        if(locfilha.almoxarifadoprincipal == true){
          this.showAlmoxPrincFilha();
        }else{
          this.localizacaoService.updatefilha(locfilha).subscribe(response => {
            this.showUpdateOk();
          },
          error => {});
        }
      }

    }else{
      let loc: LocalizacaoDTO = this.formGroup.value;
      let almoxprincipal : LocalizacaoDTO;
      this.localizacaoService.findAlmoxPrincipal().subscribe((b) => {
        almoxprincipal = b;
      });
      console.log(almoxprincipal);
      if(loc.id === null || loc.id === ''){
        if(almoxprincipal != null){
          if(almoxprincipal.almoxarifadoprincipal == true){
            this.showExisteAlmoxPrinc();
          }else{
            this.localizacaoService.insert(loc).subscribe(response => {
              this.showInserOk();
            },
            error => {});
          }
        }else{
          this.localizacaoService.insert(loc).subscribe(response => {
            this.showInserOk();
          },
          error => {});
        } 
      }else{
        if(almoxprincipal != null){
          if(loc.id == almoxprincipal.id){
            this.localizacaoService.update(loc).subscribe(response => {
              this.showUpdateOk();
            },
            error => {});
          }else{
            if(loc.almoxarifadoprincipal == true){
              this.showExisteAlmoxPrinc();
            }else{
              this.localizacaoService.update(loc).subscribe(response => {
                this.showUpdateOk();
              },
              error => {});
            }
          }
        }else{
          this.localizacaoService.update(loc).subscribe(response => {
            this.showUpdateOk();
          },
          error => {});
        }
      }
    }
  }

  showAlmoxPrincFilha(){
    let alert = this.alertCtrl.create({
      title: 'Erra',
      message: 'Sublocalização não pode ser principal!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
           
          }
        }
      ]
    });
    alert.present();
  }

  showExisteAlmoxPrinc(){
    let alert = this.alertCtrl.create({
      title: 'Erra',
      message: 'Já existe um almoxarifado principal!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
           
          }
        }
      ]
    });
    alert.present();
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

  validalocalizacaofilha(){
    if(this.formGroup.get('localizacaofilha').value === true){
      this.fieldLocalizacaoFilha = false;
    }else{
      this.fieldLocalizacaoFilha = true;
    }
  }

}
