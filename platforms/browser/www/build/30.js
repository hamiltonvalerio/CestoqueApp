webpackJsonp([30],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(916);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_colaborador_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, insumoService, colaboradorService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.insumoService = insumoService;
        this.colaboradorService = colaboradorService;
        this.storage = storage;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.insumoService.findAll().subscribe(function (tot) {
            _this.totalinsumos = tot.length;
        });
        this.getPerfisUserLogado();
    };
    DashboardPage.prototype.getPerfisUserLogado = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (Array.isArray(localUser.perfis) && !localUser.perfis.length) {
            this.colaboradorService.findByEmail(localUser.email).subscribe(function (response) {
                _this.colaborador = response;
                localUser.perfis = _this.colaborador.perfis;
                localUser.nome = _this.colaborador.nome;
                _this.storage.setLocalUser(localUser);
            }, function (error) {
                console.log("error");
                console.log(error);
            });
        }
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Dashboard</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n          <ion-card class="card-azul">\n\n\n\n            <ion-card-header>\n\n              <ion-card-title>INSUMOS</ion-card-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <h1>{{totalinsumos}} Insumos Cadastrados</h1>\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n\n\n          <ion-card class="card-amarelo">\n\n\n\n            <ion-card-header>\n\n              <ion-card-title>INSUMOS</ion-card-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <h1>0 Perto do Vencimento</h1>\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n          <ion-card class="card-amarelo">\n\n\n\n            <ion-card-header >\n\n              <ion-card-title>INSUMOS</ion-card-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <h1>0 Insumos com quantidade mínima ultrapassada</h1>\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n          <ion-card class="card-vermelho">\n\n\n\n            <ion-card-header>\n\n              <ion-card-title>INSUMOS</ion-card-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <h1>0 Insumos Vencidos</h1>\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_colaborador_service__["a" /* ColaboradorService */],
            __WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=30.js.map