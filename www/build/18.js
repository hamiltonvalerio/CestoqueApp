webpackJsonp([18],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RastreamentoPageModule", function() { return RastreamentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rastreamento__ = __webpack_require__(931);
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
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["b" /* IonicSelectableModule */],
            ],
        })
    ], RastreamentoPageModule);
    return RastreamentoPageModule;
}());

//# sourceMappingURL=rastreamento.module.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RastreamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_movimentacao_service__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_localizacao_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_time_format__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_datenow__ = __webpack_require__(359);
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
            selector: 'page-rastreamento',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\rastreamento\rastreamento.html"*/'<!--\n\n  Generated template for the RastreamentoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Rastreamento de Insumos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Lotes LEI cadastrados</ion-label>\n\n    <ionic-selectable \n\n      #localizacoesComponent\n\n      item-content\n\n      [(ngModel)]="insumolocalizacao"\n\n      [items]="insumosLocalizacoes"\n\n      itemValueField="id"\n\n      itemTextField="loteLEI"\n\n      [canSearch]="true"\n\n      [focusSearchbar]="true"\n\n      (onChange)="loteLEIChange($event)"\n\n      [hasVirtualScroll]="true" >\n\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{item.loteLEI}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ng-template>\n\n    </ionic-selectable>\n\n  </ion-item>\n\n  <ion-grid [hidden]="insumoEntradaDTO != null ? false : true">\n\n    <ion-row><ion-col><ion-label></ion-label></ion-col></ion-row>\n\n    <ion-row><ion-col><ion-label></ion-label></ion-col></ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 class="cell-class">\n\n       {{insumoEntradaDTO != null?"Data e Hora da entrada: "+insumoEntradaDTO.entrada.dataEntrada.toString():"" }}\n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n        {{insumoEntradaDTO != null?"Localização de entrada: "+insumoEntradaDTO.entrada.localizacao.nome:"" }}\n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n        {{insumoEntradaDTO != null?"Usuário de cadastro: "+insumoEntradaDTO.entrada.usualt:"" }}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-8 class="cell-class">\n\n       <b>{{insumoEntradaDTO != null?"Insumo: "+insumoEntradaDTO.insumo.nome:"" }}</b>\n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n        <b>{{insumoEntradaDTO != null?"Lote LEI: "+insumoEntradaDTO.loteLEI:"" }}</b>\n\n       </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 class="cell-class">\n\n       {{insumoEntradaDTO != null?"Lote Fabricante: "+insumoEntradaDTO.loteFornecedor:"" }}\n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n        {{insumoEntradaDTO != null?"Lote CR: "+insumoEntradaDTO.loteCR:"" }}\n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n        {{insumoEntradaDTO != null?"Lote ARM: "+insumoEntradaDTO.loteARM:"" }}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 class="cell-class">\n\n        {{insumoEntradaDTO != null?"Data de Fabricação: "+(insumoEntradaDTO.dataFabricacao | date:\'dd/MM/yyyy\'):" " }}\n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n        {{insumoEntradaDTO != null?"Data de Validade: "+(insumoEntradaDTO.dataValidade | date:\'dd/MM/yyyy\'):" " }}\n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 class="cell-class">\n\n        {{insumoEntradaDTO != null?"Quantidade recebida: "+insumoEntradaDTO.quantidadeVolume:" " }}\n\n        {{insumoEntradaDTO != null?insumoEntradaDTO.unidadeRecebida.nome+" (s)":" " }} \n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n        {{insumoEntradaDTO != null?"Quantidade de entrada: "+insumoEntradaDTO.quantidade:" " }}\n\n        {{insumoEntradaDTO != null?insumoEntradaDTO.unidadeEntrada.nome+" (s)":"" }}\n\n      </ion-col>\n\n      <ion-col col-4 class="cell-class">\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid [hidden]="insumoEntradaDTO != null ? false : true">\n\n    <ion-row class="alinha_itens_center"><ion-col ><ion-label class="my-label">Movimentações Realizadas</ion-label></ion-col></ion-row>\n\n    <ion-row>\n\n      <ion-col size="3" class="cell-class">\n\n        De localização:\n\n      </ion-col>\n\n      <ion-col size="1" class="cell-class">\n\n        Quantidade:\n\n      </ion-col>\n\n      <ion-col size="3" class="cell-class">\n\n        Para localização:\n\n      </ion-col>\n\n      <ion-col size="2" class="cell-class">\n\n        Data da movimentação\n\n      </ion-col>\n\n      <ion-col size="3" class="cell-class">\n\n        Usuário que movimentou\n\n      </ion-col>\n\n      <ion-col size="1" class="cell-class">\n\n        Aprovado pelo CQ\n\n      </ion-col>\n\n      <ion-col size="1" class="cell-class">\n\n        Irradiado\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let im of insumosMovimentacoes">\n\n      <ion-col size="3" class="cell-class">\n\n        {{im.localizacaoOrigem.nome}}\n\n      </ion-col>\n\n      <ion-col size="1" class="cell-class">\n\n        {{im.quantidadeRealMovimentada}}\n\n      </ion-col>\n\n      <ion-col size="3" class="cell-class">\n\n        {{im.localizacao.nome}}\n\n      </ion-col>\n\n      <ion-col size="2" class="cell-class">\n\n        {{im.datalt | date:\'dd/MM/yyyy HH:mm\'}}\n\n      </ion-col>\n\n      <ion-col size="3" class="cell-class">\n\n        {{im.usualt}}\n\n      </ion-col>\n\n      <ion-col size="1" class="cell-class">\n\n        {{ im.aprovado!=null?(im.aprovado?"Sim":"Não"):""}}\n\n      </ion-col>\n\n      <ion-col size="1" class="cell-class">\n\n        {{ im.irradiado!=null?(im.irradiado?"Sim":"Não"):""}}\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\rastreamento\rastreamento.html"*/,
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
//# sourceMappingURL=18.js.map