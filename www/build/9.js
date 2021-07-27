webpackJsonp([9],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioPageModule", function() { return InventarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventario__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InventarioPageModule = /** @class */ (function () {
    function InventarioPageModule() {
    }
    InventarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inventario__["a" /* InventarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inventario__["a" /* InventarioPage */]),
            ],
        })
    ], InventarioPageModule);
    return InventarioPageModule;
}());

//# sourceMappingURL=inventario.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverteListaIonItemDivider; });
var ConverteListaIonItemDivider = /** @class */ (function () {
    function ConverteListaIonItemDivider() {
    }
    /**
     * name
     */
    ConverteListaIonItemDivider.prototype.retornaArrayGroup = function (responseSorte) {
        var itens = [];
        var itensOrdenados = [];
        var letraAtual = "";
        var itensAtuaisDeRetorno = [];
        itensOrdenados = responseSorte;
        itensOrdenados.forEach(function (value, index) {
            if (value.nome.charAt(0) != letraAtual) {
                letraAtual = value.nome.charAt(0);
                var newGroup = {
                    letra: letraAtual,
                    arrayDeItens: []
                };
                itensAtuaisDeRetorno = newGroup.arrayDeItens;
                itens.push(newGroup);
            }
            itensAtuaisDeRetorno.push(value);
        });
        console.log(itens);
        return itens;
    };
    return ConverteListaIonItemDivider;
}());

//# sourceMappingURL=converte-list-ionitemdivider.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_converte_list_ionitemdivider__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_localizacao_service__ = __webpack_require__(355);
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
 * Generated class for the InventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InventarioPage = /** @class */ (function () {
    function InventarioPage(navCtrl, navParams, localizacaoService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localizacaoService = localizacaoService;
        this.modalCtrl = modalCtrl;
        this.itensLocalizacoes = [];
    }
    InventarioPage.prototype.ionViewDidLoad = function () {
        this.getItens();
    };
    InventarioPage.prototype.getItens = function () {
        var _this = this;
        this.localizacaoService.findAll()
            .subscribe(function (response) {
            _this.itensLocalizacoes = new __WEBPACK_IMPORTED_MODULE_0__utils_converte_list_ionitemdivider__["a" /* ConverteListaIonItemDivider */]().retornaArrayGroup(response.sort());
        }, function (error) { });
    };
    InventarioPage.prototype.openItem = function (itemId, itemNome, itemAtualizaqtdminima, itemControle, localizacao_filha) {
        this.navCtrl.push('LocalizacaoInsumosPage', {
            localizacao_id: itemId,
            localizacao_nome: itemNome,
            localizacao_atualizaqtdminima: itemAtualizaqtdminima,
            localizacao_controle: itemControle,
            localizacao_filha: localizacao_filha,
        });
    };
    InventarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-inventario',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\inventario\inventario.html"*/'<!--\n  Generated template for the InventarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inventário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid *ngFor="let item of itensLocalizacoes">\n    <ion-row *ngFor="let l of item.arrayDeItens">\n      <ion-col>\n        <h6>{{l.objlocalizacaofilha != null ? l.objlocalizacaofilha.nome+" => "+ l.nome : l.nome}}</h6>\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon name="search" (click)="openItem(l.id, l.nome, l.atualizaqtdminima, l.aprovacao, l.localizacao_filha)" title="Visualizar insumos da localização" positionV="bottom"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\inventario\inventario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ModalController */]])
    ], InventarioPage);
    return InventarioPage;
}());

//# sourceMappingURL=inventario.js.map

/***/ })

});
//# sourceMappingURL=9.js.map