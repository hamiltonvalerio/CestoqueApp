webpackJsonp([28],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarSenhaPageModule", function() { return AlterarSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alterar_senha__ = __webpack_require__(883);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlterarSenhaPageModule = /** @class */ (function () {
    function AlterarSenhaPageModule() {
    }
    AlterarSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alterar_senha__["a" /* AlterarSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alterar_senha__["a" /* AlterarSenhaPage */]),
            ],
        })
    ], AlterarSenhaPageModule);
    return AlterarSenhaPageModule;
}());

//# sourceMappingURL=alterar-senha.module.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarSenhaPage; });
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
 * Generated class for the AlterarSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlterarSenhaPage = /** @class */ (function () {
    function AlterarSenhaPage(navCtrl, navParams, formBuilder, alertCtrl, colaboradorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.colaboradorService = colaboradorService;
        this.colab = navParams.get('item');
        this.formGroup = this.formBuilder.group({
            senha: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            confirmarsenha: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        }, { validator: this.MatchPassword });
    }
    AlterarSenhaPage.prototype.MatchPassword = function (AC) {
        var newPassword = AC.get('senha').value; // to get value in input tag
        var confirmPassword = AC.get('confirmarsenha').value; // to get value in input tag
        if (newPassword != confirmPassword) {
            AC.get('confirmarsenha').setErrors({ MatchPassword: true });
        }
        else {
            AC.get('confirmarsenha').setErrors(null);
        }
    };
    AlterarSenhaPage.prototype.showInserOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Senha alterada com sucesso!',
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
    AlterarSenhaPage.prototype.alterPassUser = function () {
        var _this = this;
        this.colabAlterSenha = this.formGroup.value;
        this.colabAlterSenha.email = this.colab.email;
        console.log(this.colab);
        console.log(this.colabAlterSenha);
        this.colaboradorService.alterarSenha(this.formGroup.value).subscribe(function (response) {
            _this.showInserOk();
        }, function (error) {
        });
    };
    AlterarSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlterarSenhaPage');
    };
    AlterarSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-alterar-senha',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\alterar-senha\alterar-senha.html"*/'<!--\n\n  Generated template for the AlterarSenhaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Alterar Senha</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="alterPassUser()">\n\n    <ion-item>\n\n      <ion-label stacked>Senha*</ion-label>\n\n      <ion-input formControlName="senha"  type="password"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.senha.dirty && formGroup.controls.senha.errors" margin-left >Valor inválido</p>\n\n    <ion-item>\n\n      <ion-label stacked>Confirmar Senha*</ion-label>\n\n      <ion-input formControlName="confirmarsenha" id="confirmarsenha" type="password"></ion-input>\n\n    </ion-item> \n\n      <ion-label *ngIf="formGroup.controls[\'confirmarsenha\'].errors?.MatchPassword" class="danger">\n\n        Senhas não conferem!\n\n     </ion-label>\n\n     <ion-row>\n\n      <ion-col width-50 style="text-align: center;">\n\n        <button ion-button  type="submit" [disabled]="formGroup.invalid">Alterar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n     \n\n    \n\n    \n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\alterar-senha\alterar-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_colaborador_service__["a" /* ColaboradorService */]])
    ], AlterarSenhaPage);
    return AlterarSenhaPage;
}());

//# sourceMappingURL=alterar-senha.js.map

/***/ })

});
//# sourceMappingURL=28.js.map