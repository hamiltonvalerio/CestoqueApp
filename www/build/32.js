webpackJsonp([32],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroLocalizacaoPageModule", function() { return CadastroLocalizacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_localizacao__ = __webpack_require__(899);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastroLocalizacaoPageModule = /** @class */ (function () {
    function CadastroLocalizacaoPageModule() {
    }
    CadastroLocalizacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cadastro_localizacao__["a" /* CadastroLocalizacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cadastro_localizacao__["a" /* CadastroLocalizacaoPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */],
            ],
        })
    ], CadastroLocalizacaoPageModule);
    return CadastroLocalizacaoPageModule;
}());

//# sourceMappingURL=cadastro-localizacao.module.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroLocalizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_localizacao_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(65);
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
 * Generated class for the CadastroLocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroLocalizacaoPage = /** @class */ (function () {
    function CadastroLocalizacaoPage(navCtrl, viewCtrl, alertCtrl, navParams, formBuilder, localizacaoService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.localizacaoService = localizacaoService;
        this.fieldLocalizacaoFilha = true;
        this.formGroup = this.formBuilder.group({
            id: ['', ''],
            nome: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            aprovacao: [false, ''],
            descarte: [false, ''],
            utilizado: [false, ''],
            almoxarifadoprincipal: [false, ''],
            irradiacao: [false, ''],
            localizacaofilha: [false, ''],
            objlocalizacaofilha: [,],
            gerasublote: [false, ''],
        }, {});
    }
    CadastroLocalizacaoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.itemId = this.navParams.get('itemId');
        if (this.itemId != null) {
            this.localizacaoService.findLocalizacaoById(this.itemId).subscribe(function (resp) {
                _this.updateLocalizacaoDTO = resp;
                _this.formGroup = _this.formBuilder.group({
                    id: [_this.updateLocalizacaoDTO.id, ''],
                    nome: [_this.updateLocalizacaoDTO.nome, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
                    aprovacao: [_this.updateLocalizacaoDTO.aprovacao, ''],
                    descarte: [_this.updateLocalizacaoDTO.descarte, ''],
                    utilizado: [_this.updateLocalizacaoDTO.utilizado, ''],
                    almoxarifadoprincipal: [_this.updateLocalizacaoDTO.almoxarifadoprincipal, ''],
                    irradiacao: [_this.updateLocalizacaoDTO.irradiacao, ''],
                    localizacaofilha: [_this.updateLocalizacaoDTO.localizacaofilha, ''],
                    objlocalizacaofilha: [_this.updateLocalizacaoDTO.objlocalizacaofilha,],
                    gerasublote: [_this.updateLocalizacaoDTO.gerasublote,],
                }, {});
            });
        }
        this.getItens();
    };
    CadastroLocalizacaoPage.prototype.getItens = function () {
        var _this = this;
        this.localizacaoService.findAllOrderByNome()
            .subscribe(function (response) {
            _this.localizacoes = response.sort();
        }, function (error) { });
    };
    CadastroLocalizacaoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CadastroLocalizacaoPage.prototype.cadastrarLocalizacao = function () {
        var _this = this;
        if (this.formGroup.get('localizacaofilha').value === true) {
            var locfilha_1 = this.formGroup.value;
            if (locfilha_1.id === null || locfilha_1.id === '') {
                //INSERT
                if (locfilha_1.almoxarifadoprincipal == true) {
                    this.showAlmoxPrincFilha();
                }
                else {
                    this.localizacaoService.insert(locfilha_1).subscribe(function (response) {
                        _this.showInserOk();
                    }, function (error) { });
                }
            }
            else {
                //UPDATE
                if (locfilha_1.almoxarifadoprincipal == true) {
                    this.showAlmoxPrincFilha();
                }
                else {
                    this.localizacaoService.update(locfilha_1).subscribe(function (response) {
                        console.log("aqui");
                        console.log(locfilha_1);
                        _this.showUpdateOk();
                    }, function (error) { });
                }
            }
        }
        else {
            var loc = this.formGroup.value;
            var almoxprincipal_1;
            this.localizacaoService.findAlmoxPrincipal().subscribe(function (b) {
                almoxprincipal_1 = b;
            });
            console.log(almoxprincipal_1);
            if (loc.id === null || loc.id === '') {
                if (almoxprincipal_1 != null) {
                    if (almoxprincipal_1.almoxarifadoprincipal == true) {
                        this.showExisteAlmoxPrinc();
                    }
                    else {
                        this.localizacaoService.insert(loc).subscribe(function (response) {
                            _this.showInserOk();
                        }, function (error) { });
                    }
                }
                else {
                    this.localizacaoService.insert(loc).subscribe(function (response) {
                        _this.showInserOk();
                    }, function (error) { });
                }
            }
            else {
                if (almoxprincipal_1 != null) {
                    if (loc.id == almoxprincipal_1.id) {
                        this.localizacaoService.update(loc).subscribe(function (response) {
                            _this.showUpdateOk();
                        }, function (error) { });
                    }
                    else {
                        if (loc.almoxarifadoprincipal == true) {
                            this.showExisteAlmoxPrinc();
                        }
                        else {
                            this.localizacaoService.update(loc).subscribe(function (response) {
                                _this.showUpdateOk();
                            }, function (error) { });
                        }
                    }
                }
                else {
                    this.localizacaoService.update(loc).subscribe(function (response) {
                        _this.showUpdateOk();
                    }, function (error) { });
                }
            }
        }
    };
    /*cadastrarLocalizacao(){
      if(this.formGroup.get('localizacaofilha').value === true){
        let locfilha: LocalizacaoFilhaDTO = this.formGroup.value;
        locfilha.localizacaopai = locfilha.localizacao;
        if(locfilha.id === null || locfilha.id === ''){
          if(locfilha.almoxarifadoprincipal == true){
              this.showAlmoxPrincFilha();
          }else{
            this.localizacaoService.insertfilha(locfilha).subscribe(response => {
              this.showInserOk();
            },
            error => {});
          }
        }else{
          if(locfilha.almoxarifadoprincipal == true){
            this.showAlmoxPrincFilha();
          }else{
            this.localizacaoService.updatefilha(locfilha).subscribe(response => {
              this.showUpdateOk();
            },
            error => {});
          }
        }
  
      }else{
        let loc: LocalizacaoDTO = this.formGroup.value;
        let almoxprincipal : LocalizacaoDTO;
        this.localizacaoService.findAlmoxPrincipal().subscribe((b) => {
          almoxprincipal = b;
        });
        console.log(almoxprincipal);
        if(loc.id === null || loc.id === ''){
          if(almoxprincipal != null){
            if(almoxprincipal.almoxarifadoprincipal == true){
              this.showExisteAlmoxPrinc();
            }else{
              this.localizacaoService.insert(loc).subscribe(response => {
                this.showInserOk();
              },
              error => {});
            }
          }else{
            this.localizacaoService.insert(loc).subscribe(response => {
              this.showInserOk();
            },
            error => {});
          }
        }else{
          if(almoxprincipal != null){
            if(loc.id == almoxprincipal.id){
              this.localizacaoService.update(loc).subscribe(response => {
                this.showUpdateOk();
              },
              error => {});
            }else{
              if(loc.almoxarifadoprincipal == true){
                this.showExisteAlmoxPrinc();
              }else{
                this.localizacaoService.update(loc).subscribe(response => {
                  this.showUpdateOk();
                },
                error => {});
              }
            }
          }else{
            this.localizacaoService.update(loc).subscribe(response => {
              this.showUpdateOk();
            },
            error => {});
          }
        }
      }
    }*/
    CadastroLocalizacaoPage.prototype.showAlmoxPrincFilha = function () {
        var alert = this.alertCtrl.create({
            title: 'Erra',
            message: 'Sublocalização não pode ser principal!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    CadastroLocalizacaoPage.prototype.showExisteAlmoxPrinc = function () {
        var alert = this.alertCtrl.create({
            title: 'Erra',
            message: 'Já existe um almoxarifado principal!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    CadastroLocalizacaoPage.prototype.showInserOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Cadastro efetuado com sucesso!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    CadastroLocalizacaoPage.prototype.showUpdateOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Cadastro atualizado com sucesso!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    CadastroLocalizacaoPage.prototype.validalocalizacaofilha = function () {
        if (this.formGroup.get('localizacaofilha').value === true) {
            this.fieldLocalizacaoFilha = false;
        }
        else {
            this.fieldLocalizacaoFilha = true;
        }
    };
    CadastroLocalizacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-cadastro-localizacao',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-localizacao\cadastro-localizacao.html"*/'<!--\n\n  Generated template for the CadastroLocalizacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Cadastro de Localização\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()" >\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="cadastrarLocalizacao()">\n\n    <ion-item>\n\n      <ion-label stacked>Nome*</ion-label>\n\n      <ion-input formControlName="nome" type="text" ></ion-input>\n\n    </ion-item>\n\n    <ion-input formControlName="id" type="hidden"></ion-input>\n\n    <ion-item>\n\n      <ion-label stacked>É o almoxarifado principal?</ion-label>\n\n      <ion-checkbox item-right danger checked formControlName="almoxarifadoprincipal"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Participa de alguma aprovação?</ion-label>\n\n      <ion-checkbox item-right danger checked formControlName="aprovacao"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>É uma localização para Irradiação?</ion-label>\n\n      <ion-checkbox item-right danger checked formControlName="irradiacao"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>É uma localização de descarte?</ion-label>\n\n      <ion-checkbox item-right danger checked formControlName="descarte"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>É uma localização de insumos utilizados?</ion-label>\n\n      <ion-checkbox item-right danger checked formControlName="utilizado"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Esta ligada à uma localização principal?</ion-label>\n\n      <ion-checkbox item-right danger (click)="validalocalizacaofilha()" checked formControlName="localizacaofilha"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Esta localização pode gerar sublotes?</ion-label>\n\n      <ion-checkbox item-right danger checked formControlName="gerasublote"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item [hidden]="fieldLocalizacaoFilha">\n\n      <ion-label stacked>Escolha uma localização</ion-label>\n\n      <ionic-selectable \n\n      item-content\n\n      formControlName="objlocalizacaofilha"\n\n      [items]="localizacoes"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      [focusSearchbar]="true"\n\n      [hasVirtualScroll]="true" >\n\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{item.nome}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ng-template>\n\n    </ionic-selectable>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.nome.dirty && formGroup.controls.nome.errors" margin-left >Valor inválido</p>\n\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Registrar</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-localizacao\cadastro-localizacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_localizacao_service__["a" /* LocalizacaoService */]])
    ], CadastroLocalizacaoPage);
    return CadastroLocalizacaoPage;
}());

//# sourceMappingURL=cadastro-localizacao.js.map

/***/ })

});
//# sourceMappingURL=32.js.map