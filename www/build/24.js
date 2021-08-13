webpackJsonp([24],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiberarInsumoControlePageModule", function() { return LiberarInsumoControlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__liberar_insumo_controle__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LiberarInsumoControlePageModule = /** @class */ (function () {
    function LiberarInsumoControlePageModule() {
    }
    LiberarInsumoControlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__liberar_insumo_controle__["a" /* LiberarInsumoControlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__liberar_insumo_controle__["a" /* LiberarInsumoControlePage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["b" /* IonicSelectableModule */],
            ],
        })
    ], LiberarInsumoControlePageModule);
    return LiberarInsumoControlePageModule;
}());

//# sourceMappingURL=liberar-insumo-controle.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberarInsumoControlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_localizacao_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_colaborador_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_datenow__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the LiberarInsumoControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LiberarInsumoControlePage = /** @class */ (function () {
    function LiberarInsumoControlePage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, dateNow, dateTimeFormatPipe, storage, colaboradorService, insumoService, localizacaoService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.dateNow = dateNow;
        this.dateTimeFormatPipe = dateTimeFormatPipe;
        this.storage = storage;
        this.colaboradorService = colaboradorService;
        this.insumoService = insumoService;
        this.localizacaoService = localizacaoService;
        this.loadingCtrl = loadingCtrl;
        this.localizacoes = [];
        this.paralocalizacoes = [];
        this.insumosLocalizacoes = [];
        this.movimentacao = {};
        this.mov = {};
        this.movimentacaogrid = {};
        this.localUser = this.storage.getLocalUser();
        this.hiddenselect = true;
        this.il = navParams.get('item');
        this.localizacao = this.il.localizacao;
        if (this.localizacao.aprovacao != null) {
            if (this.localizacao.aprovacao == true) {
                this.localizacaoService.findAllLocalizacoesFilhasByLocalizacaoPai(this.localizacao.id).subscribe(function (resp) {
                    _this.localizacoes = resp;
                    _this.localizacoes.forEach(function (val) {
                        if (val.resultado != null) {
                            if (val.resultado == true) {
                                _this.paralocalizacao = val;
                            }
                        }
                    });
                });
                if (this.paralocalizacao == null) {
                    this.hiddenselect = false;
                }
            }
            else {
                this.hiddenselect = false;
            }
        }
        else {
            this.hiddenselect = false;
        }
        this.movimentacao = {};
        this.itemMov = {
            insumo: this.il.insumo,
            quantidadeOrigem: this.il.quantidade,
            quantidadeMovimentada: 0,
            loteFornecedor: this.il.loteFornecedor,
            loteCR: this.il.loteCR,
            loteProducao: this.il.loteProducao,
            dataIrradiacao: this.il.dataIrradiacao,
            dataValidade: this.il.dataValidade,
            dataAprovacao: this.il.dataAprovacao,
            dataReproprovacao: this.il.dataReproprovacao,
            aprovado: this.il.aprovado,
            fieldsGarantiaQualidade: true,
            loteRecebimento: this.il.loteRecebimento,
            loteLEI: this.il.loteLEI,
            loteARM: this.il.loteARM,
            irradiado: this.il.irradiado,
            subloteLEI: this.il.subloteLEI,
            unidadeRecebida: this.il.unidadeRecebida,
            quantidadeVolume: this.il.quantidadeVolume,
            unidadeEntrada: this.il.unidadeEntrada,
            condambamostragemgc: this.il.condambamostragemgc,
            condambamostragemur: this.il.condambamostragemur,
            quantidadeDescartada: this.il.quantidadeDescartada,
            show: null,
            armario: this.il.armario,
            posicao: this.il.posicao,
            cas: this.il.cas,
        };
    }
    LiberarInsumoControlePage.prototype.ionViewDidLoad = function () {
        this.datamovimentacao = this.dateNow.getDateNow();
        this.loadParaLocalizacao();
    };
    LiberarInsumoControlePage.prototype.loadParaLocalizacao = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.localizacaoService.findAll().subscribe(function (response) {
            _this.paralocalizacoes = response.sort();
            loader.dismiss();
        });
    };
    LiberarInsumoControlePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    LiberarInsumoControlePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LiberarInsumoControlePage.prototype.valida = function (m) {
        if (m.descartado == true) {
            m.isDisabledutilizado = true;
        }
        else if (m.utilizado == true) {
            m.isDisableddescartado = true;
        }
        else {
            m.isDisabledutilizado = false;
            m.isDisableddescartado = false;
        }
    };
    LiberarInsumoControlePage.prototype.inserirMovimentacao = function () {
        this.validarCampos();
        var qtdvazio = false;
        var qtdacimaorigem = false;
        this.mov = {};
        this.mov.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
        this.mov.localizacaoOrigem = this.localizacao;
        this.mov.localizacaoDestino = this.paralocalizacao;
        console.log(this.mov);
    };
    LiberarInsumoControlePage.prototype.validarCampos = function () {
        if (this.itemMov.quantidadeMovimentada <= 0) {
            this.showMensagem("Campo quantidade não pode ser nulo!");
        }
    };
    LiberarInsumoControlePage.prototype.showMensagem = function (msg) {
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
    LiberarInsumoControlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-liberar-insumo-controle',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\liberar-insumo-controle\liberar-insumo-controle.html"*/'<!--\n  Generated template for the LiberarInsumoControlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title> Liberar Insumo </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel </span>\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item color="item_entrada">\n    <ion-label>Data da liberação</ion-label>\n    <ion-input style="padding-left: 10px" type="datetime-local" [(ngModel)]="datamovimentacao"> </ion-input>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Usuário logado:</ion-label>\n    <ion-label style="text-align: right;"><b>{{localUser.nome}}</b></ion-label>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Insumo:</ion-label>\n    <ion-label style="text-align: right;"><b>{{il.insumo.nome}}</b></ion-label>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Quantidade:</ion-label>\n    <ion-label style="text-align: right;"><b>{{il.quantidade}} {{il.unidadeEntrada.nome}}</b></ion-label>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Lote Fornecedor:</ion-label>\n    <ion-label style="text-align: right;"><b>{{il.loteFornecedor}}</b></ion-label>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Lote Lei:</ion-label>\n    <ion-label style="text-align: right;"><b>{{il.loteLEI}}</b></ion-label>\n  </ion-item>\n  \n  <ion-item color="item_entrada" [hidden]="hiddenselect">\n    <ion-label>Liberar para</ion-label>\n    <ionic-selectable \n      item-content\n      [(ngModel)]="paralocalizacao"\n      [items]="paralocalizacoes"\n      itemValueField="id"\n      itemTextField="nome"\n      [canSearch]="true"\n      [focusSearchbar]="true"\n      [hasVirtualScroll]="true" >\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n        <ion-item>\n          <ion-label text-wrap class="label_12_b">\n            {{item.objlocalizacaofilha != null ? item.objlocalizacaofilha.nome+" => "+ item.nome : item.nome}}\n          </ion-label>\n        </ion-item>\n      </ng-template>\n    </ionic-selectable>\n  </ion-item>\n\n     <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="number" placeholder="Quantidade" [(ngModel)]="itemMov.quantidadeMovimentada"> </ion-input>\n        </ion-item>\n      </ion-col> \n      <ion-col>\n        <ion-item>\n          <ion-label>Utilizado</ion-label>\n      <ion-checkbox color="primary" [(ngModel)]="itemMov.utilizado" [disabled]="mov.isDisabledutilizado" (click)="valida(mov)"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n          \n            \n      <ion-col>\n        <ion-item>\n          <ion-label>Descartado</ion-label>\n      <ion-checkbox color="secondary" [(ngModel)]="itemMov.descartado" [disabled]="mov.isDisableddescartado" (click)="valida(mov)"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row radio-group [(ngModel)]="itemMov.aprovado">\n      <ion-col>\n        <ion-item>\n          <ion-label>Aprovado?</ion-label>\n        </ion-item>\n      </ion-col> \n      <ion-col>\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio value="true"></ion-radio>\n        </ion-item>\n      </ion-col>\n          \n            \n      <ion-col>\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio value="false"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col col-12 style="text-align: center;" ><button ion-button color="secondary" [disabled]="botaoMovimenta" (click)="inserirMovimentacao()">Liberar</button></ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\liberar-insumo-controle\liberar-insumo-controle.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__utils_datenow__["a" /* DateNow */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utils_datenow__["a" /* DateNow */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__["a" /* DateTimeFormatPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__["a" /* DateTimeFormatPipe */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__services_domain_colaborador_service__["a" /* ColaboradorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_domain_colaborador_service__["a" /* ColaboradorService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__["a" /* InsumoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__["a" /* InsumoService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__services_domain_localizacao_service__["a" /* LocalizacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_domain_localizacao_service__["a" /* LocalizacaoService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* LoadingController */]) === "function" && _m || Object])
    ], LiberarInsumoControlePage);
    return LiberarInsumoControlePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=liberar-insumo-controle.js.map

/***/ })

});
//# sourceMappingURL=24.js.map