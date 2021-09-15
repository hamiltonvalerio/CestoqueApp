import { ConsumoDTO } from './../../models/consumo.dto';
import { TipoConsumoEnum } from './../../enums/tipoconsumo.enum';
import { OrgaoDTO } from './../../models/orgao.dto';
import { OrgaoService } from './../../services/domain/orgao.service';
import { UnidadeService } from './../../services/domain/unidade.service';
import { UnidadeDTO } from './../../models/unidade.dto';
import { CCategoriaDTO } from './../../models/ccategoria.dto';
import { CategoriaService } from './../../services/domain/categoria.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CategoriaDTO } from './../../models/categoria.dto';
import { InsumoNewDTO } from './../../models/insumo.new.dto';
import { InsumoDTO } from './../../models/insumo.dto';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
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

  orgaos: OrgaoDTO[];
  orgaosDesabilitados: OrgaoDTO[];

  toogle: boolean;

  tiposconsumos = [];

  arrayConsumos: FormArray;

  get consumos(): FormArray {
    return this.formGroup.get("consumos") as FormArray;
  }
  
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
    public unidadeService: UnidadeService,
    public orgaoService: OrgaoService) {

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
        //unidade: ['',],
        precisairradiacao: [false,], 
        precisacontrolequalidade: [false,],
        orgaos: this.formControl,
        consumos: this.formBuilder.array([this.createFormGroup(null)]),
        //consumos: this.formBuilder.array([this.createFormGroup(null)]),
        //codigo_barra: [,],
        //qrcode: [,],
        //rfid: [,],
      }, {});
  }

  ionViewDidLoad() {
    this.loadCategorias();
    this.loadUnidades();
    this.loadOrgaos();
    this.liberaComboOrgao();
    this.loadEnumTiposConsumos();
    this.itemId = this.navParams.get('itemId');
    if(this.itemId != null){
      this.editarInsumo = true;
      this.insumoService.findInsumoById(this.itemId).subscribe((resp) => {
        this.updateInsumoDTO = resp;

        if(this.updateInsumoDTO.consumos.length > 0){
          this.updateInsumoDTO.consumos.forEach((c) => {
            this.consumos.push(this.createFormGroupArray(c));
          })
        }

        console.log(this.consumos)

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
          //unidade: [this.updateInsumoDTO.unidade,],
          precisairradiacao: [this.updateInsumoDTO.precisairradiacao,''], 
          precisacontrolequalidade: [this.updateInsumoDTO.precisacontrolequalidade,''],
          orgaos: [this.updateInsumoDTO.orgaos,],
          consumos: this.consumos.length > 0 ? this.consumos :this.formBuilder.array([this.createFormGroup(this.updateInsumoDTO)]),
        }, {

        }); 
      });
    }
    
  }

  createFormGroupArray(consumo : ConsumoDTO) {

    //aqui 
    
    console.log(

      this.getEnumKeyByEnumValue(TipoConsumoEnum, 1)

    );

    return this.formBuilder.group({
        insumo: [consumo.insumo,],
        tipoconsumo: [TipoConsumoEnum[consumo.tipoconsumo_id],],
        tipoconsumo_id : [consumo.tipoconsumo_id,],
        unidadetipo: [consumo.unidadetipo,],
        quantidadecon: [consumo.quantidadecon,],
        unidadecon: [consumo.unidadecon,],
      });
    
  }

  getEnumKeyByEnumValue(myEnum, enumValue) {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : null;
  }

  createFormGroup(insumo : InsumoDTO) {

    return this.formBuilder.group({
        insumo: [insumo,],
        tipoconsumo: new FormControl(),
        tipoconsumo_id : new FormControl(),
        unidadetipo: new FormControl(),
        quantidadecon: new FormControl(),
        unidadecon: new FormControl(),
      });
    
  }



  addConsumo() {
    const cons = <FormArray>this.formGroup.controls['consumos'];
    cons.push(this.createFormGroup(this.updateInsumoDTO));
  }

  insereunidadeEntradaDTO(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
   this.unidade = event.value;
  }

  loadEnumTiposConsumos(){
    this.tiposconsumos = [];
    
    for (const [propertyKey, propertyValue] of Object.entries(TipoConsumoEnum)) {  
    
      if (!Number.isNaN(Number(propertyKey))) {  
        continue;  
    }  
    this.tiposconsumos.push({ id: propertyValue, nome: propertyKey, 
      nomefield: propertyKey=="ENTRADA" || propertyKey=="saida"?"COMO EU DOU "+propertyKey:"COMO EU "+propertyKey});  
    } 
  }

  tipoConsumoChange(event: {
    component: IonicSelectableComponent,
    value: TipoConsumoEnum
  }){ 
    
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

  loadOrgaos(){
    this.orgaoService.findAll()
    .subscribe(response => {
      this.orgaos = response.sort();
    })
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

  liberaComboOrgao() {
   
  }

}
