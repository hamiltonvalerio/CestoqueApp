webpackJsonp([15],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RastreamentoPageModule", function() { return RastreamentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rastreamento__ = __webpack_require__(916);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RastreamentoPageModule = /** @class */ (function () {
    function RastreamentoPageModule() {
    }
    RastreamentoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__rastreamento__["a" /* RastreamentoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__rastreamento__["a" /* RastreamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */],
            ],
        })
    ], RastreamentoPageModule);
    return RastreamentoPageModule;
}());

//# sourceMappingURL=rastreamento.module.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RastreamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_movimentacao_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_localizacao_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_time_format__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_datenow__ = __webpack_require__(358);
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
 * Generated class for the RastreamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RastreamentoPage = /** @class */ (function () {
    function RastreamentoPage(navCtrl, navParams, dateNow, dateTimeFormatPipe, localizacaoService, movimentacaoService, viewCtrl, alertCtrl, insumoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dateNow = dateNow;
        this.dateTimeFormatPipe = dateTimeFormatPipe;
        this.localizacaoService = localizacaoService;
        this.movimentacaoService = movimentacaoService;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.insumoService = insumoService;
        this.loadingCtrl = loadingCtrl;
        this.insumosLocalizacoes = [];
        this.insumosMovimentacoes = [];
    }
    RastreamentoPage.prototype.ionViewDidLoad = function () {
        this.loadLotesLEI();
    };
    RastreamentoPage.prototype.loadLotesLEI = function () {
        var _this = this;
        this.insumoService.findLotesLEIInsumosLocalizacoes().subscribe(function (response) {
            _this.insumosLocalizacoes = response.sort();
        }, function (error) {
            //loader.dismiss();
        });
    };
    RastreamentoPage.prototype.loteLEIChange = function (event) {
        var _this = this;
        this.insumoService.findInsumoEntradaByLoteLEI(event.value.loteLEI).subscribe(function (response) {
            _this.insumoEntradaDTO = response;
        }, function (error) {
            //loader.dismiss();
        });
        this.insumoService.findInsumosLocalizacoesByLoteLEI(event.value.loteLEI).subscribe(function (response) {
            _this.insumosLocalizacoesSelecionados = response.sort();
        }, function (error) {
            //loader.dismiss();movimentacoesPorLoteLEI
        });
        this.movimentacaoService.movimentacoesPorLoteLEI(event.value.loteLEI).subscribe(function (response) {
            _this.insumosMovimentacoes = response.sort();
            console.log(_this.insumosMovimentacoes);
        }, function (error) {
            //loader.dismiss();movimentacoesPorLoteLEI
        });
    };
    RastreamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-rastreamento',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\rastreamento\rastreamento.html"*/'<!--\n  Generated template for the RastreamentoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Rastreamento de Insumos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Lotes LEI cadastrados</ion-label>\n    <ionic-selectable \n      #localizacoesComponent\n      item-content\n      [(ngModel)]="insumolocalizacao"\n      [items]="insumosLocalizacoes"\n      itemValueField="id"\n      itemTextField="loteLEI"\n      [canSearch]="true"\n      [focusSearchbar]="true"\n      (onChange)="loteLEIChange($event)"\n      [hasVirtualScroll]="true" >\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n        <ion-item>\n          <ion-label text-wrap class="label_12_b">\n            {{item.loteLEI}}\n          </ion-label>\n        </ion-item>\n      </ng-template>\n    </ionic-selectable>\n  </ion-item>\n  <ion-grid [hidden]="insumoEntradaDTO != null ? false : true">\n    <ion-row><ion-col><ion-label></ion-label></ion-col></ion-row>\n    <ion-row><ion-col><ion-label></ion-label></ion-col></ion-row>\n    <ion-row>\n      <ion-col col-4 class="cell-class">\n       {{insumoEntradaDTO != null?"Data e Hora da entrada: "+insumoEntradaDTO.entrada.dataEntrada:"" }}\n      </ion-col>\n      <ion-col col-4 class="cell-class">\n        {{insumoEntradaDTO != null?"Localização de entrada: "+insumoEntradaDTO.entrada.localizacao.nome:"" }}\n      </ion-col>\n      <ion-col col-4 class="cell-class">\n        {{insumoEntradaDTO != null?"Usuário de cadastro: "+insumoEntradaDTO.entrada.usualt:"" }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-8 class="cell-class">\n       <b>{{insumoEntradaDTO != null?"Insumo: "+insumoEntradaDTO.insumo.nome:"" }}</b>\n      </ion-col>\n      <ion-col col-4 class="cell-class">\n        <b>{{insumoEntradaDTO != null?"Lote LEI: "+insumoEntradaDTO.loteLEI:"" }}</b>\n       </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 class="cell-class">\n       {{insumoEntradaDTO != null?"Lote Fabricante: "+insumoEntradaDTO.loteFornecedor:"" }}\n      </ion-col>\n      <ion-col col-4 class="cell-class">\n        {{insumoEntradaDTO != null?"Lote CR: "+insumoEntradaDTO.loteCR:"" }}\n      </ion-col>\n      <ion-col col-4 class="cell-class">\n        {{insumoEntradaDTO != null?"Lote ARM: "+insumoEntradaDTO.loteARM:"" }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 class="cell-class">\n        {{insumoEntradaDTO != null?"Data de Fabricação: "+(insumoEntradaDTO.dataFabricacao | date:\'dd/MM/yyyy\'):" " }}\n      </ion-col>\n      <ion-col col-4 class="cell-class">\n        {{insumoEntradaDTO != null?"Data de Validade: "+(insumoEntradaDTO.dataValidade | date:\'dd/MM/yyyy\'):" " }}\n      </ion-col>\n      <ion-col col-4 class="cell-class">\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 class="cell-class">\n        {{insumoEntradaDTO != null?"Quantidade recebida: "+insumoEntradaDTO.quantidadeVolume:" " }}\n        {{insumoEntradaDTO != null?insumoEntradaDTO.unidadeRecebida.nome+" (s)":" " }} \n      </ion-col>\n      <ion-col col-4 class="cell-class">\n        {{insumoEntradaDTO != null?"Quantidade de entrada: "+insumoEntradaDTO.quantidade:" " }}\n        {{insumoEntradaDTO != null?insumoEntradaDTO.unidadeEntrada.nome+" (s)":"" }}\n      </ion-col>\n      <ion-col col-4 class="cell-class">\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid [hidden]="insumoEntradaDTO != null ? false : true">\n    <ion-row class="alinha_itens_center"><ion-col ><ion-label class="my-label">Movimentações Realizadas</ion-label></ion-col></ion-row>\n    <ion-row>\n      <ion-col size="3" class="cell-class">\n        De localização:\n      </ion-col>\n      <ion-col size="1" class="cell-class">\n        Quantidade:\n      </ion-col>\n      <ion-col size="3" class="cell-class">\n        Para localização:\n      </ion-col>\n      <ion-col size="2" class="cell-class">\n        Data da movimentação\n      </ion-col>\n      <ion-col size="3" class="cell-class">\n        Usuário que movimentou\n      </ion-col>\n      <ion-col size="1" class="cell-class">\n        Aprovado pelo CQ\n      </ion-col>\n      <ion-col size="1" class="cell-class">\n        Irradiado\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let im of insumosMovimentacoes">\n      <ion-col size="3" class="cell-class">\n        {{im.localizacaoOrigem.nome}}\n      </ion-col>\n      <ion-col size="1" class="cell-class">\n        {{im.quantidadeRealMovimentada}}\n      </ion-col>\n      <ion-col size="3" class="cell-class">\n        {{im.localizacao.nome}}\n      </ion-col>\n      <ion-col size="2" class="cell-class">\n        {{im.datalt | date:\'dd/MM/yyyy HH:mm\'}}\n      </ion-col>\n      <ion-col size="3" class="cell-class">\n        {{im.usualt}}\n      </ion-col>\n      <ion-col size="1" class="cell-class">\n        {{ im.aprovado!=null?(im.aprovado?"Sim":"Não"):""}}\n      </ion-col>\n      <ion-col size="1" class="cell-class">\n        {{ im.irradiado!=null?(im.irradiado?"Sim":"Não"):""}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\rastreamento\rastreamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__utils_datenow__["a" /* DateNow */],
            __WEBPACK_IMPORTED_MODULE_3__utils_date_time_format__["a" /* DateTimeFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_movimentacao_service__["a" /* MovimentacaoService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* LoadingController */]])
    ], RastreamentoPage);
    return RastreamentoPage;
}());

//# sourceMappingURL=rastreamento.js.map

/***/ })

});
//# sourceMappingURL=15.js.map