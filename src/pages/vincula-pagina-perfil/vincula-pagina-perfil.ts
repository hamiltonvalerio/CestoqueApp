import { IonicSelectableComponent } from 'ionic-selectable';
import { PaginaService } from './../../services/domain/pagina.service';
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
  paginaItens: PaginaDTO;
  perfisItens: PerfilDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public perfilService: PerfilService,
    public alertCtrl: AlertController,
    public paginaService: PaginaService) {
  }

  registrar(){
    let paginaNova : PaginaDTO = {
      id: null,
      nome: this.pagina.pagina,
      perfis: [],
    };
    let perfisNovos : PerfilDTO[] = [];
    var result = false;
    if(Object.keys(this.pagina).length == 0){
      this.showSelecionaPagina();
    }else{
      this.perfis.forEach(r=>{
        if(r.selecionado == true){
          result = true;
          perfisNovos.push(r);
          paginaNova.perfis.push(r);
        }
      });
      if(!result){
        this.showSelecionaPerfil();
      }else{
        console.log(paginaNova)
        this.paginaService.insert(paginaNova).subscribe(response => {
          console.log(response)
          this.showInsertOk();
        },
        error => {
          
          this.showErroInsert();
        })
      }
    }
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

  showErroInsert(){
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Erro!',
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
    //console.log(checked);
    //console.log(this.perfis);
  }


  paginaChange(event: {
    component: IonicSelectableComponent,
    value: PaginasEnum
  }){ 
    this.paginaService.findByNomePagina(event.value['pagina']).subscribe(response => {
      this.paginaItens = response;
      this.perfilService.findByNomePagina(event.value['pagina']).subscribe(resp => {
        this.perfisItens = resp;
        if(this.paginaItens != null){
          this.perfis.forEach(p => {
            if(this.perfisItens.find(element => element.descricao == p.descricao) != undefined){
              p.selecionado = true;
            }else{
              p.selecionado = false;
            }
          });
        }else{
          this.perfis.forEach(p => {
            
              p.selecionado = false;
            
          });
        }
      });
    });

    

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
