webpackJsonp([10],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(903);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_colaborador_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, alertCtrl, colaboradorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.colaboradorService = colaboradorService;
        this.formGroup = this.formBuilder.group({
            nome: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            cpf: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            senha: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            confirmarsenha: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]]
        }, { validator: this.MatchPassword });
    }
    SignupPage.prototype.MatchPassword = function (AC) {
        var newPassword = AC.get('senha').value; // to get value in input tag
        var confirmPassword = AC.get('confirmarsenha').value; // to get value in input tag
        if (newPassword != confirmPassword) {
            AC.get('confirmarsenha').setErrors({ MatchPassword: true });
        }
        else {
            AC.get('confirmarsenha').setErrors(null);
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        this.colaboradorService.insert(this.formGroup.value).subscribe(function (response) {
            _this.showInserOk();
        }, function (error) { });
    };
    SignupPage.prototype.showInserOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Cadastro efetuado com sucesso!',
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
    SignupPage.prototype.focused = function () {
        console.log("focussed");
    };
    SignupPage.prototype.passwordAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro 401: Falha de autenticação',
            message: 'Email ou senha incorretos',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\signup\signup.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="signupUser()">\n\n    <ion-item>\n\n      <ion-label stacked>Nome*</ion-label>\n\n      <ion-input formControlName="nome" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.nome.dirty && formGroup.controls.nome.errors" margin-left >Valor inválido</p>\n\n    <ion-item>\n\n      <ion-label stacked>CPF*</ion-label>\n\n      <ion-input formControlName="cpf" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.cpf.dirty && formGroup.controls.cpf.errors" margin-left >Valor inválido</p>\n\n    <ion-item>\n\n      <ion-label stacked>Email*</ion-label>\n\n      <ion-input formControlName="email"  type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.email.dirty && formGroup.controls.email.errors" margin-left >Valor inválido</p>\n\n    <ion-item>\n\n      <ion-label stacked>Senha*</ion-label>\n\n      <ion-input formControlName="senha"  type="password"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.senha.dirty && formGroup.controls.senha.errors" margin-left >Valor inválido</p>\n\n    <ion-item>\n\n      <ion-label stacked>Confirmar Senha*</ion-label>\n\n      <ion-input formControlName="confirmarsenha" id="confirmarsenha" type="password"></ion-input>\n\n    </ion-item> \n\n      <ion-label *ngIf="formGroup.controls[\'confirmarsenha\'].errors?.MatchPassword" class="danger">\n\n        Senhas não conferem!\n\n  </ion-label>\n\n    \n\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Registrar</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_colaborador_service__["a" /* ColaboradorService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=10.js.map