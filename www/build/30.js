webpackJsonp([30],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracaoPageModule", function() { return AdministracaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administracao__ = __webpack_require__(883);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdministracaoPageModule = /** @class */ (function () {
    function AdministracaoPageModule() {
    }
    AdministracaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__administracao__["a" /* AdministracaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__administracao__["a" /* AdministracaoPage */]),
            ],
        })
    ], AdministracaoPageModule);
    return AdministracaoPageModule;
}());

//# sourceMappingURL=administracao.module.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministracaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_perfil_service__ = __webpack_require__(363);
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
 * Generated class for the AdministracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdministracaoPage = /** @class */ (function () {
    function AdministracaoPage(navCtrl, navParams, perfilService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.perfilService = perfilService;
    }
    AdministracaoPage.prototype.ionViewDidLoad = function () {
        this.type = 'paginas';
        this.loadPerfis();
    };
    AdministracaoPage.prototype.loadPerfis = function () {
        var _this = this;
        this.perfilService.findAll()
            .subscribe(function (response) {
            _this.perfis = response.sort();
            console.log(_this.perfis);
        }, function (error) { });
    };
    AdministracaoPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev.value);
        switch (ev.value) {
            case 'paginas':
                this.type = 'paginas';
                break;
            case 'perfis':
                this.type = 'perfis';
                break;
            default:
                this.type = 'paginas';
                break;
        }
    };
    AdministracaoPage.prototype.openModalNovoPerfil = function () {
    };
    AdministracaoPage.prototype.openModalVincularPerfil = function () {
    };
    AdministracaoPage.prototype.openModalNovaPagina = function () {
    };
    AdministracaoPage.prototype.openModalVincularPagina = function () {
    };
    AdministracaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-administracao',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\administracao\administracao.html"*/'<!--\n  Generated template for the AdministracaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Administração</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment\n    [(ngModel)]="relationship"\n    color="primary"\n    (ionChange)="segmentChanged($event)"\n  >\n    <ion-segment-button value="paginas"> Páginas </ion-segment-button>\n    <ion-segment-button value="perfis"> Perfis </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="type">\n    <ion-list *ngSwitchCase="\'paginas\'">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label> Páginas Cadastradas </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style="text-align: center">\n          <button ion-button expand="full" (click)="openModalNovaPagina()">\n            Cadastrar Nova Pagina\n          </button>\n          <button\n            ion-button\n            expand="full"\n            color="secondary"\n            (click)="openModalVincularPagina()">\n            Vincular Página ao Usuário\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col> </ion-col>\n        <ion-col> </ion-col>\n      </ion-row>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'perfis\'">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label> <b>Perfis Cadastrados</b> </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style="text-align: center">\n          <button ion-button expand="full" (click)="openModalNovoPerfil()">\n            Cadastrar Novo Perfil\n          </button>\n          <button\n            ion-button\n            expand="full"\n            color="secondary"\n            (click)="openModalVincularPerfil()">\n            Vincular Perfil ao Usuário\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let p of perfis">\n        <ion-col>\n          <ion-item>{{p.nome}}</ion-item></ion-col>\n        <ion-col> <ion-item></ion-item></ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\administracao\administracao.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_domain_perfil_service__["a" /* PerfilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_domain_perfil_service__["a" /* PerfilService */]) === "function" && _c || Object])
    ], AdministracaoPage);
    return AdministracaoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=administracao.js.map

/***/ })

});
//# sourceMappingURL=30.js.map