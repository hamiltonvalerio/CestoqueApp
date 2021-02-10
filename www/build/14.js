webpackJsonp([14],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizacaoInsumosPageModule", function() { return LocalizacaoInsumosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizacao_insumos__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalizacaoInsumosPageModule = /** @class */ (function () {
    function LocalizacaoInsumosPageModule() {
    }
    LocalizacaoInsumosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__localizacao_insumos__["a" /* LocalizacaoInsumosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__localizacao_insumos__["a" /* LocalizacaoInsumosPage */]),
            ],
        })
    ], LocalizacaoInsumosPageModule);
    return LocalizacaoInsumosPageModule;
}());

//# sourceMappingURL=localizacao-insumos.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoInsumosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_localizacao_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(64);
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
 * Generated class for the LocalizacaoInsumosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalizacaoInsumosPage = /** @class */ (function () {
    function LocalizacaoInsumosPage(navCtrl, navParams, localizacaoService, insumoService, LoadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localizacaoService = localizacaoService;
        this.insumoService = insumoService;
        this.LoadingController = LoadingController;
        this.page = 0;
        this.insumosLocalizacao = [];
    }
    LocalizacaoInsumosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocalizacaoInsumosPage');
        //this.loadData();
        this.getItens();
    };
    /*loadData(){
      let localizacaoId = this.navParams.get('localizacao_id');
      console.log("aqui: "+localizacaoId);
  
      this.insumoService.findByLocalizacao(localizacaoId,this.page, 30)
      .subscribe(response => {
        
        this.itens = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
        
      },
      error => {})
  
      console.log(this.itens);
  
      this.itens.forEach(function (value){
        console.log(value);
      })
  
    }*/
    LocalizacaoInsumosPage.prototype.getItens = function () {
        var _this = this;
        var localizacaoId = this.navParams.get('localizacao_id');
        var loader = this.presentLoading();
        this.insumosLocalizacao = [];
        this.insumoService.findByLocalizacao(localizacaoId, this.page, 30)
            .subscribe(function (response) {
            var start = _this.insumosLocalizacao.length;
            _this.insumosLocalizacao = _this.insumosLocalizacao.concat(response['content']);
            var end = _this.insumosLocalizacao.length - 1;
            console.log(_this.insumosLocalizacao);
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    LocalizacaoInsumosPage.prototype.presentLoading = function () {
        var loader = this.LoadingController.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    LocalizacaoInsumosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-localizacao-insumos',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\localizacao-insumos\localizacao-insumos.html"*/'<!--\n\n  Generated template for the LocalizacaoInsumosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Insumos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid *ngFor="let ins of insumosLocalizacao">\n\n      <ion-row>\n\n        <h6>{{ins.nome}}</h6>\n\n      </ion-row>\n\n      <ion-row>\n\n        Unidade: {{ins.unidade.nome}}\n\n      </ion-row>\n\n      <ion-row>\n\n        Quantidade: {{ins.quantidade}}\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\localizacao-insumos\localizacao-insumos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */]])
    ], LocalizacaoInsumosPage);
    return LocalizacaoInsumosPage;
}());

//# sourceMappingURL=localizacao-insumos.js.map

/***/ })

});
//# sourceMappingURL=14.js.map