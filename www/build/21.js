webpackJsonp([21],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradaPageModule", function() { return EntradaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrada__ = __webpack_require__(893);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntradaPageModule = /** @class */ (function () {
    function EntradaPageModule() {
    }
    EntradaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entrada__["a" /* EntradaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrada__["a" /* EntradaPage */]),
            ],
        })
    ], EntradaPageModule);
    return EntradaPageModule;
}());

//# sourceMappingURL=entrada.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntradaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_entrada_service__ = __webpack_require__(358);
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
 * Generated class for the EntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntradaPage = /** @class */ (function () {
    function EntradaPage(navCtrl, navParams, entradaService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entradaService = entradaService;
        this.modalCtrl = modalCtrl;
        this.page = 0;
        this.showDetails = false;
    }
    EntradaPage.prototype.ionViewDidLoad = function () {
        this.getItens();
        /*this.printer.pick().then(result => {
          console.log(result);
        });*/
    };
    EntradaPage.prototype.getItens = function () {
        var _this = this;
        this.entradaService.findAll()
            .subscribe(function (response) {
            //this.itensEntradas = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
            _this.itensEntradas = response.sort();
            console.log(_this.itensEntradas);
        }, function (error) { });
    };
    EntradaPage.prototype.openModal = function () {
        var _this = this;
        console.log("aqui");
        var modal = this.modalCtrl.create('CadastroEntradaPage');
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    EntradaPage.prototype.openCadastroEntrada = function () {
        var _this = this;
        this.navCtrl.push('CadastroEntradaPage', {}, {
            animate: true,
            direction: 'forward'
        }).then(function () {
            _this.navCtrl.getActive().onDidDismiss(function (data) {
                //console.log(data);
                _this.getItens();
            });
        });
    };
    EntradaPage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.getItens();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    EntradaPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.getItens();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    EntradaPage.prototype.toggleDetails = function (show, i) {
        this.itensEntradas.map(function (_, index) {
            if (index == i) {
                _.show = !_.show;
            }
        });
    };
    EntradaPage.prototype.imprimirEtiquetas = function (ent) {
        this.entradaService.gerarEtiquetas(ent).subscribe(function (response) {
        }, function (error) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myNav'),
        __metadata("design:type", Object)
    ], EntradaPage.prototype, "nav", void 0);
    EntradaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-entrada',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\entrada\entrada.html"*/'<!--\n\n  Generated template for the EntradaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Entradas</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openCadastroEntrada()">\n\n      <ion-icon name="add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let ent of itensEntradas; let i = index;">\n\n    <ion-card-header type="button" (click)="toggleDetails(ent.show,i)">\n\n      <ion-icon name="arrow-down"></ion-icon>\n\n      <ion-item>\n\n        <p>Número da Requisição (LIA): {{ent.numLIA}}</p>\n\n        <p>Data de Entrada: {{ent.dataEntrada}}</p>\n\n        <p>Lote de Recebimento: {{ent.loteRecebimento}}</p>\n\n      </ion-item>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-item>\n\n      <ion-list *ngIf="ent.show">\n\n        <ion-label>Detalhes</ion-label>\n\n        <ion-grid *ngFor="let ient of ent.itens" class="tamanho-da-font">\n\n          <ion-row><ion-col>Produto: {{ient.insumo.nome}} </ion-col></ion-row>\n\n          <ion-row><ion-col>Lote Fornecedor: {{ient.loteFornecedor}}</ion-col></ion-row>\n\n          <ion-row><ion-col>Lote CR: {{ient.loteCR}}</ion-col></ion-row>\n\n          <ion-row><ion-col>Data de Validade: {{ient.dataValidade | date: \'dd/MM/yyyy\'}}</ion-col><ion-col>Data de Irradiação: {{ient.dataIrradiacao | date: \'dd/MM/yyyy H:mm\'}}</ion-col></ion-row>\n\n          <ion-row><ion-col>Quantidade Entrada: {{ient.quantidade}}</ion-col><ion-col>Quantidade Atual: {{ient.insumo.quantidade}}</ion-col></ion-row>\n\n          <ion-row><ion-col>Quantidade de etiquetas: <input type="number" [(ngModel)]="ient.quantidadeetiquetas"> </ion-col></ion-row>\n\n        </ion-grid>\n\n        <button ion-button (click)="imprimirEtiquetas(ent)">Imprimir etiquetas</button>\n\n      </ion-list>\n\n    </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\entrada\entrada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_entrada_service__["a" /* EntradaService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]])
    ], EntradaPage);
    return EntradaPage;
}());

//# sourceMappingURL=entrada.js.map

/***/ })

});
//# sourceMappingURL=21.js.map