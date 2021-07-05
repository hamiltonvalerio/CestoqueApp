import { IonicSelectableComponent } from 'ionic-selectable';
import { ColaboradorDTO } from './../../models/colaborador.dto';
import { ColaboradorService } from './../../services/domain/colaborador.service';
import { PerfilService } from './../../services/domain/perfil.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { PerfilDTO } from '../../models/perfil.dto';

/**
 * Generated class for the VinculaPerfilUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vincula-perfil-usuario',
  templateUrl: 'vincula-perfil-usuario.html',
})
export class VinculaPerfilUsuarioPage {

  colaborador: ColaboradorDTO;
  perfis: PerfilDTO[];
  colaboradores: ColaboradorDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public perfilService: PerfilService,
    public colaboradorService: ColaboradorService) {
  }

  ionViewDidLoad() {
    this.loadColaboradores();
    this.loadPerfis();
  }

  registrar(){
    var result = false;
    var perfisNovos : PerfilDTO[] = [];
    if(this.colaborador == undefined){
      this.showSelecionaColaboirador()
    }else{
      this.perfis.forEach(r=>{
        if(r.selecionado == true){
          result = true;
          perfisNovos.push(r);
        }
      });
      if(!result){
        this.showSelecionaPerfil();
      }else{
        this.colaborador.perfis = perfisNovos;
        this.colaboradorService.updateComPerfil(this.colaborador).subscribe(response => {
          this.showUpdateOk();
        },
        error => {});
      }
    }
    
  }

  changeToggle(ev: Event,checked: boolean){
    //console.log(checked);
    //console.log(this.perfis);
  }

  colaboradorChange(event: {
    component: IonicSelectableComponent;
    value: ColaboradorDTO;
  }) {

    this.perfis.forEach(p => {
      if(event.value.perfis.find(element => element.descricao == p.descricao) != undefined){
        p.selecionado = true;
      }else{
        p.selecionado = false;
      }
    })
  }

  loadPerfis(){
    this.perfilService.findAll()
    .subscribe(response => {
      this.perfis = response.sort();
      //console.log(this.perfis);
    },
    error => {})
  }

  loadColaboradores(){
    this.colaboradorService.findAll()
    .subscribe(response => {
      this.colaboradores = response.sort();
      //console.log(this.colaboradores);
    },
    error => {})
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showInsertOk(){
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

  showSelecionaColaboirador(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Selecione um usuário!',
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

  showSelecionaPerfil(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Selecione pelo menos um perfil!',
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


}
