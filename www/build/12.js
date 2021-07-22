webpackJsonp([12],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculaPerfilUsuarioPageModule", function() { return VinculaPerfilUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vincula_perfil_usuario__ = __webpack_require__(925);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VinculaPerfilUsuarioPageModule = /** @class */ (function () {
    function VinculaPerfilUsuarioPageModule() {
    }
    VinculaPerfilUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__vincula_perfil_usuario__["a" /* VinculaPerfilUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__vincula_perfil_usuario__["a" /* VinculaPerfilUsuarioPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_selectable__["a" /* IonicSelectableModule */],
            ],
        })
    ], VinculaPerfilUsuarioPageModule);
    return VinculaPerfilUsuarioPageModule;
}());

//# sourceMappingURL=vincula-perfil-usuario.module.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VinculaPerfilUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_colaborador_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_perfil_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(65);
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
 * Generated class for the VinculaPerfilUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VinculaPerfilUsuarioPage = /** @class */ (function () {
    function VinculaPerfilUsuarioPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, perfilService, colaboradorService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.perfilService = perfilService;
        this.colaboradorService = colaboradorService;
    }
    VinculaPerfilUsuarioPage.prototype.ionViewDidLoad = function () {
        this.loadColaboradores();
        this.loadPerfis();
    };
    VinculaPerfilUsuarioPage.prototype.registrar = function () {
        var _this = this;
        var result = false;
        var perfisNovos = [];
        if (this.colaborador == undefined) {
            this.showSelecionaColaboirador();
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
                this.colaborador.perfis = perfisNovos;
                this.colaboradorService.updateComPerfil(this.colaborador).subscribe(function (response) {
                    _this.showUpdateOk();
                }, function (error) { });
            }
        }
    };
    VinculaPerfilUsuarioPage.prototype.changeToggle = function (ev, checked) {
        //console.log(checked);
        //console.log(this.perfis);
    };
    VinculaPerfilUsuarioPage.prototype.colaboradorChange = function (event) {
        this.perfis.forEach(function (p) {
            if (event.value.perfis.find(function (element) { return element.descricao == p.descricao; }) != undefined) {
                p.selecionado = true;
            }
            else {
                p.selecionado = false;
            }
        });
    };
    VinculaPerfilUsuarioPage.prototype.loadPerfis = function () {
        var _this = this;
        this.perfilService.findAll()
            .subscribe(function (response) {
            _this.perfis = response.sort();
            //console.log(this.perfis);
        }, function (error) { });
    };
    VinculaPerfilUsuarioPage.prototype.loadColaboradores = function () {
        var _this = this;
        this.colaboradorService.findAll()
            .subscribe(function (response) {
            _this.colaboradores = response.sort();
            //console.log(this.colaboradores);
        }, function (error) { });
    };
    VinculaPerfilUsuarioPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VinculaPerfilUsuarioPage.prototype.showInsertOk = function () {
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
    VinculaPerfilUsuarioPage.prototype.showUpdateOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Cadastro atualizado com sucesso!',
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
    VinculaPerfilUsuarioPage.prototype.showSelecionaColaboirador = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            message: 'Selecione um usuário!',
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
    VinculaPerfilUsuarioPage.prototype.showSelecionaPerfil = function () {
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
    VinculaPerfilUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-vincula-perfil-usuario',template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\vincula-perfil-usuario\vincula-perfil-usuario.html"*/'<!--\n\n  Generated template for the VinculaPerfilUsuarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Vincular Perfil ao Usuário\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()" >\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Usuário</ion-label>\n\n    <ionic-selectable \n\n      item-content\n\n      [(ngModel)]="colaborador"\n\n      [items]="colaboradores"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      [focusSearchbar]="true"\n\n      (onChange)="colaboradorChange($event)"\n\n      [hasVirtualScroll]="true" >\n\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{item.nome}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ng-template>\n\n    </ionic-selectable>\n\n  </ion-item>\n\n  <ion-list *ngFor="let item of perfis">\n\n    <ion-item>\n\n      <ion-label>{{ item.nome }}</ion-label>\n\n      <ion-toggle color="secondary" [(ngModel)]="item.selecionado" (ionChange)="changeToggle($event,item.selecionado)"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block type="submit" (click)="registrar()">Registrar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\pages\vincula-perfil-usuario\vincula-perfil-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_colaborador_service__["a" /* ColaboradorService */]])
    ], VinculaPerfilUsuarioPage);
    return VinculaPerfilUsuarioPage;
}());

//# sourceMappingURL=vincula-perfil-usuario.js.map

/***/ })

});
//# sourceMappingURL=12.js.map