import { UnidadeService } from './../../services/domain/unidade.service';
import { UnidadeDTO } from './../../models/unidade.dto';
import { CCategoriaDTO } from './../../models/ccategoria.dto';
import { CategoriaService } from './../../services/domain/categoria.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CategoriaDTO } from './../../models/categoria.dto';
import { InsumoNewDTO } from './../../models/insumo.new.dto';
import { InsumoDTO } from './../../models/insumo.dto';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, LoadingController } from 'ionic-angular';
import { InsumoService } from '../../services/domain/insumo.service';
import { BrMaskerIonic3, BrMaskModel } from 'brmasker-ionic-3';
/**
 * Generated class for the CadastroInsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-insumo',
  templateUrl: 'cadastro-insumo.html',
  providers: [BrMaskerIonic3]
})
export class CadastroInsumoPage {

  formGroup: FormGroup;
  formControl : FormControl;

  updateInsumoDTO: InsumoDTO;

  itemId;

  categoriasInsumos : CategoriaDTO[] = [];
  categoriasInsumosSelecionados : CategoriaDTO[];

  unidades : UnidadeDTO[] = [];
  unidade: UnidadeDTO;

  editarInsumo: boolean = false;

  precisairradiacao1: boolean = false;
  precisacontrolequalidade1: boolean = false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public insumoService: InsumoService,
    public categoriaService: CategoriaService,
    public loadingCtrl: LoadingController,
    private brMaskerIonic3: BrMaskerIonic3,
    public unidadeService: UnidadeService) {

      this.formGroup = this.formBuilder.group({
        id: ['',''],
        nome: ['',[Validators.required]],
        nomenclatura: ['',[Validators.required]],
        valor: ['',],
        codigoalmox: ['',],
        observacao: ['',],
        essencial: [false,],
        controlado: [false,],
        datavalidade: [,],
        quantidade: [,],
        taxadeconsumo: [,],
        categorias: this.formControl,
        unidade: ['',],
        precisairradiacao: [false,], 
        precisacontrolequalidade: [false,],

        //codigo_barra: [,],
        //qrcode: [,],
        //rfid: [,],
      }, {});

  }

  ionViewDidLoad() {
    this.loadCategorias();
    this.loadUnidades();
    this.itemId = this.navParams.get('itemId');
    if(this.itemId != null){
      this.editarInsumo = true;
      this.insumoService.findInsumoById(this.itemId).subscribe((resp) => {
        this.updateInsumoDTO = resp;
        console.log(this.updateInsumoDTO);
        this.formGroup = this.formBuilder.group({
          id: [this.updateInsumoDTO.id,''],
          nome: [this.updateInsumoDTO.nome,''],
          nomenclatura: [this.updateInsumoDTO.nomenclatura,''],
          valor: [this.updateInsumoDTO.valor,''],
          codigoalmox: [this.updateInsumoDTO.codigoalmox,],
          observacao: [this.updateInsumoDTO.observacao,''],
          essencial: [this.updateInsumoDTO.essencial,''],
          controlado: [this.updateInsumoDTO.controlado,''],
          datavalidade: [this.updateInsumoDTO.datavalidade,],
          quantidade: [this.updateInsumoDTO.quantidade,''],
          taxadeconsumo: [this.updateInsumoDTO.taxadeconsumo,],
          categorias: [this.updateInsumoDTO.categorias,],
          unidade: [this.updateInsumoDTO.unidade,],
          precisairradiacao: [this.updateInsumoDTO.precisairradiacao,''], 
          precisacontrolequalidade: [this.updateInsumoDTO.precisacontrolequalidade,''],
        }, {}); 
      });
      
    }
    
  }//[formControl]="wsForm.controls['wsQuestion1']"

  insereunidadeEntradaDTO(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
   this.unidade = event.value;

   //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
  }

  loadCategorias(){
    let loader = this.presentLoading();
    this.categoriaService.findAll().subscribe((response) => {
      this.categoriasInsumos = response.sort();
      loader.dismiss();
    });
  }

  loadUnidades(){
    let loader = this.presentLoading();
    this.unidadeService.findAll().subscribe((response) => {
      this.unidades = response.sort();
      loader.dismiss();
    });
      
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  cadastrarInsumo(){

    let ins: InsumoDTO = this.formGroup.value;

    if(ins.id === null || ins.id === ''){
      this.insumoService.insert(this.formGroup.value).subscribe(response => {
        this.showInserOk();
      },
      error => {});
    }else{
      console.log(ins)
      this.insumoService.update(ins).subscribe(response => {
        this.showUpdateOk();
      },
      error => {});
    }
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

  imprimeItem(event: {
    component: IonicSelectableComponent;
    value: CategoriaDTO;
  }) {
    //this.citemInsumo = event.value;
  }


}
