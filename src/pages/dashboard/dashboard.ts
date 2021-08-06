import { StorageService } from './../../services/storage.service';
import { ColaboradorService } from './../../services/domain/colaborador.service';
import { ColaboradorDTO } from './../../models/colaborador.dto';
import { InsumoService } from './../../services/domain/insumo.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { createThis } from 'typescript';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  totalinsumos : number;
  colaborador: ColaboradorDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public insumoService: InsumoService,
    public colaboradorService: ColaboradorService,
    public storage: StorageService) {
  }

  ionViewDidLoad() {
    this.insumoService.findAll().subscribe((tot) => {
      this.totalinsumos = tot.length;
    })
    this.getPerfisUserLogado();
    
  }

  getPerfisUserLogado(){
    let localUser = this.storage.getLocalUser();
    if(Array.isArray(localUser.perfis) && !localUser.perfis.length){
      this.colaboradorService.findByEmail(localUser.email).subscribe(response => {
        this.colaborador = response;
        localUser.perfis = this.colaborador.perfis;
        localUser.nome = this.colaborador.nome;
        this.storage.setLocalUser(localUser);
      },
      error => {
        console.log("error")
        console.log(error)
      })
    }
  }

}
