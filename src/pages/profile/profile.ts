import { ColaboradorService } from './../../services/domain/colaborador.service';
import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColaboradorDTO } from '../../models/colaborador.dto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  colaborador: ColaboradorDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: StorageService, 
    public colaboradorService: ColaboradorService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    console.log(localUser);
    console.log(localUser.email);
    if(localUser && localUser.email){
      this.colaboradorService.findByEmail(localUser.email).subscribe(response => {
        this.colaborador = response as ColaboradorDTO;
      },
      error => {
        if (error.status == 403){
          this.navCtrl.setRoot('HomePage');
        }
      });  
    }else{
      this.navCtrl.setRoot('HomePage');
    }
  }

  alterarSenha(){
    this.navCtrl.push('AlterarSenhaPage',{item : this.colaborador});  
  }

}
