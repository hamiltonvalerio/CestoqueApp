webpackJsonp([12],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracaoPageModule", function() { return AdministracaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administracao__ = __webpack_require__(898);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdministracaoPageModule = /** @class */ (function () {
    function AdministracaoPageModule() {
    }
    AdministracaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__administracao__["a" /* AdministracaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__administracao__["a" /* AdministracaoPage */]),
            ],
        })
    ], AdministracaoPageModule);
    return AdministracaoPageModule;
}());

//# sourceMappingURL=administracao.module.js.map

/***/ }),

/***/ 892:
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

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministracaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_orgao_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_paginas_enum__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_colaborador_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_perfil_service__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the AdministracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdministracaoPage = /** @class */ (function () {
    function AdministracaoPage(navCtrl, navParams, perfilService, modalCtrl, viewCtrl, colaboradorService, orgaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.perfilService = perfilService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.colaboradorService = colaboradorService;
        this.orgaoService = orgaoService;
        this.colaboradores = [];
        this.show = false;
        this.paginas = [];
    }
    AdministracaoPage.prototype.ionViewDidLoad = function () {
        this.type = 'perfis';
        this.loadPerfis();
        this.loadColaboradores();
        this.loadEnumPaginas();
        this.loadOrgaos();
    };
    AdministracaoPage.prototype.loadEnumPaginas = function () {
        this.paginas = [];
        for (var _i = 0, _a = Object.entries(__WEBPACK_IMPORTED_MODULE_1__enums_paginas_enum__["a" /* PaginasEnum */]); _i < _a.length; _i++) {
            var _b = _a[_i], propertyKey = _b[0], propertyValue = _b[1];
            if (!Number.isNaN(Number(propertyKey))) {
                continue;
            }
            this.paginas.push({ pagina: propertyValue, nome: propertyKey });
        }
    };
    AdministracaoPage.prototype.toggleDetails = function () {
        this.show = this.show ? false : true;
    };
    AdministracaoPage.prototype.loadColaboradores = function () {
        var _this = this;
        this.colaboradorService.findAll()
            .subscribe(function (response) {
            _this.colaboradores = response.sort();
        }, function (error) { });
    };
    AdministracaoPage.prototype.loadOrgaos = function () {
        var _this = this;
        this.orgaoService.findAll()
            .subscribe(function (response) {
            _this.orgaos = response.sort();
        });
    };
    AdministracaoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AdministracaoPage.prototype.loadPerfis = function () {
        var _this = this;
        this.perfilService.findAll()
            .subscribe(function (response) {
            _this.perfis = response.sort();
        }, function (error) { });
    };
    AdministracaoPage.prototype.segmentChanged = function (ev) {
        //console.log('Segment changed', ev.value);
        switch (ev.value) {
            case 'paginas':
                this.type = 'paginas';
                break;
            case 'perfis':
                this.type = 'perfis';
                break;
            default:
                this.type = 'paginas';
                break;
        }
    };
    AdministracaoPage.prototype.openModalNovoPerfil = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CadastroPerfilPage');
        modal.onDidDismiss(function () {
            _this.loadPerfis();
        });
        modal.present();
    };
    AdministracaoPage.prototype.openModalVincularPerfil = function () {
        var _this = this;
        var modal = this.modalCtrl.create('VinculaPerfilUsuarioPage');
        modal.onDidDismiss(function () {
            _this.loadPerfis();
            _this.loadColaboradores();
        });
        modal.present();
    };
    AdministracaoPage.prototype.openModalNovaPagina = function () {
        var modal = this.modalCtrl.create('CadastroPaginaPage');
        modal.onDidDismiss(function () {
            //this.loadPerfis();
        });
        modal.present();
    };
    AdministracaoPage.prototype.openModalVincularPagina = function () {
        var _this = this;
        var modal = this.modalCtrl.create('VinculaPaginaPerfilPage');
        modal.onDidDismiss(function () {
            _this.loadPerfis();
            _this.loadColaboradores();
            _this.loadEnumPaginas();
        });
        modal.present();
    };
    AdministracaoPage.prototype.openModalCadastrarOrgao = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CadastroOrgaoPage');
        modal.onDidDismiss(function () {
            _this.loadOrgaos();
        });
        modal.present();
    };
    AdministracaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-administracao',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\administracao\administracao.html"*/'<!--\n\n  Generated template for the AdministracaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Administração</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-segment\n\n    color="primary"\n\n    (ionChange)="segmentChanged($event)"\n\n  >\n\n  <ion-segment-button value="perfis"> Perfis </ion-segment-button>\n\n  <ion-segment-button value="paginas"> Páginas </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="type">\n\n    <ion-list *ngSwitchCase="\'perfis\'">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item style="text-align: center">\n\n            <ion-label > <b>PERFIS CADASTRADOS</b> </ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col style="text-align: center">\n\n          <button ion-button expand="full" (click)="openModalNovoPerfil()">\n\n            Cadastrar Novo Perfil\n\n          </button>\n\n          <button\n\n            ion-button\n\n            expand="full"\n\n            color="secondary"\n\n            (click)="openModalVincularPerfil()">\n\n            Vincular Perfil ao Usuário\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-row >\n\n            <ion-col><ion-item style="text-align: center"><b>NOME</b></ion-item></ion-col>\n\n            <ion-col><ion-item style="text-align: center"><b>DESCRIÇÃO</b></ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let p of perfis">\n\n        <ion-col>\n\n          <ion-row>\n\n            <ion-col><ion-item style="text-align: center">{{p.nome}}</ion-item></ion-col>\n\n            <ion-col><ion-item style="text-align: center">{{p.descricao}}</ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'paginas\'">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item style="text-align: center">\n\n            <ion-label > <b>PÁGINAS CADASTRADAS</b> </ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col style="text-align: center">\n\n          <button\n\n            ion-button\n\n            expand="full"\n\n            color="secondary"\n\n            (click)="openModalVincularPagina()">\n\n            Vincular Página ao Perfil\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-row >\n\n            <ion-col><ion-item style="text-align: center"><b>NOME</b></ion-item></ion-col>\n\n            <ion-col><ion-item style="text-align: center"><b>DESCRIÇÃO</b></ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let pa of paginas">\n\n        <ion-col>\n\n          <ion-row>\n\n            <ion-col><ion-item style="text-align: center">{{pa.pagina}}</ion-item></ion-col>\n\n            <ion-col><ion-item style="text-align: center">{{pa.nome}}</ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n    \n\n    </ion-list>\n\n  </div>\n\n\n\n  <ion-card>\n\n    <ion-card-header type="button" (click)="toggleDetails()">\n\n      \n\n      <ion-grid>\n\n        <ion-row>\n\n          \n\n          <ion-label><ion-icon name="arrow-down"></ion-icon> <b>USUÁRIOS</b></ion-label>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-item>\n\n        <ion-grid *ngIf="show">\n\n          <ion-row class="alinha_itens_center">\n\n            <ion-col class="cell-class"><ion-label><b>Nome</b></ion-label></ion-col>\n\n            <ion-col class="cell-class"><ion-label><b>Email de Login</b></ion-label></ion-col>\n\n            <ion-col class="cell-class"><ion-label><b>Perfis</b></ion-label></ion-col>\n\n          </ion-row>\n\n          <ion-row *ngFor="let c of colaboradores">\n\n            <ion-col class="cell-class">{{c.nome}}</ion-col>\n\n            <ion-col class="cell-class">{{c.email}}</ion-col>\n\n            <ion-col class="cell-class">\n\n             \n\n                <ion-label *ngFor="let cp of c.perfis">\n\n                  {{cp.nome}}\n\n                </ion-label>\n\n              \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n    </ion-item>\n\n    \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-item style="text-align: center">\n\n          <ion-label> <b> ÓRGÃOS/ENTIDADES PARA CONTROLE </b> </ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col style="text-align: center">\n\n        <button\n\n            ion-button\n\n            expand="full"\n\n            color="secondary"\n\n            (click)="openModalCadastrarOrgao()">\n\n            CADASTRAR NOVO ÓRGÃO/ENTIDADE\n\n          </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let o of orgaos">\n\n      <ion-col><ion-item style="text-align: center">{{o.nome}}</ion-item></ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\administracao\administracao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_colaborador_service__["a" /* ColaboradorService */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_orgao_service__["a" /* OrgaoService */]])
    ], AdministracaoPage);
    return AdministracaoPage;
}());

//# sourceMappingURL=administracao.js.map

/***/ })

});
//# sourceMappingURL=12.js.map