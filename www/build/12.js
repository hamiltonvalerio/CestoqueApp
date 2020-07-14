webpackJsonp([12],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroFornecedorPageModule", function() { return CadastroFornecedorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_fornecedor__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroFornecedorPageModule = /** @class */ (function () {
    function CadastroFornecedorPageModule() {
    }
    CadastroFornecedorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_fornecedor__["a" /* CadastroFornecedorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_fornecedor__["a" /* CadastroFornecedorPage */]),
            ],
        })
    ], CadastroFornecedorPageModule);
    return CadastroFornecedorPageModule;
}());

//# sourceMappingURL=cadastro-fornecedor.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroFornecedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_fornecedor_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the CadastroFornecedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroFornecedorPage = /** @class */ (function () {
    function CadastroFornecedorPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, fornecedorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.fornecedorService = fornecedorService;
        this.formGroup = this.formBuilder.group({
            nome: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            cnpj: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        }, {});
    }
    CadastroFornecedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroFornecedorPage');
    };
    CadastroFornecedorPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CadastroFornecedorPage.prototype.cadastrarFornecedor = function () {
        var _this = this;
        this.fornecedorService.insert(this.formGroup.value).subscribe(function (response) {
            _this.showInserOk();
        }, function (error) { });
    };
    CadastroFornecedorPage.prototype.showInserOk = function () {
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
    CadastroFornecedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-cadastro-fornecedor',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-fornecedor\cadastro-fornecedor.html"*/'<!--\n\n  Generated template for the CadastroFornecedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Cadastro de Fornecedor\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()" >\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="cadastrarFornecedor()">\n\n    <ion-item>\n\n      <ion-label stacked>Nome*</ion-label>\n\n      <ion-input formControlName="nome" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.nome.dirty && formGroup.controls.nome.errors" margin-left >Valor inválido</p>\n\n    <ion-item>\n\n      <ion-label stacked>CNPJ*</ion-label>\n\n      <ion-input formControlName="cnpj" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.cnpj.dirty && formGroup.controls.cnpj.errors" margin-left >Valor inválido</p>\n\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Registrar</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\cadastro-fornecedor\cadastro-fornecedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_fornecedor_service__["a" /* FornecedorService */]])
    ], CadastroFornecedorPage);
    return CadastroFornecedorPage;
}());

//# sourceMappingURL=cadastro-fornecedor.js.map

/***/ })

});
//# sourceMappingURL=12.js.map