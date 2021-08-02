webpackJsonp([25],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorPageModule", function() { return FornecedorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fornecedor__ = __webpack_require__(912);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fornecedor__["a" /* FornecedorPage */]),
            ],
        })
    ], FornecedorPageModule);
    return FornecedorPageModule;
}());

//# sourceMappingURL=fornecedor.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_fornecedor_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
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
    function FornecedorPage(navCtrl, navParams, fornecedorService, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fornecedorService = fornecedorService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.itensFornecedores = [];
        this.page = 0;
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
        var loader = this.presentLoading();
        this.itensFornecedores = [];
        this.fornecedorService.findTotosPaginado(this.page, 30)
            .subscribe(function (response) {
            var start = _this.itensFornecedores.length;
            _this.itensFornecedores = _this.itensFornecedores.concat(response['content']);
            var end = _this.itensFornecedores.length - 1;
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    FornecedorPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({ content: "Aguarde..." });
        loader.present();
        return loader;
    };
    FornecedorPage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.itensFornecedores = [];
        this.getItens();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    FornecedorPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.getItens();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    FornecedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-fornecedor',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\fornecedor\fornecedor.html"*/'<!--\n\n  Generated template for the FornecedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Fornecedores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n      <ion-icon name="add-circle" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let forn of itensFornecedores">\n\n      <h3>{{forn.nome}}</h3>\n\n      <p>{{forn.cnpj}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\fornecedor\fornecedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_fornecedor_service__["a" /* FornecedorService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
    ], FornecedorPage);
    return FornecedorPage;
}());

//# sourceMappingURL=fornecedor.js.map

/***/ })

});
//# sourceMappingURL=25.js.map