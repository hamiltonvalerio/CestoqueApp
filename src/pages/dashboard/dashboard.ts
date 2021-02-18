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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public insumoService: InsumoService,) {
  }

  ionViewDidLoad() {
    this.insumoService.findAll().subscribe((tot) => {
      this.totalinsumos = tot.length;
    })
  }

}
