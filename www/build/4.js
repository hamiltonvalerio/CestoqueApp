webpackJsonp([4],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroMovimentacaoPageModule", function() { return CadastroMovimentacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_selectable__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_movimentacao__ = __webpack_require__(739);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CadastroMovimentacaoPageModule = /** @class */ (function () {
    function CadastroMovimentacaoPageModule() {
    }
    CadastroMovimentacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__cadastro_movimentacao__["a" /* CadastroMovimentacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__cadastro_movimentacao__["a" /* CadastroMovimentacaoPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], CadastroMovimentacaoPageModule);
    return CadastroMovimentacaoPageModule;
}());

//# sourceMappingURL=cadastro-movimentacao.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var HideHeaderDirective = /** @class */ (function () {
    function HideHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.transitionTime = "400";
        console.log(element);
        console.log(renderer);
    }
    HideHeaderDirective.prototype.ngOnInit = function () {
        this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
        this.fixedContent = this.element.nativeElement.getElementsByClassName("fixed-content")[0];
        this.renderer.setElementStyle(this.scrollContent, "transition", "margin-top " + this.transitionTime);
        this.renderer.setElementStyle(this.fixedContent, "transition", "margin-top " + this.transitionTime);
    };
    HideHeaderDirective.prototype.onScrooll = function (event) {
        var _this = this;
        console.log(event);
        if (!this.header) {
            this.header = event.headerElement;
            this.headerHeight = this.header.clientHeight;
            this.renderer.setElementStyle(this.header, "transition", "top " + this.transitionTime);
            //console.log(this.headerHeight);
        }
        event.domWrite(function () {
            console.log(event.directionY);
            if (event.directionY == "down") {
                _this.renderer.setElementStyle(_this.header, "top", "-" + _this.headerHeight + "px");
                _this.renderer.setElementStyle(_this.scrollContent, "margin-top", "0px");
                _this.renderer.setElementStyle(_this.fixedContent, "margin-top", "0px");
            }
            else {
                _this.renderer.setElementStyle(_this.header, "top", "0px");
                _this.renderer.setElementStyle(_this.scrollContent, "margin-top", _this.headerHeight + "px");
                _this.renderer.setElementStyle(_this.fixedContent, "margin-top", _this.headerHeight + "px");
            }
        });
    };
    HideHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[hide-header]',
            host: {
                "(ionScroll)": "onScrooll($event)"
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], HideHeaderDirective);
    return HideHeaderDirective;
}());

//# sourceMappingURL=hide-header.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroMovimentacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_movimentacao_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_localizacao_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_insumo_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the CadastroMovimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroMovimentacaoPage = /** @class */ (function () {
    function CadastroMovimentacaoPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, insumoService, loadingCtrl, localizacaoService, dateTimeFormatPipe, movimentacaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.insumoService = insumoService;
        this.loadingCtrl = loadingCtrl;
        this.localizacaoService = localizacaoService;
        this.dateTimeFormatPipe = dateTimeFormatPipe;
        this.movimentacaoService = movimentacaoService;
        this.localizacoes = [];
        this.paralocalizacoes = [];
        this.te = {};
        this.page = 0;
        this.citensInsumos = [];
        this.insumosLocalizacoes = [];
        this.movimentacao = {};
        this.movimentacaogrid = {};
        this.datamovimentacao = new Date();
        this.botaoMovimenta = true;
        this.fieldsGarantiaQualidade = true;
    }
    ;
    CadastroMovimentacaoPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CadastroMovimentacaoPage');
        this.loadLocalizacao();
        this.loadParaLocalizacao();
    };
    CadastroMovimentacaoPage.prototype.dismiss = function () {
        //this.navCtrl.push('EntradaPage', {}, {animate: true, direction: 'forward'});
        this.navCtrl.popToRoot();
        //this.viewCtrl.dismiss();
    };
    CadastroMovimentacaoPage.prototype.reset = function () {
        //console.log("teste");
        this.formGroup.reset();
    };
    CadastroMovimentacaoPage.prototype.loadLocalizacao = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.localizacaoService.findAllInsumoLocalizacao().subscribe(function (response) {
            _this.localizacoes = response.sort();
            loader.dismiss();
        });
    };
    CadastroMovimentacaoPage.prototype.loadParaLocalizacao = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.localizacaoService.findAll().subscribe(function (response) {
            _this.paralocalizacoes = response.sort();
            loader.dismiss();
        });
    };
    CadastroMovimentacaoPage.prototype.insumoChange = function (event) {
        var _this = this;
        if (event.value) {
            if (event.value.aprovacao === true) {
                this.fieldsGarantiaQualidade = false;
                console.log("teste: " + this.fieldsGarantiaQualidade);
            }
            else {
                this.fieldsGarantiaQualidade = true;
            }
            this.citensInsumos = [];
            this.insumoService.findByLocalizacaoNoPage(event.value.id).subscribe(function (response) {
                //this.citensInsumos = response.sort();
                _this.insumosLocalizacoes = response.sort();
            }, function (error) {
                //loader.dismiss();
            });
        }
        else {
            this.citensInsumos = [];
            this.insumosLocalizacoes = [];
        }
    };
    CadastroMovimentacaoPage.prototype.imprimeItem = function (event) {
        //this.citemInsumo = event.value;
    };
    CadastroMovimentacaoPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    CadastroMovimentacaoPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        setTimeout(function () {
            infiniteScroll.component.endInfiniteScroll();
        }, 1000);
    };
    CadastroMovimentacaoPage.prototype.gerarGridMovimentacao = function () {
        if (this.datamovimentacao == null || this.localizacao == null || this.paralocalizacao == null || (typeof this.insumosLocalizacoesSelecionados == 'undefined')) {
            console.log("entrou");
            return;
        }
        this.movimentacao = {};
        var itensInsumosMovimentacao = [];
        this.de = this.localizacao;
        this.movimentacao.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
        this.insumosLocalizacoesSelecionados.forEach(function (value) {
            var itemMov = {
                insumo: value.insumo,
                quantidadeOrigem: value.quantidade,
                quantidadeMovimentada: 0,
                loteFornecedor: value.loteFornecedor,
                loteCR: value.loteCR,
                loteProducao: value.loteProducao,
                dataIrradiacao: value.dataIrradiacao,
                dataValidade: value.dataValidade,
                dataAprovacao: value.dataAprovacao,
                dataReproprovacao: value.dataReproprovacao,
                aprovado: value.aprovado,
                fieldsGarantiaQualidade: true,
                loteRecebimento: value.loteRecebimento,
            };
            itensInsumosMovimentacao.push(itemMov);
        });
        this.movimentacao.localizacaoOrigem = this.localizacao;
        if (this.localizacao.nome === "GARANTIA DA QUALIDADE") {
            //this.movimentacao.fieldsGarantiaQualidade = false;
        }
        else {
            //this.movimentacao.fieldsGarantiaQualidade = true;
        }
        this.movimentacao.localizacaoDestino = this.paralocalizacao;
        this.movimentacao.itens = itensInsumosMovimentacao;
        this.te = this.localizacao;
        this.botaoMovimenta = false;
        //console.log(this.movimentacao);
        //console.log(this.localizacao)
        //console.log(this.citemInsumoSelecionados);
        //console.log(this.paralocalizacao);
        //console.log(this.movimentacao);
    };
    CadastroMovimentacaoPage.prototype.inserirMovimentacao = function () {
        //console.log(this.movimentacao);
        var _this = this;
        this.mov = {};
        this.mov.datamovimentacao = this.dateTimeFormatPipe.transform(this.datamovimentacao);
        this.mov.localizacaoOrigem = this.localizacao;
        this.mov.localizacaoDestino = this.paralocalizacao;
        this.mov.itens = this.movimentacao.itens;
        this.movimentacaoService.insert(this.mov).subscribe(function (response) {
            _this.showInsertOk();
        }, function (error) { });
    };
    CadastroMovimentacaoPage.prototype.showInsertOk = function () {
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
    CadastroMovimentacaoPage.prototype.excluiItem = function (insumomovimentacaoDTO) {
        this.movimentacao.itens.forEach(function (item, index, object) {
            if (item === insumomovimentacaoDTO) {
                object.splice(index, 1);
            }
        });
        if (this.movimentacao.itens.length == 0) {
            this.botaoMovimenta = true;
        }
        //this.loadData();
    };
    CadastroMovimentacaoPage.prototype.limpar = function () {
        this.datamovimentacao = null;
        this.localizacao = null;
        this.paralocalizacao = null;
        this.insumosLocalizacoesSelecionados = [];
    };
    CadastroMovimentacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-cadastro-movimentacao',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\cadastro-movimentacao\cadastro-movimentacao.html"*/'<!--\n\n  Generated template for the CadastroMovimentacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n     Movimentação de Insumos\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()" >\n\n        <span ion-text color="primary" showWhen="ios">Cancel </span>\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Data da Movimentação</ion-label>\n\n    <ion-input type="date" [(ngModel)]="datamovimentacao"> </ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Localização</ion-label>\n\n    <ionic-selectable \n\n      #localizacoesComponent\n\n      item-content\n\n      [(ngModel)]="localizacao"\n\n      [items]="localizacoes"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      [focusSearchbar]="true"\n\n      (onChange)="insumoChange($event)"\n\n      [hasVirtualScroll]="true" >\n\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{item.nome}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ng-template>\n\n    </ionic-selectable>\n\n  </ion-item>\n\n\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Insumos</ion-label>\n\n    <ionic-selectable \n\n      item-content \n\n      [(ngModel)]="insumosLocalizacoesSelecionados"\n\n      [items]="insumosLocalizacoes"\n\n      itemValueField="id"\n\n      itemTextField="nomedoinsumo"\n\n      [hasInfiniteScroll]="true"\n\n      [canSearch]="true"\n\n      [focusSearchbar]="true"\n\n      (onChange)="imprimeItem($event)"\n\n      [isMultiple]="true" \n\n      [isEnabled]="localizacoesComponent.value"\n\n      [canClear]="true"\n\n		  [placeholder]="localizacoesComponent.value ? \'\' : \'Selecione a localização primeiro\'">\n\n\n\n      <ng-template ionicSelectableItemTemplate let-item="item">\n\n       \n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{item.insumo.nome}} \n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label class="label_14">\n\n            Cod Almox: {{item.insumo.codigoalmox}}  -  Quantidade atual: {{item.quantidade}}\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            Lote Fornecedor: {{item.loteFornecedor}} \n\n          </ion-label>\n\n          <ion-label text-wrap class="label_12_b">\n\n            Lote CR: {{item.loteCR}} \n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            Data de Validade: {{item.dataValidade}} \n\n          </ion-label>\n\n        </ion-item>\n\n      </ng-template>\n\n\n\n    </ionic-selectable>\n\n  </ion-item>\n\n  \n\n  <ion-item color="item_entrada">\n\n    <ion-label>Movimentar para</ion-label>\n\n    <ionic-selectable \n\n      item-content\n\n      [(ngModel)]="paralocalizacao"\n\n      [items]="paralocalizacoes"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      [focusSearchbar]="true"\n\n      [hasVirtualScroll]="true" >\n\n      <ng-template ionicSelectableItemTemplate let-item="item" class="my-center-text">\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{item.nome}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ng-template>\n\n    </ionic-selectable>\n\n  </ion-item>\n\n\n\n  <ion-item class text-center>\n\n    <button ion-button (click)="gerarGridMovimentacao()">Gerar grid de movimentação</button>\n\n  </ion-item>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-1>\n\n        Cod\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        Insumo\n\n      </ion-col>\n\n      <ion-col col-1>\n\n       Lote Fornecedor\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        Quant Movimentação\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        Aprovado\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        Lote Produção\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        Localização de Destino\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        Exc\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let mov of movimentacao.itens" >\n\n      <ion-col col-1>\n\n        {{mov.insumo.codigoalmox}}\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        {{mov.insumo.nome}}\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        {{mov.loteFornecedor}}\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <ion-input type="number" [(ngModel)]="mov.quantidadeMovimentada"> </ion-input>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <ion-list radio-group [(ngModel)]="mov.aprovado" name="case" [hidden]="fieldsGarantiaQualidade">\n\n          <ion-item>\n\n            <ion-label>Sim</ion-label>\n\n            <ion-radio value="true"></ion-radio>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Não</ion-label>\n\n            <ion-radio value="false"></ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-input type="text" [(ngModel)]="mov.loteProducao"> </ion-input>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        {{paralocalizacao.nome}}\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <ion-icon name="close-circle" (click)="excluiItem(mov)"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 style="text-align: right;" ><button ion-button color="secondary" [disabled]="botaoMovimenta" (click)="inserirMovimentacao()">Inserir Movimentação</button></ion-col>\n\n    </ion-row>\n\n   \n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\cadastro-movimentacao\cadastro-movimentacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__["a" /* DateTimeFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_movimentacao_service__["a" /* MovimentacaoService */]])
    ], CadastroMovimentacaoPage);
    return CadastroMovimentacaoPage;
}());

//# sourceMappingURL=cadastro-movimentacao.js.map

/***/ })

});
//# sourceMappingURL=4.js.map