webpackJsonp([18],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceberNoControlePageModule", function() { return ReceberNoControlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receber_no_controle__ = __webpack_require__(935);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReceberNoControlePageModule = /** @class */ (function () {
    function ReceberNoControlePageModule() {
    }
    ReceberNoControlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__receber_no_controle__["a" /* ReceberNoControlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__receber_no_controle__["a" /* ReceberNoControlePage */]),
            ],
        })
    ], ReceberNoControlePageModule);
    return ReceberNoControlePageModule;
}());

//# sourceMappingURL=receber-no-controle.module.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceberNoControlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_colaborador_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_datenow__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(47);
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
 * Generated class for the ReceberNoControlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceberNoControlePage = /** @class */ (function () {
    function ReceberNoControlePage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, dateNow, storage, colaboradorService, insumoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.dateNow = dateNow;
        this.storage = storage;
        this.colaboradorService = colaboradorService;
        this.insumoService = insumoService;
        this.localUser = this.storage.getLocalUser();
        this.il = navParams.get('item');
        this.formGroup = this.formBuilder.group({
            datarecebimento: [this.dateNow.getDateNow(), ''],
        });
    }
    ReceberNoControlePage.prototype.ionViewDidLoad = function () {
    };
    ReceberNoControlePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReceberNoControlePage.prototype.receberInsumo = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Receber Insumo',
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
                        _this.insumoService.updateRecebimento(_this.il.id, _this.storage.getLocalUser().nome).subscribe(function (resp) {
                            _this.showRecebidoOk();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ReceberNoControlePage.prototype.showRecebidoOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Insumo recebido com sucesso!',
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
    ReceberNoControlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-receber-no-controle',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\receber-no-controle\receber-no-controle.html"*/'<!--\n\n  Generated template for the ReceberNoControlePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title> Receber insumo para controle </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel </span>\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="receberInsumo()">\n\n    <ion-list>\n\n      <ion-row >\n\n        <ion-col >\n\n          <ion-label>Data/Hora</ion-label>\n\n        </ion-col>\n\n        <ion-col  >\n\n          <ion-input type="datetime-local" readonly formControlName="datarecebimento"></ion-input>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col >\n\n          <ion-label>Insumo</ion-label>\n\n        </ion-col>\n\n        <ion-col  >\n\n          <ion-label>{{il.insumo.nome}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col>\n\n          <ion-label>Quantidade</ion-label>\n\n        </ion-col>\n\n        <ion-col  >\n\n          <ion-label>{{il.quantidade}} {{il.unidadeEntrada.nome}} (s)</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col >\n\n          <ion-label>Lote LEI</ion-label>\n\n        </ion-col>\n\n        <ion-col  >\n\n          <ion-label>{{il.loteLEI}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col >\n\n          <ion-label>Usuário</ion-label>\n\n        </ion-col>\n\n        <ion-col  >\n\n          <ion-label>{{localUser.nome}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col >\n\n          <ion-label>{{il.usuariorecebidonocontrole == null?\'\':\'Usuário que recebeu\'}} </ion-label>\n\n        </ion-col>\n\n        <ion-col  >\n\n          <ion-label>{{il.usuariorecebidonocontrole == null?\'\':il.usuariorecebidonocontrole}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col >\n\n          <ion-label>{{il.datarecebidonocontrole == null?\'\':\'Data do recebimento\'}} </ion-label>\n\n        </ion-col>\n\n        <ion-col >\n\n          <ion-label>{{il.datarecebidonocontrole == null?\'\':il.datarecebidonocontrole | date:\'dd/MM/yyyy HH:mm\'}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col width-50 style="text-align: center;">\n\n          <button ion-button  type="submit" [disabled]="il.recebidonocontrole">Receber</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\receber-no-controle\receber-no-controle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__utils_datenow__["a" /* DateNow */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_colaborador_service__["a" /* ColaboradorService */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__["a" /* InsumoService */]])
    ], ReceberNoControlePage);
    return ReceberNoControlePage;
}());

//# sourceMappingURL=receber-no-controle.js.map

/***/ })

});
//# sourceMappingURL=18.js.map