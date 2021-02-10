webpackJsonp([13],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimentacaoPageModule", function() { return MovimentacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movimentacao__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovimentacaoPageModule = /** @class */ (function () {
    function MovimentacaoPageModule() {
    }
    MovimentacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movimentacao__["a" /* MovimentacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movimentacao__["a" /* MovimentacaoPage */]),
            ],
        })
    ], MovimentacaoPageModule);
    return MovimentacaoPageModule;
}());

//# sourceMappingURL=movimentacao.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovimentacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
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
 * Generated class for the MovimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovimentacaoPage = /** @class */ (function () {
    function MovimentacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MovimentacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovimentacaoPage');
    };
    MovimentacaoPage.prototype.openCadastroMovimentacao = function () {
        var _this = this;
        this.navCtrl.push('CadastroMovimentacaoPage', {}, {
            animate: true,
            direction: 'forward'
        }).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                //console.log(data);
                //this.getItens();
            });
        });
    };
    MovimentacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-movimentacao',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\movimentacao\movimentacao.html"*/'<!--\n\n  Generated template for the MovimentacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Movimentação de Insumos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openCadastroMovimentacao()">\n\n      <ion-icon name="add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\movimentacao\movimentacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], MovimentacaoPage);
    return MovimentacaoPage;
}());

//# sourceMappingURL=movimentacao.js.map

/***/ })

});
//# sourceMappingURL=13.js.map