webpackJsonp([18],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroEntradaPageModule", function() { return CadastroEntradaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_entrada__ = __webpack_require__(726);
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

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroEntradaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_insumo_service__ = __webpack_require__(350);
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
    function CadastroEntradaPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, insumoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.insumoService = insumoService;
        this.loadingCtrl = loadingCtrl;
        this.itensInsumosxa = [];
        this.itensEntradas = [];
        this.cate = [{ id: "1", nome: "nome" }];
        this.formGroup = this.formBuilder.group({
            port: this.formControl,
            quantidade: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required]],
            valor: ['',],
        }, {});
    }
    CadastroEntradaPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CadastroEntradaPage');
        this.loadData();
    };
    CadastroEntradaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CadastroEntradaPage.prototype.loadData = function () {
        var _this = this;
        var loader = this.presentLoading();
        var itensIns = [];
        this.insumoService.findTodos()
            .subscribe(function (response) {
            _this.itensInsumosxa = response.sort();
            _this.itensInsumosxa.forEach(function (value) {
                var insEnt = { insumo: value, quantidade: 0, valor: 0 };
                itensIns.push(insEnt);
            });
            _this.itensEntradas = itensIns;
            //console.log(this.itensEntrada);
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    CadastroEntradaPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    CadastroEntradaPage.prototype.entradaTeste = function (o) {
        console.log(o);
    };
    CadastroEntradaPage.prototype.portChange = function (event) {
        console.log('itensEntrada::', event.value);
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
        this.formGroup.reset();
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
        return this.itensEntradas = this.itensEntradas.filter(function (ine) {
            return (ine.insumo.nome.toLowerCase().includes(busca.toLowerCase()));
        });
    };
    CadastroEntradaPage.prototype.insereLista = function () {
    };
    CadastroEntradaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-cadastro-entrada',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-entrada\cadastro-entrada.html"*/'<!--\n  Generated template for the CadastroEntradaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Entrada de Insumos\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()" >\n        <span ion-text color="primary" showWhen="ios">Cancel </span>\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="formGroup" margin-bottom>\n  <ion-item>\n    <ion-label>Insumos</ion-label>\n    <ionic-selectable \n      item-content \n      [(ngModel)]="itensInsumosx"\n      [items]="itensInsumosxa"\n      formControlName="port"\n      itemValueField="id"\n      itemTextField="nome"\n      [canSearch]="true"\n      (onChange)="portChange($event)">\n      <ng-template ionicSelectableItemTemplate let-port="item" >\n				{{itensInsumosx.nome}} <br> ({{itensInsumosx.quantidade}}) \n			</ng-template>\n    </ionic-selectable>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Quantidade</ion-label>\n    <ion-input type="number" formControlName="quantidade"> </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Valor</ion-label>\n    <ion-input type="number" formControlName="valor">  </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-badge item-right color="danger" *ngIf="!formGroup.valid">Inválido</ion-badge>\n    <ion-badge item-right color="secondary" *ngIf="formGroup.valid">Valido</ion-badge>\n    <button ion-button (click)="reset()" [disabled]="!formGroup.valid">\n      Limpar\n    </button>\n    <button ion-button type="submit" [disabled]="!formGroup.valid">Incluir</button>\n  </ion-item>\n</form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-entrada\cadastro-entrada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
    ], CadastroEntradaPage);
    return CadastroEntradaPage;
}());

//# sourceMappingURL=cadastro-entrada.js.map

/***/ })

});
//# sourceMappingURL=18.js.map