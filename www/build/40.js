webpackJsonp([40],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarPrevisaoControlePageModule", function() { return AlterarPrevisaoControlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alterar_previsao_controle__ = __webpack_require__(897);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlterarPrevisaoControlePageModule = /** @class */ (function () {
    function AlterarPrevisaoControlePageModule() {
    }
    AlterarPrevisaoControlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alterar_previsao_controle__["a" /* AlterarPrevisaoControlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alterar_previsao_controle__["a" /* AlterarPrevisaoControlePage */]),
            ],
        })
    ], AlterarPrevisaoControlePageModule);
    return AlterarPrevisaoControlePageModule;
}());

//# sourceMappingURL=alterar-previsao-controle.module.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarPrevisaoControlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date_time_format__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_insumo_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_colaborador_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_datenow__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the AlterarPrevisaoControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlterarPrevisaoControlePage = /** @class */ (function () {
    function AlterarPrevisaoControlePage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, dateNow, dateTimeFormatPipe, storage, colaboradorService, insumoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.dateNow = dateNow;
        this.dateTimeFormatPipe = dateTimeFormatPipe;
        this.storage = storage;
        this.colaboradorService = colaboradorService;
        this.insumoService = insumoService;
        this.localUser = this.storage.getLocalUser();
        this.il = navParams.get('item');
    }
    AlterarPrevisaoControlePage.prototype.ionViewDidLoad = function () {
    };
    AlterarPrevisaoControlePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AlterarPrevisaoControlePage.prototype.showInserOk = function () {
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
    AlterarPrevisaoControlePage.prototype.alterarPrevisao = function () {
        var _this = this;
        var data = this.dateTimeFormatPipe.transform(this.dataprevisao);
        var confirm = this.alertCtrl.create({
            title: 'Deseja alterar previsão?',
            message: '',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.insumoService.updatePrevisaoControle(_this.il.id, _this.storage.getLocalUser().nome, data).subscribe(function (resp) {
                            _this.showAlteradoOk();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AlterarPrevisaoControlePage.prototype.showAlteradoOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Data de previsão alterada com sucesso!',
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
    AlterarPrevisaoControlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'page-alterar-previsao-controle',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\alterar-previsao-controle\alterar-previsao-controle.html"*/'<!--\n\n  Generated template for the AlterarPrevisaoControlePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title> Alterar previsão de controle </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel </span>\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6><ion-label>Data atual de previsão de controle:</ion-label></ion-col>\n\n        <ion-col col-6><ion-label><b>{{il.dataPrevisaoControle | date:\'dd/MM/yyyy\'}}</b></ion-label></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>Nova data de previsão:</ion-col>\n\n        <ion-col col-6 style="vertical-align: middle;">\n\n          <input type="date" [(ngModel)]="dataprevisao"/>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6><ion-label>Usuário logado:</ion-label></ion-col>\n\n        <ion-col col-6><ion-label><b>{{localUser.nome}}</b></ion-label></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col width-50 style="text-align: center;">\n\n          <button ion-button  type="submit" (click)="alterarPrevisao()">Alterar</button>\n\n        </ion.col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\alterar-previsao-controle\alterar-previsao-controle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__utils_datenow__["a" /* DateNow */],
            __WEBPACK_IMPORTED_MODULE_0__utils_date_time_format__["a" /* DateTimeFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_colaborador_service__["a" /* ColaboradorService */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_insumo_service__["a" /* InsumoService */]])
    ], AlterarPrevisaoControlePage);
    return AlterarPrevisaoControlePage;
}());

//# sourceMappingURL=alterar-previsao-controle.js.map

/***/ })

});
//# sourceMappingURL=40.js.map