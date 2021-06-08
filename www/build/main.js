webpackJsonp([30],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(380);
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

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DATE_FMT = 'dd/MM/yyyy';
    Constants.DATE_TIME_FMT = Constants.DATE_FMT + " hh:mm";
    return Constants;
}());

//# sourceMappingURL=contants.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_CONFIG; });
var API_CONFIG = {
    //baseUrl: "http://10.0.14.7:8080/cestoque-ipen"
    baseUrl: "http://localhost:8080"
    //baseUrl: "http://localhost:8080/cestoque"
    //baseUrl: "http://192.168.1.107:8080"
};
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/administracao/administracao.module": [
		700,
		29
	],
	"../pages/ajuste-estoque/ajuste-estoque.module": [
		703,
		1
	],
	"../pages/alterar-senha/alterar-senha.module": [
		701,
		28
	],
	"../pages/cadastro-categoria/cadastro-categoria.module": [
		702,
		27
	],
	"../pages/cadastro-entrada/cadastro-entrada.module": [
		704,
		7
	],
	"../pages/cadastro-fornecedor/cadastro-fornecedor.module": [
		705,
		26
	],
	"../pages/cadastro-insumo/cadastro-insumo.module": [
		706,
		2
	],
	"../pages/cadastro-localizacao/cadastro-localizacao.module": [
		707,
		25
	],
	"../pages/cadastro-movimentacao/cadastro-movimentacao.module": [
		708,
		6
	],
	"../pages/cadastro-saida/cadastro-saida.module": [
		710,
		24
	],
	"../pages/cadastro-unidade/cadastro-unidade.module": [
		709,
		23
	],
	"../pages/categorias/categorias.module": [
		711,
		9
	],
	"../pages/dashboard/dashboard.module": [
		712,
		22
	],
	"../pages/entrada/entrada.module": [
		713,
		21
	],
	"../pages/fornecedor/fornecedor.module": [
		715,
		20
	],
	"../pages/home/home.module": [
		714,
		19
	],
	"../pages/insumo/insumos.module": [
		716,
		3
	],
	"../pages/localizacao-insumos/localizacao-insumos.module": [
		718,
		0
	],
	"../pages/localizacao/localizacao.module": [
		717,
		8
	],
	"../pages/manual/manual.module": [
		719,
		18
	],
	"../pages/modal-quantidademinima/modal-quantidademinima.module": [
		720,
		5
	],
	"../pages/movimentacao-insumos/movimentacao-insumos.module": [
		722,
		4
	],
	"../pages/movimentacao/movimentacao.module": [
		724,
		17
	],
	"../pages/producao/producao.module": [
		721,
		16
	],
	"../pages/produto/produto.module": [
		723,
		15
	],
	"../pages/profile/profile.module": [
		726,
		14
	],
	"../pages/recupera-senha/recupera-senha.module": [
		727,
		13
	],
	"../pages/saida/saida.module": [
		725,
		12
	],
	"../pages/signup/signup.module": [
		729,
		11
	],
	"../pages/unidade/unidade.module": [
		728,
		10
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
webpackAsyncContext.id = 309;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsumoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
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
    InsumoService.prototype.findById = function (insumo_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/?id=" + insumo_id);
    };
    InsumoService.prototype.findInsumoById = function (insumo_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/findbyid/?insumo_id=" + insumo_id);
    };
    InsumoService.prototype.findTodos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos");
    };
    InsumoService.prototype.findTotosPaginado = function (page, linesPerPage) {
        if (page === void 0) { page = 0; }
        if (linesPerPage === void 0) { linesPerPage = 30; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/page/?page=" + page + "&linesPerPage=" + linesPerPage);
    };
    InsumoService.prototype.findByLocalizacao = function (localizacao_id, page, linesPerPage) {
        if (page === void 0) { page = 0; }
        if (linesPerPage === void 0) { linesPerPage = 30; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/buscaporlocalizacao/?localizacao_id=" + localizacao_id + "&page=" + page + "&linesPerPage=" + linesPerPage);
    };
    /*findByLocalizacaoNoPage(localizacao_id : string){
        return this.http.get(`${API_CONFIG.baseUrl}/insumos/buscaporlocalizacaonopage/?localizacao_id=${localizacao_id}`);
    }*/
    InsumoService.prototype.findInsumoLocalizacaoByLocalizacao = function (localizacao_id, page, linesPerPage) {
        if (page === void 0) { page = 0; }
        if (linesPerPage === void 0) { linesPerPage = 30; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/buscainsumolocalizacaoporlocalizacao/?localizacao_id=" + localizacao_id + "&page=" + page + "&linesPerPage=" + linesPerPage);
    };
    InsumoService.prototype.findInsumoLocalizacaoByLocalizacaoPdf = function (localizacao_id, page, linesPerPage) {
        if (page === void 0) { page = 0; }
        if (linesPerPage === void 0) { linesPerPage = 30; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/buscainsumolocalizacaoporlocalizacao/?localizacao_id=" + localizacao_id + "&page=" + page + "&linesPerPage=" + linesPerPage);
    };
    InsumoService.prototype.findByLocalizacaoNoPage = function (localizacao_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/buscaporlocalizacaonopage/?localizacao_id=" + localizacao_id);
    };
    InsumoService.prototype.findByMovimentacaoNoPage = function (movimentacao_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/buscapormovimentacaonopage/?movimentacao_id=" + movimentacao_id);
    };
    InsumoService.prototype.updateQuantidadeMinima = function (insumolocalizacao_id, quantidademinima) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/updateQuantidadeMinima/?insumolocalizacao_id=" + insumolocalizacao_id + "&quantidademinima=" + quantidademinima, {
            observe: 'response',
            responseType: 'text'
        });
    };
    InsumoService.prototype.update = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/insumos/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    InsumoService.prototype.relatorioInsumos = function () {
        var httpOptions = {
            responseType: 'arraybuffer'
            // 'responseType'  : 'blob' as 'json'        //This also worked
        };
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/relatorios/insumos/", httpOptions);
    };
    InsumoService.prototype.ajustarInsumo = function () {
    };
    InsumoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], InsumoService);
    return InsumoService;
}());

//# sourceMappingURL=insumo.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
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
    LocalizacaoService.prototype.findAllInsumoLocalizacao = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/localizacoes/findAllInsumoLocalizacao");
    };
    LocalizacaoService.prototype.findById = function (localizacao_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/localizacoes/?id=" + localizacao_id);
    };
    LocalizacaoService.prototype.findLocalizacaoById = function (localizacao_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/localizacoes/findbyid/?localizacao_id=" + localizacao_id);
    };
    LocalizacaoService.prototype.insert = function (obj) {
        console.log(obj);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/localizacoes/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    LocalizacaoService.prototype.update = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/localizacoes/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    LocalizacaoService.prototype.findByLocalizacao = function (localizacao_id) {
        //return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes/buscaporlocalizacao/?localizacao_id=${localizacao_id}`);
    };
    LocalizacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], LocalizacaoService);
    return LocalizacaoService;
}());

//# sourceMappingURL=localizacao.service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
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

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColaboradorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
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
    ColaboradorService.prototype.recuperarSenha = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config_api_config__["a" /* API_CONFIG */].baseUrl + "/auth/forgot/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    ColaboradorService.prototype.alterarSenha = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config_api_config__["a" /* API_CONFIG */].baseUrl + "/auth/alterpass/", obj, {
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(26);
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contants__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DateTimeFormatPipe = /** @class */ (function (_super) {
    __extends(DateTimeFormatPipe, _super);
    function DateTimeFormatPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTimeFormatPipe.prototype.transform = function (value, args) {
        return _super.prototype.transform.call(this, value, __WEBPACK_IMPORTED_MODULE_0__contants__["a" /* Constants */].DATE_TIME_FMT);
    };
    DateTimeFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Pipe"])({
            name: 'dateTimeFormat'
        })
    ], DateTimeFormatPipe);
    return DateTimeFormatPipe;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]));

//# sourceMappingURL=date-time-format.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntradaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
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



var EntradaService = /** @class */ (function () {
    function EntradaService(http) {
        this.http = http;
    }
    EntradaService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/entradas");
    };
    EntradaService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/entradas/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    EntradaService.prototype.getFormData = function (object) {
        var formData = new FormData();
        Object.keys(object).forEach(function (key) { return formData.append(key, object[key]); });
        return formData;
    };
    EntradaService.prototype.insertArquivos = function (obj, identrada) {
        obj.append('identrada', identrada);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/entradas/inserearquivos/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    EntradaService.prototype.insertArquivosInsumos = function (insumosArquivosDTO) {
        var fd = new FormData;
        fd.append('file', insumosArquivosDTO.file, insumosArquivosDTO.file.name);
        fd.append("idinsumo", insumosArquivosDTO.insumo.id);
        fd.append("loteFornecedor", insumosArquivosDTO.loteFornecedor);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/entradas/insereinsumosarquivos/", fd, {
            observe: 'response',
            responseType: 'text'
        });
    };
    EntradaService.prototype.formData = function (myFormData) {
        return Object.keys(myFormData).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(myFormData[key]);
        }).join('&');
    };
    EntradaService.prototype.gerarEtiquetas = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/entradas/geraretiquetas/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    EntradaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EntradaService);
    return EntradaService;
}());

//# sourceMappingURL=entrada.service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(26);
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
    FornecedorService.prototype.findTotosPaginado = function (page, linesPerPage) {
        if (page === void 0) { page = 0; }
        if (linesPerPage === void 0) { linesPerPage = 30; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/fornecedores/page/?page=" + page + "&linesPerPage=" + linesPerPage);
    };
    FornecedorService.prototype.findByNome = function (nome) {
        //console.log(nome);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/fornecedores/buscanome/?nome=" + nome);
    };
    FornecedorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FornecedorService);
    return FornecedorService;
}());

//# sourceMappingURL=fornecedor.service.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateNow; });
var DateNow = /** @class */ (function () {
    function DateNow() {
    }
    DateNow.prototype.getDateNow = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' +
            (today.getMonth() + 1).toString().padStart(2, '0') + '-' +
            today.getDate().toString().padStart(2, '0');
        var time = today.getHours().toString().padStart(2, '0') + ':' + today.getMinutes().toString().padStart(2, '0');
        return date + 'T' + time;
    };
    return DateNow;
}());

//# sourceMappingURL=datenow.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovimentacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
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



var MovimentacaoService = /** @class */ (function () {
    function MovimentacaoService(http) {
        this.http = http;
    }
    MovimentacaoService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/movimentacoes");
    };
    MovimentacaoService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/movimentacoes/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    MovimentacaoService.prototype.findTotosPaginado = function (page, linesPerPage) {
        if (page === void 0) { page = 0; }
        if (linesPerPage === void 0) { linesPerPage = 30; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/movimentacoes/page/?page=" + page + "&linesPerPage=" + linesPerPage);
    };
    MovimentacaoService.prototype.findString = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/movimentacoes/string");
    };
    MovimentacaoService.prototype.findTodos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/movimentacoes/findTodos");
    };
    MovimentacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MovimentacaoService);
    return MovimentacaoService;
}());

//# sourceMappingURL=movimentacao.service.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjusteEstoqueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(22);
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



var AjusteEstoqueService = /** @class */ (function () {
    function AjusteEstoqueService(http) {
        this.http = http;
    }
    AjusteEstoqueService.prototype.insert = function (obj) {
        console.log(obj);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/ajusteestoque/", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AjusteEstoqueService.prototype.findAjusteByLocalizacaoAndDataAtual = function (localizacao_id, dataatual) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__config_api_config__["a" /* API_CONFIG */].baseUrl + "/ajusteestoque/buscaAjustesPorDataELocalizacao/?localizacao_id=" + localizacao_id + "&dataAjuste=" + dataatual);
    };
    AjusteEstoqueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AjusteEstoqueService);
    return AjusteEstoqueService;
}());

//# sourceMappingURL=ajusteestoque.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_datenow__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_ajusteestoque_service__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer_ngx__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_format__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_movimentacao_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_date_time_format__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_domain_entrada_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_domain_insumo_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_domain_unidade_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_domain_fornecedor_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_domain_colaborador_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_domain_categoria_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__interceptors_error_interceptor__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_storage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__interceptors_auth_interceptor__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_domain_localizacao_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_selectable__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_ngx__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_opener_ngx__ = __webpack_require__(699);
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
        Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__utils_date_time_format__["a" /* DateTimeFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_3__utils_date_format__["a" /* DateFormatPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/administracao/administracao.module#AdministracaoPageModule', name: 'AdministracaoPage', segment: 'administracao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alterar-senha/alterar-senha.module#AlterarSenhaPageModule', name: 'AlterarSenhaPage', segment: 'alterar-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-categoria/cadastro-categoria.module#CadastroCategoriaPageModule', name: 'CadastroCategoriaPage', segment: 'cadastro-categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajuste-estoque/ajuste-estoque.module#AjusteEstoquePageModule', name: 'AjusteEstoquePage', segment: 'ajuste-estoque', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-entrada/cadastro-entrada.module#CadastroEntradaPageModule', name: 'CadastroEntradaPage', segment: 'cadastro-entrada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-fornecedor/cadastro-fornecedor.module#CadastroFornecedorPageModule', name: 'CadastroFornecedorPage', segment: 'cadastro-fornecedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-insumo/cadastro-insumo.module#CadastroInsumoPageModule', name: 'CadastroInsumoPage', segment: 'cadastro-insumo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-localizacao/cadastro-localizacao.module#CadastroLocalizacaoPageModule', name: 'CadastroLocalizacaoPage', segment: 'cadastro-localizacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-movimentacao/cadastro-movimentacao.module#CadastroMovimentacaoPageModule', name: 'CadastroMovimentacaoPage', segment: 'cadastro-movimentacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-unidade/cadastro-unidade.module#CadastroUnidadePageModule', name: 'CadastroUnidadePage', segment: 'cadastro-unidade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-saida/cadastro-saida.module#CadastroSaidaPageModule', name: 'CadastroSaidaPage', segment: 'cadastro-saida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categorias/categorias.module#CategoriasPageModule', name: 'CategoriasPage', segment: 'categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrada/entrada.module#EntradaPageModule', name: 'EntradaPage', segment: 'entrada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fornecedor/fornecedor.module#FornecedorPageModule', name: 'FornecedorPage', segment: 'fornecedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insumo/insumos.module#InsumoPageModule', name: 'InsumosPage', segment: 'insumos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/localizacao/localizacao.module#LocalizacaoPageModule', name: 'LocalizacaoPage', segment: 'localizacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/localizacao-insumos/localizacao-insumos.module#LocalizacaoInsumosPageModule', name: 'LocalizacaoInsumosPage', segment: 'localizacao-insumos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manual/manual.module#ManualPageModule', name: 'ManualPage', segment: 'manual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-quantidademinima/modal-quantidademinima.module#ModalQuantidademinimaPageModule', name: 'ModalQuantidademinimaPage', segment: 'modal-quantidademinima', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producao/producao.module#ProducaoPageModule', name: 'ProducaoPage', segment: 'producao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movimentacao-insumos/movimentacao-insumos.module#MovimentacaoInsumosPageModule', name: 'MovimentacaoInsumosPage', segment: 'movimentacao-insumos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produto/produto.module#ProdutoPageModule', name: 'ProdutoPage', segment: 'produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movimentacao/movimentacao.module#MovimentacaoPageModule', name: 'MovimentacaoPage', segment: 'movimentacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saida/saida.module#SaidaPageModule', name: 'SaidaPage', segment: 'saida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recupera-senha/recupera-senha.module#RecuperaSenhaPageModule', name: 'RecuperaSenhaPage', segment: 'recupera-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unidade/unidade.module#UnidadePageModule', name: 'UnidadePage', segment: 'unidade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic_selectable__["a" /* IonicSelectableModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_15__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_16_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_domain_categoria_service__["a" /* CategoriaService */],
                __WEBPACK_IMPORTED_MODULE_9__services_domain_fornecedor_service__["a" /* FornecedorService */],
                __WEBPACK_IMPORTED_MODULE_8__services_domain_unidade_service__["a" /* UnidadeService */],
                __WEBPACK_IMPORTED_MODULE_23__services_domain_localizacao_service__["a" /* LocalizacaoService */],
                __WEBPACK_IMPORTED_MODULE_7__services_domain_insumo_service__["a" /* InsumoService */],
                __WEBPACK_IMPORTED_MODULE_22__interceptors_auth_interceptor__["a" /* AuthInterceptorProvider */],
                __WEBPACK_IMPORTED_MODULE_20__interceptors_error_interceptor__["a" /* ErrorInterceptorProvider */],
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_10__services_domain_colaborador_service__["a" /* ColaboradorService */],
                __WEBPACK_IMPORTED_MODULE_6__services_domain_entrada_service__["a" /* EntradaService */],
                __WEBPACK_IMPORTED_MODULE_4__services_domain_movimentacao_service__["a" /* MovimentacaoService */],
                __WEBPACK_IMPORTED_MODULE_5__utils_date_time_format__["a" /* DateTimeFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_3__utils_date_format__["a" /* DateFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_1__services_domain_ajusteestoque_service__["a" /* AjusteEstoqueService */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_ngx__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_opener_ngx__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_0__utils_datenow__["a" /* DateNow */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contants__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DateFormatPipe = /** @class */ (function (_super) {
    __extends(DateFormatPipe, _super);
    function DateFormatPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatPipe.prototype.transform = function (value, args) {
        return _super.prototype.transform.call(this, value, __WEBPACK_IMPORTED_MODULE_0__contants__["a" /* Constants */].DATE_FMT);
    };
    DateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'dateFormat'
        })
    ], DateFormatPipe);
    return DateFormatPipe;
}(__WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]));

//# sourceMappingURL=date-format.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORAGE_KEYS; });
var STORAGE_KEYS = {
    localUser: "localUser"
};
//# sourceMappingURL=storage_keys.config.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_storage_keys_config__ = __webpack_require__(379);
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

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(350);
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
    function MyApp(platform, app, statusBar, splashScreen, auth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = 'HomePage';
        this.platform.ready().then(function () {
            _this.platform.registerBackButtonAction(function () {
                app.navPop();
            });
            _this.initializeApp();
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Dashboard', component: 'DashboardPage', img: 'assets/icon/desktop-outline.svg' },
            { title: 'Produção', component: 'ProducaoPage', img: 'assets/icon/flask-outline.svg' },
            { title: 'Insumos', component: 'InsumosPage', img: 'assets/icon/eyedrop-outline.svg' },
            { title: 'Produtos', component: 'ProdutoPage', img: 'assets/icon/medkit-outline.svg' },
            { title: 'Categorias', component: 'CategoriasPage', img: 'assets/icon/folder-outline.svg' },
            { title: 'Fornecedores', component: 'FornecedorPage', img: 'assets/icon/briefcase-outline.svg' },
            { title: 'Unidades de Medida', component: 'UnidadePage', img: 'assets/icon/beaker-outline.svg' },
            { title: 'Localizações', component: 'LocalizacaoPage', img: 'assets/icon/trail-sign-outline.svg' },
            { title: 'Movimentações', component: 'MovimentacaoPage', img: 'assets/icon/repeat-outline.svg' },
            { title: 'Entradas', component: 'EntradaPage', img: 'assets/icon/share-outline.svg' },
            { title: 'Saídas', component: 'SaidaPage', img: 'assets/icon/exit-outline.svg' },
            { title: 'Profile', component: 'ProfilePage', img: 'assets/icon/person-outline.svg' },
            { title: 'Manual', component: 'ManualPage', img: 'assets/icon/book-outline.svg' },
            { title: 'Administração', component: 'AdministracaoPage', img: 'assets/icon/build-outline.svg' },
            { title: 'Logout', component: '', img: 'assets/icon/log-out-outline.svg' },
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content >\n\n   \n\n    <ion-list no-lines>\n\n      <button menuClose="left" ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n\n\n\n        <div class="center-icons">\n\n          <img style="width: 25px; height: 25px;" [src]="p.img">&nbsp;&nbsp;<b>{{p.title}} </b> \n\n        </div>\n\n        \n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
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

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
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

},[366]);
//# sourceMappingURL=main.js.map