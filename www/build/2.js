webpackJsonp([2],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroEntradaPageModule", function() { return CadastroEntradaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_entrada__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CadastroEntradaPageModule = /** @class */ (function () {
    function CadastroEntradaPageModule() {
    }
    CadastroEntradaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cadastro_entrada__["a" /* CadastroEntradaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cadastro_entrada__["a" /* CadastroEntradaPage */]),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], CadastroEntradaPageModule);
    return CadastroEntradaPageModule;
}());

//# sourceMappingURL=cadastro-entrada.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__ = __webpack_require__(729);
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

/***/ 729:
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

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroEntradaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_unidade_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_entrada_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_localizacao_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_fornecedor_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_domain_insumo_service__ = __webpack_require__(350);
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
 * Generated class for the CadastroEntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroEntradaPage = /** @class */ (function () {
    function CadastroEntradaPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, insumoService, loadingCtrl, fornecedorService, localizacaoService, entradaService, dateTimeFormatPipe, unidadeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.insumoService = insumoService;
        this.loadingCtrl = loadingCtrl;
        this.fornecedorService = fornecedorService;
        this.localizacaoService = localizacaoService;
        this.entradaService = entradaService;
        this.dateTimeFormatPipe = dateTimeFormatPipe;
        this.unidadeService = unidadeService;
        this.botaoEntrada = true;
        //usando classe
        this.citensInsumos = [];
        this.citensEntradas = [];
        this.citensnovaentrada = [];
        this.fornecedores = [];
        this.localizacoes = [];
        this.unidadesRecebida = [];
        this.unidadesEntrada = [];
        this.page = 0;
        this.formGroup = this.formBuilder.group({
            insumo: this.formControl,
            loteFornecedor: ['',],
            loteCR: ['',],
            dataIrradiacao: ['',],
            quantidade: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            valor: ['',],
            valorTotal: ['',],
            unidadeRecebida: ['',],
            unidadeEntrada: ['',],
        }, {});
    }
    CadastroEntradaPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CadastroEntradaPage');
        this.loadData();
        this.loadFornecedor();
        this.loadLocalizacao();
        this.loadUnidades();
        //console.log("oia"+this.fornecedor);
    };
    CadastroEntradaPage.prototype.dismiss = function () {
        //this.navCtrl.push('EntradaPage', {}, {animate: true, direction: 'forward'});
        this.navCtrl.popToRoot();
        //this.viewCtrl.dismiss();
    };
    CadastroEntradaPage.prototype.searchInsumo = function (event) {
        var _this = this;
        var text = event.text.trim().toLowerCase();
        event.component.startSearch();
        if (this.portsSubscription) {
            this.portsSubscription.unsubscribe();
        }
        if (!text) {
            // Close any running subscription.
            if (this.portsSubscription) {
                this.portsSubscription.unsubscribe();
            }
            //event.component.items = this.portService.getPorts(1, 15);
            // Enable and start infinite scroll from the beginning.
            //this.page = 2;
            event.component.endSearch();
            event.component.enableInfiniteScroll();
            return;
        }
        this.portsSubscription = this.insumoService.findAll().subscribe(function (ports) {
            // Subscription will be closed when unsubscribed manually.
            if (_this.portsSubscription.closed) {
                return;
            }
            event.component.items = _this.filterPorts(ports, text);
            event.component.endSearch();
        });
    };
    CadastroEntradaPage.prototype.filterPorts = function (ports, text) {
        return ports.filter(function (port) {
            return port.nomecodalmox.toLowerCase().indexOf(text) !== -1;
        });
    };
    CadastroEntradaPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.loadData();
        setTimeout(function () {
            infiniteScroll.component.endInfiniteScroll();
        }, 1000);
    };
    CadastroEntradaPage.prototype.loadData = function () {
        var _this = this;
        var loader = this.presentLoading();
        var itensIns = [];
        this.insumoService.findTotosPaginado(this.page, 30)
            .subscribe(function (response) {
            var start = _this.citensEntradas.length;
            _this.citensInsumos = _this.citensInsumos.concat(response['content']);
            var end = _this.citensEntradas.length - 1;
            _this.citensInsumos.forEach(function (value) {
                var insEnt = {
                    insumo: value,
                    loteFornecedor: '',
                    loteCR: '',
                    dataIrradiacao: null,
                    dataVencIrradiacao: null,
                    quantidade: 0,
                    valor: 0,
                    valorTotal: 0
                };
                itensIns.push(insEnt);
            });
            console.log("ITENSS " + itensIns[1].insumo.codigoalmox);
            _this.citensEntradas = itensIns;
            //console.log(this.itensEntrada);
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    CadastroEntradaPage.prototype.loadFornecedor = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.fornecedorService.findAll().subscribe(function (response) {
            _this.fornecedores = response.sort();
            _this.fornecedorService.findByNome("almoxarifado central").subscribe(function (resp) {
                _this.fornecedor = resp[0];
            });
            //console.log(this.fornecedores);
            loader.dismiss();
        });
    };
    CadastroEntradaPage.prototype.loadUnidades = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.unidadeService.findAll().subscribe(function (response) {
            _this.unidadesRecebida = response.sort();
            _this.unidadesEntrada = response.sort();
            loader.dismiss();
        });
    };
    CadastroEntradaPage.prototype.buscaFornecedor = function (event) {
        var _this = this;
        //this.fornecedor = {insumo: event.value, quantidade: 0, valor: 0};
        var text = event.text.trim().toLowerCase();
        console.log("Busca esse:" + text);
        this.fornecedorService.findByNome(text).subscribe(function (response) {
            _this.fornecedores = response.sort();
            //console.log(this.fornecedores);
        });
        //console.log('buscaFornecedor::', text);
    };
    CadastroEntradaPage.prototype.loadLocalizacao = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.localizacaoService.findAll().subscribe(function (response) {
            _this.localizacoes = response.sort();
            loader.dismiss();
        });
    };
    CadastroEntradaPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    CadastroEntradaPage.prototype.insereListaEntrada = function () {
        this.cie = this.formGroup.value;
        this.cie.insumo.unidade = this.unidadeRecebida;
        console.log(this.cie);
        this.citensnovaentrada.push(this.formGroup.value);
        //calcular e gravar unidades
        this.botaoEntrada = false;
        this.reset();
        //console.log('this.numeronf',this.numeronf);
        //console.log('this.formGroup.value',this.citensnovaentrada);
    };
    CadastroEntradaPage.prototype.insereInsumoEntradaDTO = function (event) {
        this.insumoEntrada = event.value;
        this.insumoEntrada.unidade = this.unidadeEntrada;
        this.citensEntrada = {
            insumo: this.insumoEntrada,
            loteFornecedor: '',
            loteCR: '',
            dataIrradiacao: null,
            dataVencIrradiacao: null,
            quantidade: 0,
            valor: 0,
            valorTotal: 0
        };
        if (this.citensEntrada.insumo.unidade != null) {
            console.log("olha isso:" + this.citensEntrada.insumo.unidade);
            this.unidadeEntrada = this.citensEntrada.insumo.unidade;
        }
        console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    };
    CadastroEntradaPage.prototype.insereunidadeRecebidaDTO = function (event) {
        this.unidadeRecebida = event.value;
        //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    };
    CadastroEntradaPage.prototype.insereunidadeEntradaDTO = function (event) {
        this.unidadeEntrada = event.value;
        //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    };
    CadastroEntradaPage.prototype.insereFornecedorEntradaDTO = function (event) {
        //this.fornecedor = {insumo: event.value, quantidade: 0, valor: 0};
        //console.log('insereInsumoEntradaDTO::', this.citensEntrada);
    };
    CadastroEntradaPage.prototype.cadastrarInsumo = function () {
        var dto = Object.assign({});
        dto = Object.assign(dto, this.formGroup.value);
        //let newDto : InsumoNewDTO;
        //newDto.nome = dto.nome;
        //newDto.valor = +dto.valor;
        console.log("aqui");
        console.log(dto);
        /*this.insumoService.insert(this.formGroup.value).subscribe(response => {
          this.showInserOk();
        },
        error => {});*/
    };
    CadastroEntradaPage.prototype.reset = function () {
        //console.log("teste");
        this.formGroup.reset();
    };
    CadastroEntradaPage.prototype.excluiItem = function (cInsumoEntradaDTO) {
        this.citensnovaentrada.forEach(function (item, index, object) {
            if (item === cInsumoEntradaDTO) {
                object.splice(index, 1);
            }
        });
        if (this.citensnovaentrada.length == 0) {
            this.botaoEntrada = true;
        }
        this.loadData();
    };
    CadastroEntradaPage.prototype.inserirEntrada = function () {
        var _this = this;
        this.entrada = {};
        this.citensnovaentrada.forEach(function (item, index, object) {
            if (item.valorTotal != null && item.quantidade != null) {
                item.valor = item.valorTotal / item.quantidade;
            }
        });
        console.log(this.dateTimeFormatPipe.transform(this.dataEntrada));
        this.entrada.dataEntrada = this.dateTimeFormatPipe.transform(this.dataEntrada);
        this.entrada.numLIA = this.numLIA;
        this.entrada.numProcesso = this.numProcesso;
        this.entrada.numRequisicao = this.numRequisicao;
        this.entrada.itens = this.citensnovaentrada;
        this.entrada.localizacao = this.localizacao;
        this.entradaService.insert(this.entrada).subscribe(function (response) {
            _this.showInserOk();
        }, function (error) { });
        console.log(this.entrada);
    };
    CadastroEntradaPage.prototype.showInserOk = function () {
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
    /*async filtraInsumo(evt){
      this.itensInsumos = this.getInsumos();
      const busca = evt.srcElement.value;
  
      if (!busca) {
        return;
      }
  
      this.itensInsumos = this.itensInsumos.filter(insumo => {
        
        if (insumo.nome && busca) {
          //console.log(insumo.nome + " --- "+busca);
          return (insumo.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1);
        }
      });
      //console.log(evt.srcElement.value);
    }*/
    CadastroEntradaPage.prototype.filtraInsumo = function (evt) {
        var busca = evt.srcElement.value;
        //console.log(busca);
        if (!busca) {
            return this.loadData();
        }
        return this.citensEntradas = this.citensEntradas.filter(function (ine) {
            return (ine.insumo.nome.toLowerCase().includes(busca.toLowerCase()));
        });
    };
    CadastroEntradaPage.prototype.insereLista = function () {
    };
    CadastroEntradaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'page-cadastro-entrada',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\cadastro-entrada\cadastro-entrada.html"*/'<!--\n\n  Generated template for the CadastroEntradaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Entrada de Insumos\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()" >\n\n        <span ion-text color="primary" showWhen="ios">Cancel </span>\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-item color="item_entrada">\n\n    <ion-label>Fornecedor</ion-label>\n\n    <ionic-selectable \n\n      item-content \n\n      [(ngModel)]="fornecedor"\n\n      [items]="fornecedores"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      [hasVirtualScroll]="true" >\n\n      <ng-template ionicSelectableItemTemplate let-port="item" class="my-center-text">\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{port.nome}}\n\n          </ion-label>\n\n        </ion-item>\n\n\n\n      </ng-template>\n\n\n\n    </ionic-selectable>\n\n  </ion-item>\n\n\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Localização</ion-label>\n\n    <ionic-selectable \n\n      item-content \n\n      [(ngModel)]="localizacao"\n\n      [items]="localizacoes"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      [hasVirtualScroll]="true" >\n\n      <ng-template ionicSelectableItemTemplate let-port="item" class="my-center-text">\n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{port.nome}}\n\n          </ion-label>\n\n        </ion-item>\n\n\n\n      </ng-template>\n\n\n\n    </ionic-selectable>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Data emissão</ion-label>\n\n    <ion-input type="date" [(ngModel)]="dataEntrada"> </ion-input>\n\n  </ion-item>\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Número requisição</ion-label>\n\n    <ion-input type="text" [(ngModel)]="numRequisicao"> </ion-input>\n\n  </ion-item>\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Número documento (LIA)</ion-label>\n\n    <ion-input type="text" [(ngModel)]="numLIA"> </ion-input>\n\n  </ion-item>\n\n  <ion-item color="item_entrada">\n\n    <ion-label>Número processo</ion-label>\n\n    <ion-input type="text" [(ngModel)]="numProcesso"> </ion-input>\n\n  </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <form [formGroup]="formGroup" margin-bottom (ngSubmit)="insereListaEntrada()">\n\n  <ion-item>\n\n    <ion-label>Insumos</ion-label>\n\n    <ionic-selectable \n\n      item-content \n\n      [(ngModel)]="citemInsumo"\n\n      [items]="citensInsumos"\n\n      formControlName="insumo"\n\n      itemValueField="id"\n\n      itemTextField="nomecodalmox"\n\n      [canSearch]="true"\n\n      (onSearch)="searchInsumo($event)"\n\n      (onChange)="insereInsumoEntradaDTO($event)"\n\n      [hasInfiniteScroll]="true"\n\n      (onInfiniteScroll)="doInfinite($event)">\n\n\n\n      <ng-template ionicSelectableItemTemplate let-port="item">\n\n       \n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{port.nome}} \n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label class="label_14">\n\n            Cod Almox: {{port.codigoalmox}}  -  Quantidade atual: {{port.quantidade}}\n\n          </ion-label>\n\n        </ion-item>\n\n\n\n      </ng-template>\n\n\n\n    </ionic-selectable>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Unidade Recebida</ion-label>\n\n    <ionic-selectable \n\n      item-content \n\n      [(ngModel)]="unidadeRecebida"\n\n      [items]="unidadesRecebida"\n\n      formControlName="unidadeRecebida"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      (onChange)="insereunidadeRecebidaDTO($event)">\n\n\n\n      <ng-template ionicSelectableItemTemplate let-port="item">\n\n       \n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{port.nome}} \n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label class="label_14">\n\n            Sigla: {{port.sigla}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ng-template>\n\n\n\n    </ionic-selectable>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label >Quantidade Recebida</ion-label>\n\n    <ion-input type="number" formControlName="quantidade"> </ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Unidade de Entrada</ion-label>\n\n    <ionic-selectable \n\n      item-content \n\n      [(ngModel)]="unidadeEntrada"\n\n      [items]="unidadesEntrada"\n\n      formControlName="unidadeEntrada"\n\n      itemValueField="id"\n\n      itemTextField="nome"\n\n      [canSearch]="true"\n\n      (onChange)="insereunidadeEntradaDTO($event)">\n\n\n\n      <ng-template ionicSelectableItemTemplate let-port="item">\n\n       \n\n        <ion-item>\n\n          <ion-label text-wrap class="label_12_b">\n\n            {{port.nome}} \n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label class="label_14">\n\n            Sigla: {{port.sigla}}\n\n          </ion-label>\n\n        </ion-item>\n\n\n\n      </ng-template>\n\n\n\n    </ionic-selectable>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Lote Fornecedor</ion-label>\n\n    <ion-input type="text" formControlName="loteFornecedor"> </ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Data Irradiação</ion-label>\n\n    <ion-input type="date" formControlName="dataIrradiacao"> </ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label >Valor Total</ion-label>\n\n    <ion-input type="number" formControlName="valorTotal">  </ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-badge item-right color="danger" *ngIf="!formGroup.valid">Inválido</ion-badge>\n\n    <ion-badge item-right color="secondary" *ngIf="formGroup.valid">Válido</ion-badge>\n\n    <button ion-button (click)="reset()" [disabled]="!formGroup.valid">\n\n      Limpar\n\n    </button>\n\n    <button   ion-button type="submit" [disabled]="!formGroup.valid">Incluir</button>\n\n  </ion-item>\n\n</form>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        Cod\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        Insumo\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        Quant\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        Valor Total\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        Exc\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let ient of citensnovaentrada">\n\n      <ion-col col-2>\n\n        {{ient.insumo.codigoalmox}}\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        {{ient.insumo.nome}}\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        {{ient.quantidade}}\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        {{ient.valorTotal}}\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <ion-icon name="close-circle" (click)="excluiItem(ient)"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 style="text-align: right;" ><button ion-button [disabled]="botaoEntrada" (click)="inserirEntrada()">Inserir entrada</button></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\cadastro-entrada\cadastro-entrada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_fornecedor_service__["a" /* FornecedorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_localizacao_service__["a" /* LocalizacaoService */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_entrada_service__["a" /* EntradaService */],
            __WEBPACK_IMPORTED_MODULE_1__utils_date_time_format__["a" /* DateTimeFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_unidade_service__["a" /* UnidadeService */]])
    ], CadastroEntradaPage);
    return CadastroEntradaPage;
}());

//# sourceMappingURL=cadastro-entrada.js.map

/***/ })

});
//# sourceMappingURL=2.js.map