webpackJsonp([11],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroInsumoPageModule", function() { return CadastroInsumoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_insumo__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroInsumoPageModule = /** @class */ (function () {
    function CadastroInsumoPageModule() {
    }
    CadastroInsumoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_insumo__["a" /* CadastroInsumoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_insumo__["a" /* CadastroInsumoPage */]),
            ],
        })
    ], CadastroInsumoPageModule);
    return CadastroInsumoPageModule;
}());

//# sourceMappingURL=cadastro-insumo.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroInsumoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_insumo_service__ = __webpack_require__(349);
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
 * Generated class for the CadastroInsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroInsumoPage = /** @class */ (function () {
    function CadastroInsumoPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, insumoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.insumoService = insumoService;
        this.formGroup = this.formBuilder.group({
            nome: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]],
            nomenclatura: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]],
            valor: ['', []]
        }, {});
    }
    CadastroInsumoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroInsumoPage');
    };
    CadastroInsumoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CadastroInsumoPage.prototype.cadastrarInsumo = function () {
        var _this = this;
        this.insumoService.insert(this.formGroup.value).subscribe(function (response) {
            _this.showInserOk();
        }, function (error) { });
    };
    CadastroInsumoPage.prototype.showInserOk = function () {
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
    CadastroInsumoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-cadastro-insumo',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-insumo\cadastro-insumo.html"*/'<!--\n  Generated template for the CadastroInsumoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Cadastro de Insumo\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()" >\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="cadastrarInsumo()">\n    <ion-item>\n      <ion-label stacked>Nome*</ion-label>\n      <ion-input formControlName="nome" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.nome.dirty && formGroup.controls.nome.errors" margin-left >Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Nomenclatura*</ion-label>\n      <ion-input formControlName="nomenclatura" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.nomenclatura.dirty && formGroup.controls.nomenclatura.errors" margin-left >Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Valor</ion-label>\n      <ion-currency-mask  placeholder="Insira o valor aqui" formControlName="valor" label="Valor R$"></ion-currency-mask>\n    </ion-item>\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Registrar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-insumo\cadastro-insumo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_insumo_service__["a" /* InsumoService */]])
    ], CadastroInsumoPage);
    return CadastroInsumoPage;
}());

//# sourceMappingURL=cadastro-insumo.js.map

/***/ })

});
//# sourceMappingURL=11.js.map