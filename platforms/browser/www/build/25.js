webpackJsonp([25],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiberarInsumoControlePageModule", function() { return LiberarInsumoControlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__liberar_insumo_controle__ = __webpack_require__(923);
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

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberarInsumoControlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_movimentacao_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_localizacao_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_date_time_format__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_insumo_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_colaborador_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_datenow__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(46);
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
    function LiberarInsumoControlePage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, dateNow, dateTimeFormatPipe, storage, colaboradorService, insumoService, localizacaoService, loadingCtrl, movimentacaoService) {
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
        this.movimentacaoService = movimentacaoService;
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
                                _this.hiddenselect = true;
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
        var _this = this;
        if (this.validarCampos()) {
            return;
        }
        else {
            var im = [];
            im.push(this.itemMov);
            var qtdvazio_1 = false;
            var qtdacimaorigem_1 = false;
            this.mov = {};
            this.mov.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
            this.mov.localizacaoOrigem = this.localizacao;
            this.mov.localizacaoDestino = this.paralocalizacao;
            this.mov.itens = im;
            this.mov.itens.forEach(function (element) {
                if (element.quantidadeMovimentada != null) {
                    if (element.quantidadeMovimentada == 0) {
                        qtdvazio_1 = true;
                    }
                    else if (element.quantidadeMovimentada > element.quantidadeOrigem) {
                        qtdacimaorigem_1 = true;
                    }
                    else {
                        qtdvazio_1 = false;
                        if (element.utilizado == true) {
                            var valor = element.quantidadeMovimentada;
                            element.quantidadeUtilizada = valor;
                            element.quantidadeMovimentada = element.quantidadeOrigem - element.quantidadeMovimentada;
                        }
                        if (element.descartado == true) {
                            var valor = element.quantidadeMovimentada;
                            element.quantidadeDescartada = valor;
                            element.quantidadeMovimentada = element.quantidadeOrigem - element.quantidadeMovimentada;
                        }
                    }
                }
                else {
                    qtdvazio_1 = true;
                }
                if (qtdvazio_1) {
                    _this.showQtdVazio();
                }
                else if (qtdacimaorigem_1) {
                    _this.showQtdAcimaDaOrigem();
                }
                else {
                    _this.movimentacaoService.insert(_this.mov).subscribe(function (response) {
                        _this.showInsertOk();
                    }, function (error) { });
                }
            });
        }
    };
    LiberarInsumoControlePage.prototype.validarCampos = function () {
        if (this.itemMov.quantidadeMovimentada <= 0) {
            this.showMensagem("Campo quantidade não pode ser nulo!");
            return true;
        }
        if (!this.itemMov.utilizado && !this.itemMov.descartado) {
            this.showMensagem("Escolha utilizado ou descartado!");
            return true;
        }
        if (this.itemMov.aprovado == null) {
            this.showMensagem("Necessário aprovar ou reprovar o insumo para liberação!");
            return true;
        }
        if (!this.hiddenselect) {
            if (this.paralocalizacao == null) {
                this.showMensagem("Necessário selecionar uma localização de destino!");
                return true;
            }
        }
        return false;
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
    LiberarInsumoControlePage.prototype.showQtdVazio = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: 'Não é possível inserir movimentação sem quantidade!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                }
            ]
        });
        alert.present();
    };
    LiberarInsumoControlePage.prototype.showQtdAcimaDaOrigem = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: 'Quantidade de movimentação não pode ser maior que a quantidade de origem!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                }
            ]
        });
        alert.present();
    };
    LiberarInsumoControlePage.prototype.showInsertOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Liberação efetuada com sucesso!',
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
    LiberarInsumoControlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
            selector: 'page-liberar-insumo-controle',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\liberar-insumo-controle\liberar-insumo-controle.html"*/'<!--\n  Generated template for the LiberarInsumoControlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title> Liberar Insumo </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel </span>\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item color="item_entrada">\n    <ion-label>Data da liberação</ion-label>\n    <ion-input style="padding-left: 10px" type="datetime-local" [(ngModel)]="datamovimentacao"> </ion-input>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Usuário logado:</ion-label>\n    <ion-label style="text-align: right;"><b>{{localUser.nome}}</b></ion-label>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Insumo:</ion-label>\n    <ion-label style="text-align: right;"><b>{{il.insumo.nome}}</b></ion-label>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Quantidade:</ion-label>\n    <ion-label style="text-align: right;"><b>{{il.quantidade}} {{il.unidadeEntrada.nome}}</b></ion-label>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Lote Fornecedor:</ion-label>\n    <ion-label style="text-align: right;"><b>{{il.loteFornecedor}}</b></ion-label>\n  </ion-item>\n  <ion-item color="item_entrada">\n    <ion-label>Lote Lei:</ion-label>\n    <ion-label style="text-align: right;"><b>{{il.loteLEI}}</b></ion-label>\n  </ion-item>\n  \n  <ion-item color="item_entrada" [hidden]="hiddenselect">\n    <ion-label>Liberar para</ion-label>\n    <ionic-selectable \n      item-content\n      [(ngModel)]="paralocalizacao"\n      [items]="paralocalizacoes"\n      itemValueField="id"\n      itemTextField="nome"\n      [canSearch]="true"\n      [focusSearchbar]="true"\n      [hasVirtualScroll]="true" >\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n        <ion-item>\n          <ion-label text-wrap class="label_12_b">\n            {{item.objlocalizacaofilha != null ? item.objlocalizacaofilha.nome+" => "+ item.nome : item.nome}}\n          </ion-label>\n        </ion-item>\n      </ng-template>\n    </ionic-selectable>\n  </ion-item>\n\n     <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="number" placeholder="Quantidade" [(ngModel)]="itemMov.quantidadeMovimentada"> </ion-input>\n        </ion-item>\n      </ion-col> \n      <ion-col>\n        <ion-item>\n          <ion-label>Utilizado</ion-label>\n      <ion-checkbox color="primary" [(ngModel)]="itemMov.utilizado" [disabled]="itemMov.isDisabledutilizado" (click)="valida(itemMov)"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n          \n            \n      <ion-col>\n        <ion-item>\n          <ion-label>Descartado</ion-label>\n      <ion-checkbox color="secondary" [(ngModel)]="itemMov.descartado" [disabled]="itemMov.isDisableddescartado" (click)="valida(itemMov)"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row radio-group [(ngModel)]="itemMov.aprovado">\n      <ion-col>\n        <ion-item>\n          <ion-label>Aprovado?</ion-label>\n        </ion-item>\n      </ion-col> \n      <ion-col>\n        <ion-item>\n          <ion-label>Sim</ion-label>\n          <ion-radio value="true"></ion-radio>\n        </ion-item>\n      </ion-col>\n          \n            \n      <ion-col>\n        <ion-item>\n          <ion-label>Não</ion-label>\n          <ion-radio value="false"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col col-12 style="text-align: center;" ><button ion-button color="secondary" [disabled]="botaoMovimenta" (click)="inserirMovimentacao()">Liberar</button></ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\liberar-insumo-controle\liberar-insumo-controle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__utils_datenow__["a" /* DateNow */],
            __WEBPACK_IMPORTED_MODULE_2__utils_date_time_format__["a" /* DateTimeFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_colaborador_service__["a" /* ColaboradorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_movimentacao_service__["a" /* MovimentacaoService */]])
    ], LiberarInsumoControlePage);
    return LiberarInsumoControlePage;
}());

//# sourceMappingURL=liberar-insumo-controle.js.map

/***/ })

});
//# sourceMappingURL=25.js.map