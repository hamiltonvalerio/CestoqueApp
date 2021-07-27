webpackJsonp([32],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroOrgaoPageModule", function() { return CadastroOrgaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_orgao__ = __webpack_require__(901);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroOrgaoPageModule = /** @class */ (function () {
    function CadastroOrgaoPageModule() {
    }
    CadastroOrgaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_orgao__["a" /* CadastroOrgaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_orgao__["a" /* CadastroOrgaoPage */]),
            ],
        })
    ], CadastroOrgaoPageModule);
    return CadastroOrgaoPageModule;
}());

//# sourceMappingURL=cadastro-orgao.module.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroOrgaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(24);
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
 * Generated class for the CadastroOrgaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroOrgaoPage = /** @class */ (function () {
    function CadastroOrgaoPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({
            nome: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required]],
            ativo: [false,],
        }, {});
    }
    CadastroOrgaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroOrgaoPage');
    };
    CadastroOrgaoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CadastroOrgaoPage.prototype.showInserOk = function () {
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
    CadastroOrgaoPage.prototype.cadastrarOrgao = function () {
        /*this.categoriaService.insert(this.formGroup.value).subscribe(response => {
          this.showInserOk();
        },
        error => {});*/
    };
    CadastroOrgaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-cadastro-orgao',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-orgao\cadastro-orgao.html"*/'<!--\n  Generated template for the CadastroOrgaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Cadastro de Órgão\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()" >\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="cadastrarOrgao()">\n    <ion-item>\n      <ion-label stacked>Nome*</ion-label>\n      <ion-input formControlName="nome" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Ativo?</ion-label>\n      <ion-toggle formControlName="ativo" ></ion-toggle>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.nome.dirty && formGroup.controls.nome.errors" margin-left >Valor inválido</p>\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Registrar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-orgao\cadastro-orgao.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], CadastroOrgaoPage);
    return CadastroOrgaoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cadastro-orgao.js.map

/***/ })

});
//# sourceMappingURL=32.js.map