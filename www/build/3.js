webpackJsonp([3],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorPageModule", function() { return FornecedorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fornecedor__ = __webpack_require__(728);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FornecedorPageModule = /** @class */ (function () {
    function FornecedorPageModule() {
    }
    FornecedorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fornecedor__["a" /* FornecedorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fornecedor__["a" /* FornecedorPage */]),
            ],
        })
    ], FornecedorPageModule);
    return FornecedorPageModule;
}());

//# sourceMappingURL=fornecedor.module.js.map

/***/ }),

/***/ 709:
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
        return itens;
    };
    return ConverteListaIonItemDivider;
}());

//# sourceMappingURL=converte-list-ionitemdivider.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_converte_list_ionitemdivider__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_fornecedor_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(87);
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
 * Generated class for the FornecedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FornecedorPage = /** @class */ (function () {
    function FornecedorPage(navCtrl, navParams, fornecedorService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fornecedorService = fornecedorService;
        this.modalCtrl = modalCtrl;
        this.itensFornecedores = [];
    }
    FornecedorPage.prototype.ionViewDidLoad = function () {
        this.getItens();
    };
    FornecedorPage.prototype.openModal = function () {
        var _this = this;
        console.log("aqui");
        var modal = this.modalCtrl.create('CadastroFornecedorPage');
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    FornecedorPage.prototype.getItens = function () {
        var _this = this;
        this.fornecedorService.findAll()
            .subscribe(function (response) {
            _this.itensFornecedores = new __WEBPACK_IMPORTED_MODULE_0__utils_converte_list_ionitemdivider__["a" /* ConverteListaIonItemDivider */]().retornaArrayGroup(response.sort());
            ;
        }, function (error) { });
    };
    FornecedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-fornecedor',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\fornecedor\fornecedor.html"*/'<!--\n\n  Generated template for the FornecedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Fornecedores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n      <ion-icon name="add-circle" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item-group *ngFor="let item of itensFornecedores">\n\n\n\n    <ion-item-divider light>{{item.letra}}</ion-item-divider>\n\n    <ion-item *ngFor="let forn of item.arrayDeItens">\n\n      <h3>{{forn.nome}}</h3>\n\n      <p>{{forn.cnpj}}</p>\n\n    </ion-item>\n\n\n\n  </ion-item-group>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\fornecedor\fornecedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_fornecedor_service__["a" /* FornecedorService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */]])
    ], FornecedorPage);
    return FornecedorPage;
}());

//# sourceMappingURL=fornecedor.js.map

/***/ })

});
//# sourceMappingURL=3.js.map