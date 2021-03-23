import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {

  url = "https://github.com/hamiltonvalerio/cestoqueManualLaTeX/blob/main/ManualCestoque.pdf";
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    window.open(this.url, '_blank', 'location=yes');
  }

}
