webpackJsonp([29],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlePageModule", function() { return ControlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controle__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ControlePageModule = /** @class */ (function () {
    function ControlePageModule() {
    }
    ControlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__controle__["a" /* ControlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__controle__["a" /* ControlePage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["b" /* IonicSelectableModule */],
            ],
        })
    ], ControlePageModule);
    return ControlePageModule;
}());

//# sourceMappingURL=controle.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_datenow__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_localizacao_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(65);
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
 * Generated class for the ControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ControlePage = /** @class */ (function () {
    function ControlePage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, localizacaoService, insumoService, loadingCtrl, dateTimeFormatPipe, dateNow, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.localizacaoService = localizacaoService;
        this.insumoService = insumoService;
        this.loadingCtrl = loadingCtrl;
        this.dateTimeFormatPipe = dateTimeFormatPipe;
        this.dateNow = dateNow;
        this.modalCtrl = modalCtrl;
        this.localizacoes = [];
        this.shouldShowCancel = true;
    }
    ControlePage.prototype.ionViewDidLoad = function () {
        this.loadLocalizacao();
    };
    ControlePage.prototype.loadLocalizacao = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.localizacaoService.findByAprovacaoTrue().subscribe(function (response) {
            _this.localizacoes = response.sort();
            loader.dismiss();
        });
    };
    ControlePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    ControlePage.prototype.carregaObjeto = function (event) {
        this.localizacao = event.value;
        this.carregaInsumos();
    };
    ControlePage.prototype.carregaInsumos = function () {
        var _this = this;
        if (this.localizacao != undefined) {
            var loader_1 = this.presentLoading();
            this.insumosLocalizacao = [];
            this.insumoService
                .findInsumoLocalizacaoByLocalizacao(this.localizacao.id)
                .subscribe(function (response) {
                var start = _this.insumosLocalizacao.length;
                _this.insumosLocalizacao = _this.insumosLocalizacao.concat(response["content"]);
                _this.insumosLocalizacao.forEach(function (il) {
                    if (il.dataPrevisaoControle != null) {
                        il.dataPrevisaoControle = _this.dateTimeFormatPipe.transformhifem(_this.dateNow.getDateFormatado(il.dataPrevisaoControle));
                    }
                });
                var end = _this.insumosLocalizacao.length - 1;
                loader_1.dismiss();
            }, function (error) {
                loader_1.dismiss();
            });
        }
        else {
            this.showLocalizacaoNulo();
        }
    };
    ControlePage.prototype.buscaInsumo = function (ev, tipo) {
        var val = ev.target.value;
        if (this.insumosLocalizacao != undefined) {
            if (val && val.trim() != '') {
                switch (tipo) {
                    case 'nome':
                        this.insumosLocalizacao = this.insumosLocalizacao.filter(function (item) {
                            return (item.insumo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
                        });
                        break;
                    case 'codalmox':
                        this.insumosLocalizacao = this.insumosLocalizacao.filter(function (item) {
                            return (item.codigoalmoxarifado.toLowerCase().indexOf(val.toLowerCase()) > -1);
                        });
                        break;
                    case 'lotelei':
                        this.insumosLocalizacao = this.insumosLocalizacao.filter(function (item) {
                            return (item.loteLEI.toLowerCase().indexOf(val.toLowerCase()) > -1);
                        });
                        break;
                    case 'sublotelei':
                        this.insumosLocalizacao = this.insumosLocalizacao.filter(function (item) {
                            return (item.subloteLEI != null ? item.subloteLEI.toLowerCase().indexOf(val.toLowerCase()) > -1 : "");
                        });
                        break;
                }
            }
        }
        else {
            this.showListaVazia();
        }
    };
    ControlePage.prototype.onCancel = function () {
        this.carregaInsumos();
    };
    ControlePage.prototype.showListaVazia = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: 'Não é possível pesquisar com a lista de insumos vazia!',
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
    ControlePage.prototype.showLocalizacaoNulo = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: 'Localização não pode ser nulo!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                }
            ]
        });
        alert.present();
    };
    ControlePage.prototype.liberarInsumo = function (il) {
        console.log("liberarInsumo");
    };
    ControlePage.prototype.receberParaControle = function (il) {
        var modal = this.modalCtrl.create('ReceberNoControlePage', { item: il });
        modal.onDidDismiss(function () {
            //this.getItens();
        });
        modal.present();
    };
    ControlePage.prototype.alterarPrevisao = function (il) {
        var modal = this.modalCtrl.create('AlterarPrevisaoControlePage');
        modal.onDidDismiss(function () {
            //this.getItens();
        });
        modal.present();
    };
    ControlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-controle',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\controle\controle.html"*/'<!--\n  Generated template for the ControlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-row>\n      <ion-title>Controle</ion-title>\n      <ionic-selectable\n      item-content\n      [(ngModel)]="localizacao"\n      [items]="localizacoes"\n      itemValueField="id"\n      itemTextField="nome"\n      [canSearch]="true"\n      [focusSearchbar]="true"\n      [hasVirtualScroll]="true" \n      placeholder="Localizações"\n      (onChange)="carregaInsumos($event)">\n      <ng-template\n        ionicSelectableItemTemplate\n        let-port="item"\n        class="my-center-text">\n        <ion-item>\n          <ion-label text-wrap class="label_12_b"> {{port.nome}} </ion-label>\n        </ion-item>\n      </ng-template>\n    </ionic-selectable>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <div >\n        <ion-searchbar\n          placeholder="Busca pelo nome"\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="buscaInsumo($event,\'nome\')"\n          (ionCancel)="onCancel()"\n          (ionClear)="onCancel()">\n        </ion-searchbar>\n      </div>\n      <div >\n        <ion-searchbar\n          placeholder="Busca por cod. almoxarifado"\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="buscaInsumo($event,\'codalmox\')"\n          (ionCancel)="onCancel()"\n          (ionClear)="onCancel()">\n        </ion-searchbar>\n      </div>\n      <div >\n        <ion-searchbar\n          placeholder="Busca por Lote LEI"\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="buscaInsumo($event,\'lotelei\')"\n          (ionCancel)="onCancel()"\n          (ionClear)="onCancel()">\n        </ion-searchbar>\n      </div>\n      <div >\n        <ion-searchbar\n          placeholder="Busca por Lote LEI Principal"\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="buscaInsumo($event,\'sublotelei\')"\n          (ionCancel)="onCancel()"\n          (ionClear)="onCancel()">\n        </ion-searchbar>\n      </div>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid>\n  <ion-row class="alinha_itens_center">\n    <ion-col col-md-1 class="cell-class">\n      <b>COD ALMOX:</b>\n    </ion-col>\n    <ion-col col-md-3 class="cell-class">\n      <b>NOME:</b>\n    </ion-col>\n    <ion-col col-md-1 class="cell-class">\n      <b>QTD:</b>\n    </ion-col>\n    <ion-col col-md-1 class="cell-class">\n      <b>LT FORNECEDOR</b>\n    </ion-col>\n    <ion-col col-md-1 class="cell-class">\n      <b>LT LEI</b>\n    </ion-col>\n    <ion-col col-md-1 class="cell-class">\n      <b>APROVADO</b>\n    </ion-col>\n    <ion-col col-md-1 class="cell-class">\n      <b>IRRADIADO</b>\n    </ion-col>\n    <ion-col col-md-1 class="cell-class">\n      <b>RECEBER</b>\n    </ion-col>\n    <ion-col col-md-1 class="cell-class">\n      <b>DT PREVISÃO</b>\n    </ion-col>\n    <ion-col col-md-1 class="cell-class">\n      <b>LIBERAR</b>\n    </ion-col>\n  </ion-row>\n  \n    <ion-row *ngFor="let ins of insumosLocalizacao">\n      <ion-col col-md-1 class="cell-class-icon"><b>{{ins.codigoalmoxarifado}}</b></ion-col>\n      <ion-col col-md-3 class="cell-class"><b>{{ins.insumo.nome}}</b></ion-col>\n      <ion-col col-md-1 class="cell-class">{{ins.quantidade}} {{ins.unidadeEntrada.nome}}</ion-col>\n      <ion-col col-md-1 class="cell-class">{{ins.loteFornecedor}}</ion-col>\n      <ion-col col-md-1 class="cell-class">{{ins.loteLEI}}</ion-col>\n      <ion-col col-md-1 class="cell-class-icon">{{ins.aprovado}}</ion-col>\n      <ion-col col-md-1 class="cell-class-icon">{{ins.irradiado}}</ion-col>\n      <ion-col col-md-1 class="cell-class-icon">\n        <button ion-button icon-only (click)="receberParaControle(ins)">\n          <ion-icon ios="ios-cube" md="md-cube"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-md-1 class="cell-class-icon">\n        <button ion-button icon-only (click)="alterarPrevisao(ins)">\n          {{"&nbsp;"+(ins.dataPrevisaoControle | date:\'dd/MM/yyyy\')+"&nbsp;"}}\n        </button>\n      </ion-col>\n      <ion-col col-md-1 class="cell-class-icon" >\n        <button ion-button icon-only (click)="liberarInsumo(ins)">\n          <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\controle\controle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__["a" /* DateTimeFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_0__utils_datenow__["a" /* DateNow */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* ModalController */]])
    ], ControlePage);
    return ControlePage;
}());

//# sourceMappingURL=controle.js.map

/***/ })

});
//# sourceMappingURL=29.js.map