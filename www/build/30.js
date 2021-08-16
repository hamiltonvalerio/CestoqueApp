webpackJsonp([30],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlePageModule", function() { return ControlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
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
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["b" /* IonicSelectableModule */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_datenow__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_localizacao_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(46);
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
        var _this = this;
        if (il.quantidade == 0) {
            this.showMensagem("Não é possível liberar insumo com quantidade igual a zero!");
        }
        else {
            var modal = this.modalCtrl.create('LiberarInsumoControlePage', { item: il });
            modal.onDidDismiss(function () {
                _this.carregaInsumos();
            });
            modal.present();
        }
    };
    ControlePage.prototype.receberParaControle = function (il) {
        var _this = this;
        var modal = this.modalCtrl.create('ReceberNoControlePage', { item: il });
        modal.onDidDismiss(function () {
            _this.carregaInsumos();
        });
        modal.present();
    };
    ControlePage.prototype.alterarPrevisao = function (il) {
        var _this = this;
        if (il.quantidade == 0) {
            this.showMensagem("Não é possível alterar a previsao se a quantidade é igual a zero!");
        }
        else {
            var modal = this.modalCtrl.create('AlterarPrevisaoControlePage', { item: il });
            modal.onDidDismiss(function () {
                _this.carregaInsumos();
            });
            modal.present();
        }
    };
    ControlePage.prototype.showMensagem = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                }
            ]
        });
        alert.present();
    };
    ControlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-controle',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\controle\controle.html"*/'<!--\n\n  Generated template for the ControlePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-row>\n\n      <ion-title>Controle</ion-title>\n\n      <ionic-selectable\n\n      item-content\n\n      [(ngModel)]="localizacao"\n\n      [items]="localizacoes"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      [focusSearchbar]="true"\n\n      [hasVirtualScroll]="true" \n\n      placeholder="Localizações"\n\n      (onChange)="carregaInsumos($event)">\n\n      <ng-template\n\n        ionicSelectableItemTemplate\n\n        let-port="item"\n\n        class="my-center-text">\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b"> {{port.nome}} </ion-label>\n\n        </ion-item>\n\n      </ng-template>\n\n    </ionic-selectable>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <div >\n\n        <ion-searchbar\n\n          placeholder="Busca pelo nome"\n\n          [showCancelButton]="shouldShowCancel"\n\n          (ionInput)="buscaInsumo($event,\'nome\')"\n\n          (ionCancel)="onCancel()"\n\n          (ionClear)="onCancel()">\n\n        </ion-searchbar>\n\n      </div>\n\n      <div >\n\n        <ion-searchbar\n\n          placeholder="Busca por cod. almoxarifado"\n\n          [showCancelButton]="shouldShowCancel"\n\n          (ionInput)="buscaInsumo($event,\'codalmox\')"\n\n          (ionCancel)="onCancel()"\n\n          (ionClear)="onCancel()">\n\n        </ion-searchbar>\n\n      </div>\n\n      <div >\n\n        <ion-searchbar\n\n          placeholder="Busca por Lote LEI"\n\n          [showCancelButton]="shouldShowCancel"\n\n          (ionInput)="buscaInsumo($event,\'lotelei\')"\n\n          (ionCancel)="onCancel()"\n\n          (ionClear)="onCancel()">\n\n        </ion-searchbar>\n\n      </div>\n\n      <div >\n\n        <ion-searchbar\n\n          placeholder="Busca por Lote LEI Principal"\n\n          [showCancelButton]="shouldShowCancel"\n\n          (ionInput)="buscaInsumo($event,\'sublotelei\')"\n\n          (ionCancel)="onCancel()"\n\n          (ionClear)="onCancel()">\n\n        </ion-searchbar>\n\n      </div>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-md-1 class="card-vermelho" style="display: flex; justify-content: center; align-items: center;"><b>reprovado</b></ion-col>\n\n      <ion-col col-md-1 class="card-amarelo" style="display: flex; justify-content: center; align-items: center;"><b>quarentena</b></ion-col>\n\n      <ion-col col-md-1 class="card-verde" style="display: flex; justify-content: center; align-items: center;"><b>aprovado</b></ion-col>\n\n    </ion-row>   \n\n  </ion-grid>\n\n  <ion-grid>\n\n  <ion-row class="alinha_itens_center">\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>COD ALMOX:</b>\n\n    </ion-col>\n\n    <ion-col col-md-3 class="cell-class">\n\n      <b>NOME:</b>\n\n    </ion-col>\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>QTD:</b>\n\n    </ion-col>\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>LT FORNECEDOR</b>\n\n    </ion-col>\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>LT LEI</b>\n\n    </ion-col>\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>APROVADO</b>\n\n    </ion-col>\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>IRRADIADO</b>\n\n    </ion-col>\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>RECEBER</b>\n\n    </ion-col>\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>DT PREVISÃO</b>\n\n    </ion-col>\n\n    <ion-col col-md-1 class="cell-class">\n\n      <b>LIBERAR</b>\n\n    </ion-col>\n\n  </ion-row>\n\n  \n\n    <ion-row *ngFor="let ins of insumosLocalizacao">\n\n      <ion-col col-md-1 class="{{ins.farol}}" style="\n\n        border-color: rgb(131, 125, 125); \n\n        border-width: .01em; \n\n        border-style:solid; \n\n        display: flex; \n\n        justify-content: center;\n\n        align-items: center;"><b>{{ins.codigoalmoxarifado}}</b></ion-col>\n\n      <ion-col col-md-3 class="cell-class"><b>{{ins.insumo.nome}}</b></ion-col>\n\n      <ion-col col-md-1 class="cell-class">{{ins.quantidade}} {{ins.unidadeEntrada.nome}}</ion-col>\n\n      <ion-col col-md-1 class="cell-class">{{ins.loteFornecedor}}</ion-col>\n\n      <ion-col col-md-1 class="cell-class">{{ins.loteLEI}}</ion-col>\n\n      <ion-col col-md-1 class="cell-class-icon">{{ins.aprovado != null ? ins.aprovado== true ? "SIM":"NÃO":""}}</ion-col>\n\n      <ion-col col-md-1 class="cell-class-icon">{{ins.irradiado}}</ion-col>\n\n      <ion-col col-md-1 class="cell-class-icon">\n\n        <button [color]="ins.recebidonocontrole != null?ins.recebidonocontrole == true?\'dark\':\'primary\':\'primary\'" ion-button icon-only (click)="receberParaControle(ins)" \n\n        tooltip="I\'m a tooltip below a button" positionV="bottom" arrow>\n\n          <ion-icon ios="ios-cube" md="md-cube"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-md-1 class="cell-class-icon">\n\n        <button ion-button icon-only [disabled]="ins.recebidonocontrole != null?ins.recebidonocontrole == true?false:true:true" (click)="alterarPrevisao(ins)">\n\n          {{"&nbsp;"+(ins.dataPrevisaoControle | date:\'dd/MM/yyyy\')+"&nbsp;"}}\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-md-1 class="cell-class-icon" >\n\n        <button ion-button icon-only [disabled]="ins.recebidonocontrole != null?ins.recebidonocontrole == true?false:true:true" (click)="liberarInsumo(ins)">\n\n          <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\controle\controle.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_domain_localizacao_service__["a" /* LocalizacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_domain_localizacao_service__["a" /* LocalizacaoService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__["a" /* InsumoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__["a" /* InsumoService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__["a" /* DateTimeFormatPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__["a" /* DateTimeFormatPipe */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__utils_datenow__["a" /* DateNow */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__utils_datenow__["a" /* DateNow */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* ModalController */]) === "function" && _l || Object])
    ], ControlePage);
    return ControlePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=controle.js.map

/***/ })

});
//# sourceMappingURL=30.js.map