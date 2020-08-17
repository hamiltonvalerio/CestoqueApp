import { CategoriaDTO } from './../../models/categoria.dto';
import { InsumoEntradaDTO } from './../../models/insumoentrada.dto';
import { EntradaDTO } from './../../models/entrada.dto';
import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { InsumoDTO } from './../../models/insumo.dto';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { InsumoService } from '../../services/domain/insumo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the CadastroEntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-entrada',
  templateUrl: 'cadastro-entrada.html',
})
export class CadastroEntradaPage {

  itensInsumosxa : InsumoDTO[] = [];
  entrada : EntradaDTO;
  itensEntrada : InsumoEntradaDTO[] = [];
  cate : CategoriaDTO[] = [{id:"1",nome: "nome"}];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController) {
      
      
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroEntradaPage');
    this.loadData();
  }

  

  dismiss() {
    this.viewCtrl.dismiss();
  }

  loadData(){
    let loader = this.presentLoading();
    let itensIns : InsumoEntradaDTO[] = [];
    
    this.insumoService.findTodos()
      .subscribe((response) => {
        this.itensInsumosxa = response.sort();
        this.itensInsumosxa.forEach(function (value) {
          let insEnt : InsumoEntradaDTO = {insumo: value, quantidade: 0, valor: 0};
          
          itensIns.push(insEnt);
        }); 
        this.itensEntrada = itensIns;
        //console.log(this.itensEntrada);
        loader.dismiss();
      },
      error => {
        loader.dismiss();
      })
    }


    presentLoading() {
      let loader = this.loadingCtrl.create({
        content: "Aguarde..."
      });
      loader.present();
      return loader;
    }

    entradaTeste(o:InsumoEntradaDTO){
      console.log(o);
    }


  /*async filtraInsumo(evt){
    this.itensInsumos = this.getInsumos();
    const busca = evt.srcElement.value;

    if (!busca) {
      return;
    }

    this.itensInsumos = this.itensInsumos.filter(insumo => {
      
      if (insumo.nome && busca) {
        //console.log(insumo.nome + " --- "+busca);
        return (insumo.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1);
      }
    });
    //console.log(evt.srcElement.value);
  }*/

  filtraInsumo(evt){
    const busca = evt.srcElement.value;
    //console.log(busca);
    if (!busca) {
      return this.loadData();
    }
    return this.itensEntrada = this.itensEntrada.filter((ine) => {
      return (ine.insumo.nome.toLowerCase().includes(busca.toLowerCase()));
    });

  }

  insereLista(){
   
    

  }


    
  

}
