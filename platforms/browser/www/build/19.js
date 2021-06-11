webpackJsonp([19],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(893);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(155);
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu, auth) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.auth = auth;
        this.creds = {
            email: "",
            senha: ""
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.setDisableScroll(true);
    };
    HomePage.prototype.setDisableScroll = function (disable) {
        var scroll = this.content.getScrollElement();
        scroll.style.overflowY = disable ? 'hidden' : 'scroll';
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.menu.swipeEnable(true);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.refreshToken().subscribe(function (response) {
            _this.auth.successfullLogin(response.headers.get('Authorization'));
            _this.navCtrl.setRoot('DashboardPage');
        }, function (error) { });
    };
    HomePage.prototype.login = function () {
        var _this = this;
        this.auth.authenticate(this.creds).subscribe(function (response) {
            _this.auth.successfullLogin(response.headers.get('Authorization'));
            _this.navCtrl.setRoot('DashboardPage');
        }, function (error) { });
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    HomePage.prototype.recuperarSenha = function () {
        this.navCtrl.push('RecuperaSenhaPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\home\home.html"*/'<ion-content>\n\n  <form class="container2">\n\n    <div>\n\n        <h3>Sistema de Controle de Estoque</h3>\n\n        <img src="assets/imgs/cuidados-de-saude-e-medicos 128px.png" alt="logo"/>\n\n\n\n\n\n      <ion-item >\n\n        <ion-label stacked>Email</ion-label>\n\n        <ion-input [(ngModel)]="creds.email" name="email" type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item >\n\n        <ion-label stacked>Senha</ion-label>\n\n        <ion-input [(ngModel)]="creds.senha" name="senha" type="password"></ion-input>\n\n      </ion-item>\n\n      <button ion-button block (click)="login()">Entrar</button>\n\n      <button ion-button block outline (click)="signup()">Registrar</button>\n\n      <button ion-button block outline (click)="recuperarSenha()">Esqueci a senha</button>\n\n    </div>\n\n  </form>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=19.js.map