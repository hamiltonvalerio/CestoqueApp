webpackJsonp([8],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorPageModule", function() { return FornecedorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fornecedor__ = __webpack_require__(698);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fornecedor__["a" /* FornecedorPage */]),
            ],
        })
    ], FornecedorPageModule);
    return FornecedorPageModule;
}());

//# sourceMappingURL=fornecedor.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FornecedorPage = /** @class */ (function () {
    function FornecedorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FornecedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FornecedorPage');
    };
    FornecedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fornecedor',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\fornecedor\fornecedor.html"*/'<!--\n\n  Generated template for the FornecedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n<<<<<<< HEAD\n\n    <ion-title>fornecedor</ion-title>\n\n=======\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Fornecedores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n      <ion-icon name="add-circle" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n>>>>>>> 95d8ab5... Git Reset\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    \n\n<<<<<<< HEAD\n\n    <button ion-item *ngFor="let item of itens">\n\n      <ion-label>{{ item.nome }}</ion-label>\n\n      <ion-label>{{ item.cnpj }}</ion-label>\n\n    </button>\n\n=======\n\n    <ion-item *ngFor="let item of itens">\n\n      <ion-label>\n\n        <h2>{{ item.nome }}</h2>\n\n        <h3>{{ item.cnpj }}</h3>\n\n        <p></p>\n\n      </ion-label>\n\n    </ion-item>\n\n>>>>>>> 95d8ab5... Git Reset\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\fornecedor\fornecedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FornecedorPage);
    return FornecedorPage;
}());

//# sourceMappingURL=fornecedor.js.map

/***/ })

});
//# sourceMappingURL=8.js.map