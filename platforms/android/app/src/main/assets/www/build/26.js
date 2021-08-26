webpackJsonp([26],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsumoPageModule", function() { return InsumoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insumos__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InsumoPageModule = /** @class */ (function () {
    function InsumoPageModule() {
    }
    InsumoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__insumos__["a" /* InsumosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__insumos__["a" /* InsumosPage */]),
            ],
        })
    ], InsumoPageModule);
    return InsumoPageModule;
}());

//# sourceMappingURL=insumos.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsumosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the InsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InsumosPage = /** @class */ (function () {
    function InsumosPage(navCtrl, navParams, insumoService, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.insumoService = insumoService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.itensInsumos = [];
        this.page = 0;
    }
    InsumosPage.prototype.ionViewDidLoad = function () {
        this.getItens();
    };
    InsumosPage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CadastroInsumoPage', { cssClass: 'select-modal' });
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    InsumosPage.prototype.openModalAjuste = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AjusteEstoquePage', { cssClass: 'select-modal' });
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    /*getItens(){
      this.insumoService.findAll()
      .subscribe(response => {
        this.itensInsumos = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
      },
      error => {})
    }*/
    InsumosPage.prototype.searchInsumo = function (event) {
        var text = event.srcElement.value;
        if (!text) {
            this.getItens();
        }
        this.itensInsumos = this.filterPorts(this.itensInsumos, text);
        console.log("aqui: " + this.itensInsumos);
    };
    InsumosPage.prototype.filterPorts = function (ports, text) {
        return ports.filter(function (port) {
            return port.nomecodalmox.toLowerCase().indexOf(text) !== -1;
        });
    };
    InsumosPage.prototype.getItens = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.itensInsumos = [];
        this.insumoService.findTotosPaginado(this.page, 30)
            .subscribe(function (response) {
            var start = _this.itensInsumos.length;
            _this.itensInsumos = _this.itensInsumos.concat(response['content']);
            var end = _this.itensInsumos.length - 1;
            //console.log( this.itensInsumos);
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    InsumosPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({ content: "Aguarde..." });
        loader.present();
        return loader;
    };
    InsumosPage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.itensInsumos = [];
        this.getItens();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    InsumosPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.getItens();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    InsumosPage.prototype.excluirItem = function (itemId) {
        this.getItens();
    };
    InsumosPage.prototype.editarItem = function (itemId) {
        var _this = this;
        var modal = this.modalCtrl.create('CadastroInsumoPage', { itemId: itemId });
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    InsumosPage.prototype.openPdf = function () {
        this.insumoService.relatorioInsumos().subscribe(function (response) {
            var file = new Blob([response], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        });
    };
    InsumosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-insumos',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\insumo\insumos.html"*/'<!--\n\n  Generated template for the InsumoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Insumos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="openPdf()" >\n\n        <span ion-text color="primary" showWhen="ios">Pdf</span>\n\n        <ion-icon name="md-document"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModalAjuste()">\n\n        <ion-icon name="hammer"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n      <ion-icon name="add-circle" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-searchbar showcancelbutton="" (ionInput)="searchInsumo($event)"></ion-searchbar>\n\n    <ion-row *ngFor="let item of itensInsumos">\n\n      <ion-col>\n\n        <h6>Cód: {{item.codigoalmox}}</h6>\n\n        <h3>{{item.nome}}</h3>\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <ion-icon name="create" (click)="editarItem(item.id)" title="Editar Insumo" positionV="bottom"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <ion-icon name="close-circle" (click)="excluirItem(item.id)" title="Excluir Insumo" positionV="bottom"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\insumo\insumos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
    ], InsumosPage);
    return InsumosPage;
}());

//# sourceMappingURL=insumos.js.map

/***/ })

});
//# sourceMappingURL=26.js.map