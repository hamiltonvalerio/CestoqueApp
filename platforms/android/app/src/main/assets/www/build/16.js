webpackJsonp([16],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimentacaoPageModule", function() { return MovimentacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movimentacao__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovimentacaoPageModule = /** @class */ (function () {
    function MovimentacaoPageModule() {
    }
    MovimentacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movimentacao__["a" /* MovimentacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movimentacao__["a" /* MovimentacaoPage */]),
            ],
        })
    ], MovimentacaoPageModule);
    return MovimentacaoPageModule;
}());

//# sourceMappingURL=movimentacao.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovimentacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_movimentacao_service__ = __webpack_require__(360);
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
 * Generated class for the MovimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovimentacaoPage = /** @class */ (function () {
    function MovimentacaoPage(navCtrl, navParams, movimentacaoService, insumoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movimentacaoService = movimentacaoService;
        this.insumoService = insumoService;
        this.loadingCtrl = loadingCtrl;
        this.movimentacoes = [];
        this.page = 0;
        this.showDetails = false;
    }
    MovimentacaoPage.prototype.ionViewDidLoad = function () {
        this.getItens();
    };
    MovimentacaoPage.prototype.getItens = function () {
        var _this = this;
        console.log("aqui2");
        this.movimentacaoService.findAll()
            .subscribe(function (response) {
            _this.movimentacoes = response.sort();
            console.log(_this.movimentacoes);
        }, function (error) { });
    };
    MovimentacaoPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({ content: "Aguarde..." });
        loader.present();
        return loader;
    };
    MovimentacaoPage.prototype.toggleDetails = function (show, i) {
        this.movimentacoes.map(function (_, index) {
            if (index == i) {
                _.show = !_.show;
            }
        });
    };
    MovimentacaoPage.prototype.openCadastroMovimentacao = function () {
        var _this = this;
        this.navCtrl.push('CadastroMovimentacaoPage', {}, {
            animate: true,
            direction: 'forward'
        }).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                //console.log(data);
                _this.getItens();
            });
        });
    };
    MovimentacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-movimentacao',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\movimentacao\movimentacao.html"*/'<!--\n\n  Generated template for the MovimentacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Movimentação de Insumos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openCadastroMovimentacao()">\n\n      <ion-icon name="add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let mv of movimentacoes; let i = index;">\n\n    <ion-card-header type="button" (click)="toggleDetails(mv.show,i)">\n\n      <ion-icon name="arrow-down"></ion-icon>\n\n      <ion-item>\n\n        <p>Data de Movimentação: {{mv.datamovimentacao}}</p>\n\n      </ion-item>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-item>\n\n      <ion-list *ngIf="mv.show">\n\n        <ion-label>Detalhes</ion-label>\n\n        <ion-list *ngFor="let ient of mv.itens">\n\n          <ion-row>Insumo: {{ient.insumo.nome}}</ion-row>\n\n          <ion-row>Quantidade da Origem na data de movimentação: {{ient.quantidadeOrigem}}</ion-row>\n\n          <ion-row>Quantidade Movimentada: {{ient.quantidadeMovimentada}}</ion-row>\n\n          <ion-row>Lote Fornecedor: {{ient.loteFornecedor}}</ion-row>\n\n          <ion-row>Lote CR: {{ient.loteCR}}</ion-row>\n\n          <ion-row>Data de Irradiação: {{ient.dataIrradiacao}}</ion-row>\n\n          <ion-row>Data de Validade: {{ient.dataValidade}}</ion-row>\n\n          <ion-row><br></ion-row>\n\n        </ion-list>\n\n      </ion-list>\n\n    </ion-item>\n\n    \n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\movimentacao\movimentacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_movimentacao_service__["a" /* MovimentacaoService */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */]])
    ], MovimentacaoPage);
    return MovimentacaoPage;
}());

//# sourceMappingURL=movimentacao.js.map

/***/ })

});
//# sourceMappingURL=16.js.map