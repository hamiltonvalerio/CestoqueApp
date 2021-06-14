webpackJsonp([44],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperaSenhaPageModule", function() { return RecuperaSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recupera_senha__ = __webpack_require__(908);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecuperaSenhaPageModule = /** @class */ (function () {
    function RecuperaSenhaPageModule() {
    }
    RecuperaSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recupera_senha__["a" /* RecuperaSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recupera_senha__["a" /* RecuperaSenhaPage */]),
            ],
        })
    ], RecuperaSenhaPageModule);
    return RecuperaSenhaPageModule;
}());

//# sourceMappingURL=recupera-senha.module.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperaSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_colaborador_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
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
 * Generated class for the RecuperaSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecuperaSenhaPage = /** @class */ (function () {
    function RecuperaSenhaPage(navCtrl, navParams, formBuilder, alertCtrl, colaboradorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.colaboradorService = colaboradorService;
        this.botao = true;
        this.formGroup = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]]
        }, {});
    }
    RecuperaSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperaSenhaPage');
    };
    RecuperaSenhaPage.prototype.recuperaSenhaUser = function () {
        var _this = this;
        this.botao = false;
        this.validFormAndPreventMultipleClicks();
        this.colaboradorService.recuperarSenha(this.formGroup.value).subscribe(function (response) {
            _this.showInserOk();
        }, function (error) {
            _this.showErro();
        });
    };
    RecuperaSenhaPage.prototype.validFormAndPreventMultipleClicks = function () {
        if (this.formGroup.invalid == true && this.botao == true) {
            return true;
        }
        else if (this.formGroup.invalid == false && this.botao == false) {
            return true;
        }
        else {
            return false;
        }
    };
    RecuperaSenhaPage.prototype.showInserOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Recuperação efetuada com sucesso! Verifique seu email.',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    RecuperaSenhaPage.prototype.showErro = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: 'Email não cadastrado.',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    RecuperaSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-recupera-senha',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\recupera-senha\recupera-senha.html"*/'<!--\n\n  Generated template for the RecuperaSenhaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Recupera Senha</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="recuperaSenhaUser()">\n\n    <ion-item>\n\n      <ion-label stacked>Email*</ion-label>\n\n      <ion-input formControlName="email"  type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.email.dirty && formGroup.controls.email.errors" margin-left >Valor inválido</p>\n\n    <button ion-button block type="submit" [disabled]="validFormAndPreventMultipleClicks()">Recuperar</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\recupera-senha\recupera-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_colaborador_service__["a" /* ColaboradorService */]])
    ], RecuperaSenhaPage);
    return RecuperaSenhaPage;
}());

//# sourceMappingURL=recupera-senha.js.map

/***/ })

});
//# sourceMappingURL=44.js.map