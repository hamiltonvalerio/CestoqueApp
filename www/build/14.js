webpackJsonp([14],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradaPageModule", function() { return EntradaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrada__ = __webpack_require__(733);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntradaPageModule = /** @class */ (function () {
    function EntradaPageModule() {
    }
    EntradaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entrada__["a" /* EntradaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrada__["a" /* EntradaPage */]),
            ],
        })
    ], EntradaPageModule);
    return EntradaPageModule;
}());

//# sourceMappingURL=entrada.module.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntradaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_entrada_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
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
 * Generated class for the EntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntradaPage = /** @class */ (function () {
    function EntradaPage(navCtrl, navParams, entradaService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entradaService = entradaService;
        this.modalCtrl = modalCtrl;
        this.page = 0;
        this.showDetails = false;
    }
    EntradaPage.prototype.ionViewDidLoad = function () {
        this.getItens();
    };
    EntradaPage.prototype.getItens = function () {
        var _this = this;
        this.entradaService.findAll()
            .subscribe(function (response) {
            //this.itensEntradas = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
            _this.itensEntradas = response.sort();
            console.log(_this.itensEntradas);
        }, function (error) { });
    };
    EntradaPage.prototype.openModal = function () {
        var _this = this;
        console.log("aqui");
        var modal = this.modalCtrl.create('CadastroEntradaPage');
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    EntradaPage.prototype.openCadastroEntrada = function () {
        this.navCtrl.push('CadastroEntradaPage', {}, { animate: true, direction: 'forward' });
    };
    EntradaPage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.getItens();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    EntradaPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.getItens();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    EntradaPage.prototype.toggleDetails = function (show, i) {
        this.itensEntradas.map(function (_, index) {
            if (index == i) {
                _.show = !_.show;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myNav'),
        __metadata("design:type", Object)
    ], EntradaPage.prototype, "nav", void 0);
    EntradaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-entrada',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\entrada\entrada.html"*/'<!--\n  Generated template for the EntradaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Entradas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openCadastroEntrada()">\n      <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let ent of itensEntradas; let i = index;">\n    <ion-card-header type="button" (click)="toggleDetails(ent.show,i)">\n      <ion-icon name="arrow-down"></ion-icon>\n      <ion-item>\n        <p>Número da Requisição: {{ent.numRequisicao}}</p>\n        <p>Data de Entrada: {{ent.dataEntrada}}</p>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n      <ion-list *ngIf="ent.show">\n        <ion-label>Detalhes</ion-label>\n        <p>Nº do Documento LIA: {{ent.numLIA}}</p>\n        <ion-list *ngFor="let ient of ent.itens">\n          <ion-row>Produto: {{ient.insumo.nome}}</ion-row>\n          <ion-row>Quantidade Entrada: {{ient.quantidade}}</ion-row>\n          <ion-row>Quantidade Atual: {{ient.insumo.quantidade}}</ion-row>\n          <ion-row>Lote Fornecedor: {{ient.loteFornecedor}}</ion-row>\n          <ion-row>Lote CR: {{ient.loteCR}}</ion-row>\n        </ion-list>\n      </ion-list>\n    </ion-item>\n    \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\entrada\entrada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_entrada_service__["a" /* EntradaService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]])
    ], EntradaPage);
    return EntradaPage;
}());

//# sourceMappingURL=entrada.js.map

/***/ })

});
//# sourceMappingURL=14.js.map