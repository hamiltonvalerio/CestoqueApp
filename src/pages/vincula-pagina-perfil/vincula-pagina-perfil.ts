import { PaginasEnum } from './../../enums/paginas.enum';
import { PerfilService } from './../../services/domain/perfil.service';
import { PerfilDTO } from './../../models/perfil.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { PaginaDTO } from '../../models/pagina.dto';

/**
 * Generated class for the VinculaPaginaPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vincula-pagina-perfil',
  templateUrl: 'vincula-pagina-perfil.html',
})
export class VinculaPaginaPerfilPage {

  perfis: PerfilDTO[];
  paginas = [];
  pagina : any = {};


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public perfilService: PerfilService,
    public alertCtrl: AlertController,) {
  }

  registrar(){
    var result = false;
    if(Object.keys(this.pagina).length == 0){
      this.showSelecionaPagina();
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
        //inserir a pagina
      }



    }
    
    
    
    let perfisNovos : PerfilDTO[] = [];
    let paginaNova : PaginaDTO = {
      id: null,
      nome: this.pagina.pagina,
      perfis: [],
    };
    this.perfis.forEach(r=>{
      if(r.selecionado == true){
        perfisNovos.push(r);
        paginaNova.perfis.push(r);
      }
    });

    /* var result = false;
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
    }*/
    
  }

  ionViewDidLoad() {
    this.loadPerfis();
    this.loadEnumPaginas();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  loadEnumPaginas(){
    this.paginas = [];
    let cont = 0;
    for (const [propertyKey, propertyValue] of Object.entries(PaginasEnum)) {  
      cont++;
      if (!Number.isNaN(Number(propertyKey))) {  
        continue;  
    }  
    this.paginas.push({ pagina: propertyValue, nome: propertyKey, id: cont });  
    }  
  }

  loadPerfis(){
    this.perfilService.findAll()
    .subscribe(response => {
      this.perfis = response.sort();
    },
    error => {})
  }

  changeToggle(ev: Event,checked: boolean){
    console.log(checked);
    //console.log(this.perfis);
  }


  paginaChange(ev : Event){
    

  }

  showSelecionaPagina(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Selecione uma página!',
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
