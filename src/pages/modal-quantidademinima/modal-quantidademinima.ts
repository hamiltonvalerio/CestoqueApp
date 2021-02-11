import { InsumoService } from './../../services/domain/insumo.service';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the ModalQuantidademinimaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-quantidademinima',
  templateUrl: 'modal-quantidademinima.html',
})
export class ModalQuantidademinimaPage{

  evento;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public insumoService: InsumoService) {

    this.evento = this.navParams.get('evento');

  }


  ionViewDidLoad() {
    console.log(this.evento);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  salvarQuantidadeMinima(ev){
    this.insumoService.updateQuantidadeMinima(ev.id, ev.codlocalizacaoIE, ev.quantidademinima).subscribe(response => {
      this.showInserOk();
    },
    error => {});

    //console.log(ev);
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
