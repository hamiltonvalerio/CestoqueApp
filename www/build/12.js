webpackJsonp([12],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculaPaginaPerfilPageModule", function() { return VinculaPaginaPerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vincula_pagina_perfil__ = __webpack_require__(925);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VinculaPaginaPerfilPageModule = /** @class */ (function () {
    function VinculaPaginaPerfilPageModule() {
    }
    VinculaPaginaPerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__vincula_pagina_perfil__["a" /* VinculaPaginaPerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__vincula_pagina_perfil__["a" /* VinculaPaginaPerfilPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */],
            ],
        })
    ], VinculaPaginaPerfilPageModule);
    return VinculaPaginaPerfilPageModule;
}());

//# sourceMappingURL=vincula-pagina-perfil.module.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginasEnum; });
var PaginasEnum;
(function (PaginasEnum) {
    PaginasEnum["administracao"] = "AdministracaoPage";
    PaginasEnum["ajusteestoque"] = "AjusteEstoquePage";
    PaginasEnum["alterarsenha"] = "AlterarSenhaPage";
    PaginasEnum["cadastrocategoria"] = "CadastroCategoriaPage";
    PaginasEnum["cadastroentrada"] = "CadastroEntradaPage";
})(PaginasEnum || (PaginasEnum = {}));
//# sourceMappingURL=paginas.enum.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VinculaPaginaPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_paginas_enum__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_perfil_service__ = __webpack_require__(360);
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
 * Generated class for the VinculaPaginaPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VinculaPaginaPerfilPage = /** @class */ (function () {
    function VinculaPaginaPerfilPage(navCtrl, navParams, viewCtrl, perfilService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.perfilService = perfilService;
        this.alertCtrl = alertCtrl;
        this.paginas = [];
        this.pagina = {};
    }
    VinculaPaginaPerfilPage.prototype.registrar = function () {
        var result = false;
        if (Object.keys(this.pagina).length == 0) {
            this.showSelecionaPagina();
        }
        else {
            this.perfis.forEach(function (r) {
                if (r.selecionado == true) {
                    result = true;
                    perfisNovos.push(r);
                }
            });
            if (!result) {
                this.showSelecionaPerfil();
            }
            else {
                //inserir a pagina
            }
        }
        var perfisNovos = [];
        var paginaNova = {
            id: null,
            nome: this.pagina.pagina,
            perfis: [],
        };
        this.perfis.forEach(function (r) {
            if (r.selecionado == true) {
                perfisNovos.push(r);
                paginaNova.perfis.push(r);
            }
        });
        /* var result = false;
        var perfisNovos : PerfilDTO[] = [];
        if(this.colaborador == undefined){
          this.showSelecionaColaboirador()
        }else{
          this.perfis.forEach(r=>{
            if(r.selecionado == true){
              result = true;
              perfisNovos.push(r);
            }
          });
          if(!result){
            this.showSelecionaPerfil();
          }else{
            this.colaborador.perfis = perfisNovos;
            this.colaboradorService.updateComPerfil(this.colaborador).subscribe(response => {
              this.showUpdateOk();
            },
            error => {});
          }
        }*/
    };
    VinculaPaginaPerfilPage.prototype.ionViewDidLoad = function () {
        this.loadPerfis();
        this.loadEnumPaginas();
    };
    VinculaPaginaPerfilPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VinculaPaginaPerfilPage.prototype.loadEnumPaginas = function () {
        this.paginas = [];
        var cont = 0;
        for (var _i = 0, _a = Object.entries(__WEBPACK_IMPORTED_MODULE_0__enums_paginas_enum__["a" /* PaginasEnum */]); _i < _a.length; _i++) {
            var _b = _a[_i], propertyKey = _b[0], propertyValue = _b[1];
            cont++;
            if (!Number.isNaN(Number(propertyKey))) {
                continue;
            }
            this.paginas.push({ pagina: propertyValue, nome: propertyKey, id: cont });
        }
    };
    VinculaPaginaPerfilPage.prototype.loadPerfis = function () {
        var _this = this;
        this.perfilService.findAll()
            .subscribe(function (response) {
            _this.perfis = response.sort();
        }, function (error) { });
    };
    VinculaPaginaPerfilPage.prototype.changeToggle = function (ev, checked) {
        console.log(checked);
        //console.log(this.perfis);
    };
    VinculaPaginaPerfilPage.prototype.paginaChange = function (ev) {
    };
    VinculaPaginaPerfilPage.prototype.showSelecionaPagina = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: 'Selecione uma página!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    VinculaPaginaPerfilPage.prototype.showSelecionaPerfil = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: 'Selecione pelo menos um perfil!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    VinculaPaginaPerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-vincula-pagina-perfil',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\vincula-pagina-perfil\vincula-pagina-perfil.html"*/'<!--\n  Generated template for the VinculaPaginaPerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Vincula Página ao Perfil\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()" >\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item color="item_entrada">\n    <ion-label>Páginas</ion-label>\n    <ionic-selectable \n      item-content\n      [(ngModel)]="pagina"\n      [items]="paginas"\n      itemValueField="id"\n      itemTextField="nome"\n      [canSearch]="true"\n      [focusSearchbar]="true"\n      (onChange)="paginaChange($event)"\n      [hasVirtualScroll]="true" >\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n        <ion-item>\n          <ion-label text-wrap class="label_12_b">\n            {{item.pagina}}\n          </ion-label>\n        </ion-item>\n      </ng-template>\n    </ionic-selectable>\n  </ion-item>\n  <ion-list *ngFor="let item of perfis">\n    <ion-item>\n      <ion-label>{{ item.nome }}</ion-label>\n      <ion-toggle color="secondary" [(ngModel)]="item.selecionado" (ionChange)="changeToggle($event,item.selecionado)"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <button ion-button block type="submit" (click)="registrar()">Registrar</button>\n</ion-content>\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\vincula-pagina-perfil\vincula-pagina-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_domain_perfil_service__["a" /* PerfilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_domain_perfil_service__["a" /* PerfilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], VinculaPaginaPerfilPage);
    return VinculaPaginaPerfilPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=vincula-pagina-perfil.js.map

/***/ })

});
//# sourceMappingURL=12.js.map