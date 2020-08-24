import { CInsumoEntradaDTO } from './../../models/cinsumoentrada.dto';
import { CInsumoDTO } from './../../models/cinsumo.dto';
import { CategoriaDTO } from './../../models/categoria.dto';
import { InsumoEntradaDTO } from './../../models/insumoentrada.dto';
import { EntradaDTO } from './../../models/entrada.dto';
import { ConverteListaIonItemDivider } from './../../utils/converte-list-ionitemdivider';
import { InsumoDTO } from './../../models/insumo.dto';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { InsumoService } from '../../services/domain/insumo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IonicSelectableComponent } from 'ionic-selectable';
import { TestScheduler } from 'rxjs';

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

  //itensInsumosxa : InsumoDTO[] = [];
  entrada : EntradaDTO;
  
  numnf : number;

  
  //itensInsumosx : InsumoDTO;
  
  formControl : FormControl;
  formGroup : FormGroup;

  quantidade : number;
  valor: number;

  //usando classe
  citensInsumos : CInsumoDTO[] = [];
  citemInsumo : InsumoDTO;

  citensEntrada : CInsumoEntradaDTO;
  citensEntradas : CInsumoEntradaDTO[] = [];
  citensnovaentrada : CInsumoEntradaDTO[] = []; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController) {
      
     

    this.formGroup = this.formBuilder.group({
      insumo: this.formControl,
      quantidade: ['',[Validators.required]],
      valor: ['',],
    }, {});
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroEntradaPage');
    this.loadData();
  }

  

  dismiss() {
    //this.navCtrl.push('EntradaPage', {}, {animate: true, direction: 'forward'});
    this.navCtrl.popToRoot();
    //this.viewCtrl.dismiss();
  }

  loadData(){
    let loader = this.presentLoading();
    let itensIns : InsumoEntradaDTO[] = [];
    
    this.insumoService.findTodos()
      .subscribe((response) => {
        this.citensInsumos = response.sort();
        //console.log(this.citensInsumos);
        this.citensInsumos.forEach(function (value) {
          let insEnt : CInsumoEntradaDTO = {insumo: value, quantidade: 0, valor: 0};
          
          itensIns.push(insEnt);
        }); 
        this.citensEntradas = itensIns;
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

    

    insereListaEntrada() {
      this.citensnovaentrada.push(this.formGroup.value);
      this.reset();
      console.log('this.numnf',this.numnf);
      console.log('this.formGroup.value',this.citensnovaentrada);
    }
  
    insereInsumoEntradaDTO(event: {
      component: IonicSelectableComponent,
      value: any
    }) {
     this.citensEntrada = {insumo: event.value, quantidade: 0, valor: 0};

      //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    }


    cadastrarInsumo(){
      let dto = Object.assign({});
      dto = Object.assign(dto,this.formGroup.value);
     
      //let newDto : InsumoNewDTO;
      //newDto.nome = dto.nome;
      //newDto.valor = +dto.valor;
      console.log("aqui");
      console.log(dto);
      /*this.insumoService.insert(this.formGroup.value).subscribe(response => {
        this.showInserOk();
      },
      error => {});*/
    }

    reset() {
      this.formGroup.reset();
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
    return this.citensEntradas = this.citensEntradas.filter((ine) => {
      return (ine.insumo.nome.toLowerCase().includes(busca.toLowerCase()));
    });

  }

  insereLista(){
   
    

  }


    
  

}
