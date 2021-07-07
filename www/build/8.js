webpackJsonp([8],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacaoPageModule", function() { return LocalizacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizacao__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalizacaoPageModule = /** @class */ (function () {
    function LocalizacaoPageModule() {
    }
    LocalizacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__localizacao__["a" /* LocalizacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__localizacao__["a" /* LocalizacaoPage */]),
            ],
        })
    ], LocalizacaoPageModule);
    return LocalizacaoPageModule;
}());

//# sourceMappingURL=localizacao.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverteListaIonItemDivider; });
var ConverteListaIonItemDivider = /** @class */ (function () {
    function ConverteListaIonItemDivider() {
    }
    /**
     * name
     */
    ConverteListaIonItemDivider.prototype.retornaArrayGroup = function (responseSorte) {
        var itens = [];
        var itensOrdenados = [];
        var letraAtual = "";
        var itensAtuaisDeRetorno = [];
        itensOrdenados = responseSorte;
        itensOrdenados.forEach(function (value, index) {
            if (value.nome.charAt(0) != letraAtual) {
                letraAtual = value.nome.charAt(0);
                var newGroup = {
                    letra: letraAtual,
                    arrayDeItens: []
                };
                itensAtuaisDeRetorno = newGroup.arrayDeItens;
                itens.push(newGroup);
            }
            itensAtuaisDeRetorno.push(value);
        });
        console.log(itens);
        return itens;
    };
    return ConverteListaIonItemDivider;
}());

//# sourceMappingURL=converte-list-ionitemdivider.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_converte_list_ionitemdivider__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_localizacao_service__ = __webpack_require__(355);
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
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalizacaoPage = /** @class */ (function () {
    function LocalizacaoPage(navCtrl, navParams, localizacaoService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localizacaoService = localizacaoService;
        this.modalCtrl = modalCtrl;
        this.itensLocalizacoes = [];
    }
    LocalizacaoPage.prototype.ionViewDidLoad = function () {
        this.getItens();
    };
    LocalizacaoPage.prototype.getItens = function () {
        var _this = this;
        this.localizacaoService.findAll()
            .subscribe(function (response) {
            _this.itensLocalizacoes = new __WEBPACK_IMPORTED_MODULE_0__utils_converte_list_ionitemdivider__["a" /* ConverteListaIonItemDivider */]().retornaArrayGroup(response.sort());
        }, function (error) { });
    };
    LocalizacaoPage.prototype.excluirItem = function (itemId) {
        this.getItens();
    };
    LocalizacaoPage.prototype.openItem = function (itemId, itemNome, itemAtualizaqtdminima, itemControle, localizacao_filha) {
        this.navCtrl.push('LocalizacaoInsumosPage', {
            localizacao_id: itemId,
            localizacao_nome: itemNome,
            localizacao_atualizaqtdminima: itemAtualizaqtdminima,
            localizacao_controle: itemControle,
            localizacao_filha: localizacao_filha,
        });
    };
    LocalizacaoPage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CadastroLocalizacaoPage');
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    LocalizacaoPage.prototype.editarItem = function (itemId) {
        var _this = this;
        var modal = this.modalCtrl.create('CadastroLocalizacaoPage', { itemId: itemId });
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    LocalizacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-localizacao',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\localizacao\localizacao.html"*/'<!--\n\n  Generated template for the LocalizacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Localizações</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n      <ion-icon name="add-circle" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n    <ion-grid *ngFor="let item of itensLocalizacoes">\n\n      <ion-row *ngFor="let l of item.arrayDeItens">\n\n        <ion-col>\n\n          <h6>{{l.objlocalizacaofilha != null ? l.objlocalizacaofilha.nome+" => "+ l.nome : l.nome}}</h6>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <ion-icon name="search" (click)="openItem(l.id, l.nome, l.atualizaqtdminima, l.aprovacao, l.localizacao_filha)" title="Visualizar insumos da localização" positionV="bottom"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <ion-icon name="create" (click)="editarItem(l.id)" title="Editar Localização" positionV="bottom"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <ion-icon name="close-circle" (click)="excluirItem(l.id)" title="Excluir Localização" positionV="bottom"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\localizacao\localizacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]])
    ], LocalizacaoPage);
    return LocalizacaoPage;
}());

//# sourceMappingURL=localizacao.js.map

/***/ })

});
//# sourceMappingURL=8.js.map