webpackJsonp([11],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacaoInsumosPageModule", function() { return LocalizacaoInsumosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizacao_insumos__ = __webpack_require__(739);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalizacaoInsumosPageModule = /** @class */ (function () {
    function LocalizacaoInsumosPageModule() {
    }
    LocalizacaoInsumosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__localizacao_insumos__["a" /* LocalizacaoInsumosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__localizacao_insumos__["a" /* LocalizacaoInsumosPage */]),
            ],
        })
    ], LocalizacaoInsumosPageModule);
    return LocalizacaoInsumosPageModule;
}());

//# sourceMappingURL=localizacao-insumos.module.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoInsumosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_localizacao_service__ = __webpack_require__(350);
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
 * Generated class for the LocalizacaoInsumosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalizacaoInsumosPage = /** @class */ (function () {
    function LocalizacaoInsumosPage(navCtrl, navParams, LocalizacaoService, LoadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LocalizacaoService = LocalizacaoService;
        this.LoadingController = LoadingController;
    }
    LocalizacaoInsumosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocalizacaoInsumosPage');
        this.loadData();
    };
    LocalizacaoInsumosPage.prototype.loadData = function () {
        var localizacaoId = this.navParams.get('localizacao_id');
        var loader = this.presentLoading();
    };
    LocalizacaoInsumosPage.prototype.presentLoading = function () {
        var loader = this.LoadingController.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    LocalizacaoInsumosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-localizacao-insumos',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\localizacao-insumos\localizacao-insumos.html"*/'<!--\n\n  Generated template for the LocalizacaoInsumosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>localizacao-insumos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\localizacao-insumos\localizacao-insumos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
    ], LocalizacaoInsumosPage);
    return LocalizacaoInsumosPage;
}());

//# sourceMappingURL=localizacao-insumos.js.map

/***/ })

});
//# sourceMappingURL=11.js.map