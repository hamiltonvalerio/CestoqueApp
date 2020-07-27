webpackJsonp([20],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
    }
    AuthService.prototype.authenticate = function (creds) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config_api_config__["a" /* API_CONFIG */].baseUrl + "/login", creds, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AuthService.prototype.successfullLogin = function (authorizationValue) {
        var tok = authorizationValue.substring(7);
        var user = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    };
    AuthService.prototype.refreshToken = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config_api_config__["a" /* API_CONFIG */].baseUrl + "/auth/refresh_token", {}, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AuthService.prototype.logout = function () {
        this.storage.setLocalUser(null);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__storage_service__["a" /* StorageService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-categoria/cadastro-categoria.module": [
		688,
		19
	],
	"../pages/cadastro-entrada/cadastro-entrada.module": [
		689,
		18
	],
	"../pages/cadastro-fornecedor/cadastro-fornecedor.module": [
		690,
		17
	],
	"../pages/cadastro-insumo/cadastro-insumo.module": [
		691,
		1
	],
	"../pages/cadastro-localizacao/cadastro-localizacao.module": [
		692,
		16
	],
	"../pages/cadastro-saida/cadastro-saida.module": [
		693,
		15
	],
	"../pages/cadastro-unidade/cadastro-unidade.module": [
		694,
		14
	],
	"../pages/categorias/categorias.module": [
		695,
		4
	],
	"../pages/dashboard/dashboard.module": [
		696,
		13
	],
	"../pages/entrada/entrada.module": [
		697,
		12
	],
	"../pages/fornecedor/fornecedor.module": [
		698,
		3
	],
	"../pages/home/home.module": [
		707,
		11
	],
	"../pages/insumo/insumos.module": [
		699,
		0
	],
	"../pages/localizacao/localizacao.module": [
		700,
		2
	],
	"../pages/producao/producao.module": [
		701,
		10
	],
	"../pages/produto/produto.module": [
		702,
		9
	],
	"../pages/profile/profile.module": [
		703,
		8
	],
	"../pages/saida/saida.module": [
		704,
		7
	],
	"../pages/signup/signup.module": [
		705,
		6
	],
	"../pages/unidade/unidade.module": [
		706,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 306;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsumoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InsumoService = /** @class */ (function () {
    function InsumoService(http) {
        this.http = http;
    }
    InsumoService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos");
    };
    InsumoService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    InsumoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], InsumoService);
    return InsumoService;
}());

//# sourceMappingURL=insumo.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnidadeService = /** @class */ (function () {
    function UnidadeService(http) {
        this.http = http;
    }
    UnidadeService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/unidades");
    };
    UnidadeService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/unidades/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    UnidadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], UnidadeService);
    return UnidadeService;
}());

//# sourceMappingURL=unidade.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FornecedorService = /** @class */ (function () {
    function FornecedorService(http) {
        this.http = http;
    }
    FornecedorService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/fornecedores");
    };
    FornecedorService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/fornecedores/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    FornecedorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FornecedorService);
    return FornecedorService;
}());

//# sourceMappingURL=fornecedor.service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColaboradorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColaboradorService = /** @class */ (function () {
    function ColaboradorService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ColaboradorService.prototype.findByEmail = function (email) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config_api_config__["a" /* API_CONFIG */].baseUrl + "/colaboradores/email?value=" + email);
    };
    ColaboradorService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config_api_config__["a" /* API_CONFIG */].baseUrl + "/colaboradores/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    ColaboradorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__storage_service__["a" /* StorageService */]])
    ], ColaboradorService);
    return ColaboradorService;
}());

//# sourceMappingURL=colaborador.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriaService = /** @class */ (function () {
    function CategoriaService(http) {
        this.http = http;
    }
    CategoriaService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/categorias");
    };
    CategoriaService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/categorias/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    CategoriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CategoriaService);
    return CategoriaService;
}());

//# sourceMappingURL=categoria.service.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalizacaoService = /** @class */ (function () {
    function LocalizacaoService(http) {
        this.http = http;
    }
    LocalizacaoService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/localizacoes");
    };
    LocalizacaoService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/localizacoes/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    LocalizacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], LocalizacaoService);
    return LocalizacaoService;
}());

//# sourceMappingURL=localizacao.service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_CONFIG; });
var API_CONFIG = {
    baseUrl: "http://localhost:8080"
};
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_unidade_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_fornecedor_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_colaborador_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_domain_categoria_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interceptors_error_interceptor__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_storage_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__interceptors_auth_interceptor__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_domain_localizacao_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__(686);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-categoria/cadastro-categoria.module#CadastroCategoriaPageModule', name: 'CadastroCategoriaPage', segment: 'cadastro-categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-entrada/cadastro-entrada.module#CadastroEntradaPageModule', name: 'CadastroEntradaPage', segment: 'cadastro-entrada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-fornecedor/cadastro-fornecedor.module#CadastroFornecedorPageModule', name: 'CadastroFornecedorPage', segment: 'cadastro-fornecedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-insumo/cadastro-insumo.module#CadastroInsumoPageModule', name: 'CadastroInsumoPage', segment: 'cadastro-insumo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-localizacao/cadastro-localizacao.module#CadastroLocalizacaoPageModule', name: 'CadastroLocalizacaoPage', segment: 'cadastro-localizacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-saida/cadastro-saida.module#CadastroSaidaPageModule', name: 'CadastroSaidaPage', segment: 'cadastro-saida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-unidade/cadastro-unidade.module#CadastroUnidadePageModule', name: 'CadastroUnidadePage', segment: 'cadastro-unidade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categorias/categorias.module#CategoriasPageModule', name: 'CategoriasPage', segment: 'categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrada/entrada.module#EntradaPageModule', name: 'EntradaPage', segment: 'entrada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fornecedor/fornecedor.module#FornecedorPageModule', name: 'FornecedorPage', segment: 'fornecedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insumo/insumos.module#InsumoPageModule', name: 'InsumosPage', segment: 'insumos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/localizacao/localizacao.module#LocalizacaoPageModule', name: 'LocalizacaoPage', segment: 'localizacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producao/producao.module#ProducaoPageModule', name: 'ProducaoPage', segment: 'producao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produto/produto.module#ProdutoPageModule', name: 'ProdutoPage', segment: 'produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saida/saida.module#SaidaPageModule', name: 'SaidaPage', segment: 'saida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unidade/unidade.module#UnidadePageModule', name: 'UnidadePage', segment: 'unidade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__services_domain_categoria_service__["a" /* CategoriaService */],
                __WEBPACK_IMPORTED_MODULE_2__services_domain_fornecedor_service__["a" /* FornecedorService */],
                __WEBPACK_IMPORTED_MODULE_1__services_domain_unidade_service__["a" /* UnidadeService */],
                __WEBPACK_IMPORTED_MODULE_16__services_domain_localizacao_service__["a" /* LocalizacaoService */],
                __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__["a" /* InsumoService */],
                __WEBPACK_IMPORTED_MODULE_15__interceptors_auth_interceptor__["a" /* AuthInterceptorProvider */],
                __WEBPACK_IMPORTED_MODULE_13__interceptors_error_interceptor__["a" /* ErrorInterceptorProvider */],
                __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_3__services_domain_colaborador_service__["a" /* ColaboradorService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORAGE_KEYS; });
var STORAGE_KEYS = {
    localUser: "localUser"
};
//# sourceMappingURL=storage_keys.config.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_storage_keys_config__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.getLocalUser = function () {
        var usr = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__config_storage_keys_config__["a" /* STORAGE_KEYS */].localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    };
    StorageService.prototype.setLocalUser = function (obj) {
        if (obj == null) {
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_0__config_storage_keys_config__["a" /* STORAGE_KEYS */].localUser);
        }
        else {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__config_storage_keys_config__["a" /* STORAGE_KEYS */].localUser, JSON.stringify(obj));
        }
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = 'HomePage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Dashboard', component: 'DashboardPage' },
            { title: 'Produção', component: 'ProducaoPage' },
            { title: 'Insumos', component: 'InsumosPage' },
            { title: 'Produtos', component: 'ProdutoPage' },
            { title: 'Categorias', component: 'CategoriasPage' },
            { title: 'Fornecedores', component: 'FornecedorPage' },
            { title: 'Unidades de Medida', component: 'UnidadePage' },
            { title: 'Localizações', component: 'LocalizacaoPage' },
            { title: 'Entradas', component: 'EntradaPage' },
            { title: 'Saídas', component: 'SaidaPage' },
            { title: 'Profile', component: 'ProfilePage' },
            { title: 'Logout', component: '' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        switch (page.title) {
            case 'Logout':
                this.auth.logout();
                this.nav.setRoot('HomePage');
                break;
            default: this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content >\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Desenvolvimento_ipen_ionic\CestoqueApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(storage, alertCtrl) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req)
            .catch(function (error, caught) {
            var errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }
            console.log("Erro detectado pelo interceptor:");
            console.log(errorObj);
            switch (errorObj.status) {
                case 401:
                    _this.handle401();
                    break;
                case 403:
                    _this.handle403();
                    break;
                case 422:
                    _this.handle422(errorObj);
                    break;
                case 500:
                    _this.handle500(errorObj);
                    break;
                default:
                    _this.handleDeafultError(errorObj);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errorObj);
        });
    };
    ErrorInterceptor.prototype.handle401 = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro 401: Falha de autenticação',
            message: 'Email ou senha incorretos',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present();
    };
    ErrorInterceptor.prototype.handle403 = function () {
        this.storage.setLocalUser(null);
    };
    ErrorInterceptor.prototype.handle422 = function (errorObj) {
        var alert = this.alertCtrl.create({
            title: 'Erro 422 validação ',
            message: this.listErrors(errorObj.errors),
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present();
    };
    ErrorInterceptor.prototype.handle500 = function (errorObj) {
        var alert = this.alertCtrl.create({
            title: 'Erro 500',
            message: this.listErrors(errorObj.errors),
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present();
    };
    ErrorInterceptor.prototype.listErrors = function (messages) {
        var s = '';
        for (var i = 0; i < messages.length; i++) {
            s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message + '</p>';
        }
        return s;
    };
    ErrorInterceptor.prototype.handleDeafultError = function (errorObj) {
        var alert = this.alertCtrl.create({
            title: 'Erro ' + errorObj.status + ': ' + errorObj.error,
            message: errorObj.message,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present();
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: ErrorInterceptor,
    multi: true,
};
//# sourceMappingURL=error-interceptor.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(storage) {
        this.storage = storage;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var localUser = this.storage.getLocalUser();
        var baseUrlTamanho = __WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl.length;
        var requestToAPI = req.url.substring(0, baseUrlTamanho) == __WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl;
        if (localUser && requestToAPI) {
            var authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//provider do interceptor
var AuthInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: AuthInterceptor,
    multi: true,
};
//# sourceMappingURL=auth-interceptor.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map