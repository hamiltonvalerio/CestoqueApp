webpackJsonp([18],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroEntradaPageModule", function() { return CadastroEntradaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_entrada__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastroEntradaPageModule = /** @class */ (function () {
    function CadastroEntradaPageModule() {
    }
    CadastroEntradaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_entrada__["a" /* CadastroEntradaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_entrada__["a" /* CadastroEntradaPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */],
            ],
        })
    ], CadastroEntradaPageModule);
    return CadastroEntradaPageModule;
}());

//# sourceMappingURL=cadastro-entrada.module.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroEntradaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_fornecedor_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_insumo_service__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CadastroEntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroEntradaPage = /** @class */ (function () {
    function CadastroEntradaPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, insumoService, loadingCtrl, fornecedorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.insumoService = insumoService;
        this.loadingCtrl = loadingCtrl;
        this.fornecedorService = fornecedorService;
        this.botaoEntrada = true;
        //usando classe
        this.citensInsumos = [];
        this.citensEntradas = [];
        this.citensnovaentrada = [];
        this.fornecedores = [];
        this.formGroup = this.formBuilder.group({
            insumo: this.formControl,
            quantidade: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            valor: ['',],
            valorTotal: ['',],
        }, {});
    }
    CadastroEntradaPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CadastroEntradaPage');
        this.loadData();
        this.loadFornecedor();
        console.log("oia" + this.fornecedor);
    };
    CadastroEntradaPage.prototype.dismiss = function () {
        //this.navCtrl.push('EntradaPage', {}, {animate: true, direction: 'forward'});
        this.navCtrl.popToRoot();
        //this.viewCtrl.dismiss();
    };
    CadastroEntradaPage.prototype.loadData = function () {
        var _this = this;
        var loader = this.presentLoading();
        var itensIns = [];
        this.insumoService.findTodos()
            .subscribe(function (response) {
            _this.citensInsumos = response.sort();
            //console.log(this.citensInsumos);
            _this.citensInsumos.forEach(function (value) {
                var insEnt = {
                    insumo: value,
                    loteFornecedor: '',
                    loteCR: '',
                    dataIrradiacao: null,
                    dataVencIrradiacao: null,
                    quantidade: 0,
                    valor: 0,
                    valorTotal: 0
                };
                itensIns.push(insEnt);
            });
            _this.citensEntradas = itensIns;
            //console.log(this.itensEntrada);
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    CadastroEntradaPage.prototype.loadFornecedor = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.fornecedorService.findAll().subscribe(function (response) {
            _this.fornecedores = response.sort();
            _this.fornecedorService.findByNome("almoxarifado central").subscribe(function (resp) {
                _this.fornecedor = resp[0];
            });
            //console.log(this.fornecedores);
            loader.dismiss();
        });
    };
    CadastroEntradaPage.prototype.buscaFornecedor = function (event) {
        var _this = this;
        //this.fornecedor = {insumo: event.value, quantidade: 0, valor: 0};
        var text = event.text.trim().toLowerCase();
        console.log("Busca esse:" + text);
        this.fornecedorService.findByNome(text).subscribe(function (response) {
            _this.fornecedores = response.sort();
            console.log(_this.fornecedores);
        });
        console.log('buscaFornecedor::', text);
    };
    CadastroEntradaPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    CadastroEntradaPage.prototype.insereListaEntrada = function () {
        this.citensnovaentrada.push(this.formGroup.value);
        this.botaoEntrada = false;
        this.reset();
        console.log('this.numeronf', this.numeronf);
        console.log('this.formGroup.value', this.citensnovaentrada);
    };
    CadastroEntradaPage.prototype.insereInsumoEntradaDTO = function (event) {
        this.citensEntrada = {
            insumo: event.value,
            loteFornecedor: '',
            loteCR: '',
            dataIrradiacao: null,
            dataVencIrradiacao: null,
            quantidade: 0,
            valor: 0,
            valorTotal: 0
        };
        //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    };
    CadastroEntradaPage.prototype.insereFornecedorEntradaDTO = function (event) {
        //this.fornecedor = {insumo: event.value, quantidade: 0, valor: 0};
        //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    };
    CadastroEntradaPage.prototype.cadastrarInsumo = function () {
        var dto = Object.assign({});
        dto = Object.assign(dto, this.formGroup.value);
        //let newDto : InsumoNewDTO;
        //newDto.nome = dto.nome;
        //newDto.valor = +dto.valor;
        console.log("aqui");
        console.log(dto);
        /*this.insumoService.insert(this.formGroup.value).subscribe(response => {
          this.showInserOk();
        },
        error => {});*/
    };
    CadastroEntradaPage.prototype.reset = function () {
        console.log("teste");
        this.formGroup.reset();
    };
    CadastroEntradaPage.prototype.excluiItem = function (cInsumoEntradaDTO) {
        this.citensnovaentrada.forEach(function (item, index, object) {
            if (item === cInsumoEntradaDTO) {
                object.splice(index, 1);
            }
        });
        if (this.citensnovaentrada.length == 0) {
            this.botaoEntrada = true;
        }
        this.loadData();
    };
    CadastroEntradaPage.prototype.inserirEntrada = function () {
    };
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
    CadastroEntradaPage.prototype.filtraInsumo = function (evt) {
        var busca = evt.srcElement.value;
        //console.log(busca);
        if (!busca) {
            return this.loadData();
        }
        return this.citensEntradas = this.citensEntradas.filter(function (ine) {
            return (ine.insumo.nome.toLowerCase().includes(busca.toLowerCase()));
        });
    };
    CadastroEntradaPage.prototype.insereLista = function () {
    };
    CadastroEntradaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-cadastro-entrada',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-entrada\cadastro-entrada.html"*/'<!--\n  Generated template for the CadastroEntradaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Entrada de Insumos\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()" >\n        <span ion-text color="primary" showWhen="ios">Cancel </span>\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  \n  <ion-item color="item_entrada">\n    <ion-label>Fornecedor</ion-label>\n    <ionic-selectable \n      item-content \n      [(ngModel)]="fornecedor"\n      [items]="fornecedores"\n      itemValueField="id"\n      itemTextField="nome"\n      [canSearch]="true"\n      [hasVirtualScroll]="true" >\n      <ng-template ionicSelectableItemTemplate let-port="item" class="my-center-text">\n        <ion-item >\n          <ion-label text-wrap class="label_12_b">\n            {{port.nome}}\n          </ion-label>\n        </ion-item>\n\n      </ng-template>\n\n    </ionic-selectable>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Data emissão</ion-label>\n    <ion-input type="date" [(ngModel)]="data_entrada"> </ion-input>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Número requisição</ion-label>\n    <ion-input type="text" [(ngModel)]="numRequisicao"> </ion-input>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Número documento (LIA)</ion-label>\n    <ion-input type="text" [(ngModel)]="numLIA"> </ion-input>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Número processo</ion-label>\n    <ion-input type="text" [(ngModel)]="numProcesso"> </ion-input>\n  </ion-item>\n\n\n\n\n\n\n  <form [formGroup]="formGroup" margin-bottom (ngSubmit)="insereListaEntrada()">\n  <ion-item>\n    <ion-label>Insumos</ion-label>\n    <ionic-selectable \n      item-content \n      [(ngModel)]="citemInsumo"\n      [items]="citensInsumos"\n      formControlName="insumo"\n      itemValueField="id"\n      itemTextField="nome_codalmox"\n      [canSearch]="true"\n      (onChange)="insereInsumoEntradaDTO($event)">\n\n      <ng-template ionicSelectableItemTemplate let-port="item">\n       \n        <ion-item>\n          <ion-label text-wrap class="label_12_b">\n            {{port.nome}} \n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label class="label_14">\n            Cod Almox: {{port.codigo_almox}}  -  Quantidade atual: {{port.quantidade}}\n          </ion-label>\n        </ion-item>\n\n      </ng-template>\n\n    </ionic-selectable>\n  </ion-item>\n  <ion-item>\n    <ion-label >Quantidade</ion-label>\n    <ion-input type="number" formControlName="quantidade"> </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label >Valor Total</ion-label>\n    <ion-input type="number" formControlName="valorTotal">  </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-badge item-right color="danger" *ngIf="!formGroup.valid">Inválido</ion-badge>\n    <ion-badge item-right color="secondary" *ngIf="formGroup.valid">Valido</ion-badge>\n    <button ion-button (click)="reset()" [disabled]="!formGroup.valid">\n      Limpar\n    </button>\n    <button ion-button type="submit" [disabled]="!formGroup.valid">Incluir</button>\n  </ion-item>\n</form>\n</ion-header>\n<ion-content padding >\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1>\n        Código\n      </ion-col>\n      <ion-col col-5>\n        Insumo\n      </ion-col>\n      <ion-col col-2>\n        Quant\n      </ion-col>\n      <ion-col col-2>\n        Valor Total\n      </ion-col>\n      <ion-col col-2>\n        Exc\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let ient of citensnovaentrada">\n      <ion-col col-1>\n        {{ient.insumo.codigo_almox}}\n      </ion-col>\n      <ion-col col-5>\n        {{ient.insumo.nome}}\n      </ion-col>\n      <ion-col col-2>\n        {{ient.quantidade}}\n      </ion-col>\n      <ion-col col-2>\n        {{ient.valorTotal}}\n      </ion-col>\n      <ion-col col-2>\n        <ion-icon name="close-circle" (click)="excluiItem(ient)"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 style="text-align: right;" ><button ion-button [disabled]="botaoEntrada" (click)="inserirEntrada()">Inserir entrada</button></ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-entrada\cadastro-entrada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_fornecedor_service__["a" /* FornecedorService */]])
    ], CadastroEntradaPage);
    return CadastroEntradaPage;
}());

//# sourceMappingURL=cadastro-entrada.js.map

/***/ })

});
//# sourceMappingURL=18.js.map