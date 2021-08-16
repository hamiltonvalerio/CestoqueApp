webpackJsonp([2],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroInsumoPageModule", function() { return CadastroInsumoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_selectable__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_insumo__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__ = __webpack_require__(892);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CadastroInsumoPageModule = /** @class */ (function () {
    function CadastroInsumoPageModule() {
    }
    CadastroInsumoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__cadastro_insumo__["a" /* CadastroInsumoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__cadastro_insumo__["a" /* CadastroInsumoPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_selectable__["b" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__["b" /* BrMaskerModule */]
            ],
        })
    ], CadastroInsumoPageModule);
    return CadastroInsumoPageModule;
}());

//# sourceMappingURL=cadastro-insumo.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__ = __webpack_require__(752);
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

/***/ 752:
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

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(903);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(904);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__directives__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonic3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskModel;
}());

var BrMaskerIonic3 = (function () {
    function BrMaskerIonic3(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.brmasker = new BrMaskModel();
    }
    BrMaskerIonic3.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.writeValue(value);
        event.target.value = value;
    };
    BrMaskerIonic3.prototype.inputOnblur = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.inputFocus = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonic3.prototype.writeValue = function (fn) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', fn);
    };
    BrMaskerIonic3.prototype.registerOnChange = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.registerOnTouched = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        else {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'false');
        }
    };
    BrMaskerIonic3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonic3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonic3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonic3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonic3.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var v = value;
            if (this.brmasker.type == 'alfa') {
                v = v.replace(/\d/gi, '');
            }
            if (this.brmasker.type == 'num') {
                v = v.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(v), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(v);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(v);
            }
            if (this.brmasker.person) {
                return this.peapollMask(v);
            }
            if (this.brmasker.percent) {
                return this.percentMask(v);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(v);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(v, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(v);
        }
        else {
            return '';
        }
    };
    BrMaskerIonic3.prototype.percentMask = function (v) {
        var tmp = v;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    BrMaskerIonic3.prototype.phoneMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.phoneNotDDDMask = function (v) {
        var n = v;
        if (n.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.peapollMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1/$2');
            n = n.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            n = n.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonic3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    };
    BrMaskerIonic3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
        return val;
    };
    BrMaskerIonic3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonic3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonic3;
}());

BrMaskerIonic3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[brmasker]',
                providers: [
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                        useExisting: BrMaskerIonic3,
                        multi: true
                    }
                ]
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
BrMaskerIonic3.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
BrMaskerIonic3.propDecorators = {
    'brmasker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'inputKeyup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup', ['$event'],] },],
    'inputOnblur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['ionBlur', ['$event'],] },],
    'inputFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['ionFocus', ['$event'],] },],
};
//# sourceMappingURL=brmasker-ionic-3.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskServicesModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonicServices3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var BrMaskServicesModel = (function () {
    function BrMaskServicesModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskServicesModel;
}());

var BrMaskerIonicServices3 = (function () {
    function BrMaskerIonicServices3() {
        this.brmasker = new BrMaskServicesModel();
    }
    BrMaskerIonicServices3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonicServices3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.numberAndTousand) {
            return this.writeValueNumberAndThousand(value);
        }
        if (value && config.userCaracters) {
            return this.writeValueusingSpecialCharacters(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonicServices3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonicServices3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonicServices3.prototype.writeValueNumberAndThousand = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.thousand(value);
    };
    BrMaskerIonicServices3.prototype.writeValueusingSpecialCharacters = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.usingSpecialCharacters(value, config.mask, config.len);
    };
    BrMaskerIonicServices3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
    };
    BrMaskerIonicServices3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        val = thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        return val;
    };
    BrMaskerIonicServices3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonicServices3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonicServices3;
}());

BrMaskerIonicServices3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[brmasker]',
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
BrMaskerIonicServices3.ctorParameters = function () { return []; };
//# sourceMappingURL=brmasker-ionic-services.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroInsumoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_orgao_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_domain_unidade_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_categoria_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_domain_insumo_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_brmasker_ionic_3__ = __webpack_require__(892);
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
 * Generated class for the CadastroInsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroInsumoPage = /** @class */ (function () {
    function CadastroInsumoPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, insumoService, categoriaService, loadingCtrl, brMaskerIonic3, unidadeService, orgaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.insumoService = insumoService;
        this.categoriaService = categoriaService;
        this.loadingCtrl = loadingCtrl;
        this.brMaskerIonic3 = brMaskerIonic3;
        this.unidadeService = unidadeService;
        this.orgaoService = orgaoService;
        this.categoriasInsumos = [];
        this.unidades = [];
        this.editarInsumo = false;
        this.precisairradiacao1 = false;
        this.precisacontrolequalidade1 = false;
        this.formGroup = this.formBuilder.group({
            id: ['', ''],
            nome: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            nomenclatura: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            valor: ['',],
            codigoalmox: ['',],
            observacao: ['',],
            essencial: [false,],
            controlado: [false,],
            datavalidade: [,],
            quantidade: [,],
            taxadeconsumo: [,],
            categorias: this.formControl,
            unidade: ['',],
            precisairradiacao: [false,],
            precisacontrolequalidade: [false,],
            orgaos: this.formControl,
        }, {});
    }
    CadastroInsumoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadCategorias();
        this.loadUnidades();
        this.loadOrgaos();
        this.liberaComboOrgao();
        this.itemId = this.navParams.get('itemId');
        if (this.itemId != null) {
            this.editarInsumo = true;
            this.insumoService.findInsumoById(this.itemId).subscribe(function (resp) {
                _this.updateInsumoDTO = resp;
                _this.formGroup = _this.formBuilder.group({
                    id: [_this.updateInsumoDTO.id, ''],
                    nome: [_this.updateInsumoDTO.nome, ''],
                    nomenclatura: [_this.updateInsumoDTO.nomenclatura, ''],
                    valor: [_this.updateInsumoDTO.valor, ''],
                    codigoalmox: [_this.updateInsumoDTO.codigoalmox,],
                    observacao: [_this.updateInsumoDTO.observacao, ''],
                    essencial: [_this.updateInsumoDTO.essencial, ''],
                    controlado: [_this.updateInsumoDTO.controlado, ''],
                    datavalidade: [_this.updateInsumoDTO.datavalidade,],
                    quantidade: [_this.updateInsumoDTO.quantidade, ''],
                    taxadeconsumo: [_this.updateInsumoDTO.taxadeconsumo,],
                    categorias: [_this.updateInsumoDTO.categorias,],
                    unidade: [_this.updateInsumoDTO.unidade,],
                    precisairradiacao: [_this.updateInsumoDTO.precisairradiacao, ''],
                    precisacontrolequalidade: [_this.updateInsumoDTO.precisacontrolequalidade, ''],
                    orgaos: [_this.updateInsumoDTO.orgaos,],
                }, {});
            });
        }
    };
    CadastroInsumoPage.prototype.insereunidadeEntradaDTO = function (event) {
        this.unidade = event.value;
    };
    CadastroInsumoPage.prototype.loadCategorias = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.categoriaService.findAll().subscribe(function (response) {
            _this.categoriasInsumos = response.sort();
            loader.dismiss();
        });
    };
    CadastroInsumoPage.prototype.loadUnidades = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.unidadeService.findAll().subscribe(function (response) {
            _this.unidades = response.sort();
            loader.dismiss();
        });
    };
    CadastroInsumoPage.prototype.loadOrgaos = function () {
        var _this = this;
        this.orgaoService.findAll()
            .subscribe(function (response) {
            _this.orgaos = response.sort();
        });
    };
    CadastroInsumoPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    CadastroInsumoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CadastroInsumoPage.prototype.cadastrarInsumo = function () {
        var _this = this;
        var ins = this.formGroup.value;
        if (ins.id === null || ins.id === '') {
            this.insumoService.insert(this.formGroup.value).subscribe(function (response) {
                _this.showInserOk();
            }, function (error) { });
        }
        else {
            console.log(ins);
            this.insumoService.update(ins).subscribe(function (response) {
                _this.showUpdateOk();
            }, function (error) { });
        }
    };
    CadastroInsumoPage.prototype.showInserOk = function () {
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
    CadastroInsumoPage.prototype.showUpdateOk = function () {
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
    CadastroInsumoPage.prototype.imprimeItem = function (event) {
        //this.citemInsumo = event.value;
    };
    CadastroInsumoPage.prototype.liberaComboOrgao = function () {
    };
    CadastroInsumoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-cadastro-insumo',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\cadastro-insumo\cadastro-insumo.html"*/'<!--\n\n  Generated template for the CadastroInsumoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Cadastro de Insumo\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()" >\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <form [formGroup]="formGroup" (ngSubmit)="cadastrarInsumo()">\n\n     <ion-item>\n\n      <ion-label stacked>Nome*</ion-label>\n\n      <ion-input formControlName="nome" type="text"></ion-input>\n\n      <ion-input formControlName="id" type="hidden"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.nome.dirty && formGroup.controls.nome.errors" margin-left >Valor inválido</p>\n\n    <ion-item>\n\n      <ion-label stacked>Nomenclatura*</ion-label>\n\n      <ion-input formControlName="nomenclatura" type="text"></ion-input>\n\n    </ion-item>\n\n    <p class="danger" *ngIf="formGroup.controls.nomenclatura.dirty && formGroup.controls.nomenclatura.errors" margin-left >Valor inválido</p>\n\n    \n\n    \n\n    <ion-item>\n\n      <ion-label>Categorias</ion-label>\n\n      <ionic-selectable \n\n        item-content \n\n        [items]="categoriasInsumos"\n\n        itemValueField="id"\n\n        itemTextField="nome"\n\n        formControlName="categorias"\n\n        [hasInfiniteScroll]="true"\n\n        [canSearch]="true"\n\n        [focusSearchbar]="true"\n\n        (onChange)="imprimeItem($event)"\n\n        [isMultiple]="true"\n\n        [canClear]="true"\n\n        [placeholder]="\'Selecione a categoria\'">\n\n  \n\n        <ng-template ionicSelectableItemTemplate let-item="item">\n\n         \n\n          <ion-item>\n\n            <ion-label text-wrap class="label_12_b">\n\n              {{item.nome}} \n\n            </ion-label>\n\n          </ion-item>\n\n        </ng-template>\n\n  \n\n      </ionic-selectable>\n\n    </ion-item>\n\n    \n\n    \n\n    \n\n    \n\n    <ion-item>\n\n      <ion-label stacked>Valor</ion-label>\n\n      <ion-input disabled type="number" formControlName="valor"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Código Almoxarifado</ion-label>\n\n      <ion-input formControlName="codigoalmox" type="number" [readonly]="editarInsumo"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Observação</ion-label>\n\n      <ion-textarea formControlName="observacao" type="text"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Essencial?</ion-label>\n\n      <ion-toggle formControlName="essencial" ></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Controlado?</ion-label>\n\n      <ion-toggle formControlName="controlado"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked >Órgão/Entidade Controlador</ion-label>\n\n      <ionic-selectable \n\n        item-content \n\n        [items]="orgaos"\n\n        itemValueField="id"\n\n        itemTextField="nome"\n\n        formControlName="orgaos"\n\n        [hasInfiniteScroll]="true"\n\n        [canSearch]="true"\n\n        [focusSearchbar]="true"\n\n        (onChange)="imprimeItem($event)"\n\n        [isMultiple]="true"\n\n        [canClear]="true">\n\n  \n\n        <ng-template ionicSelectableItemTemplate let-item="item">\n\n         \n\n          <ion-item>\n\n            <ion-label text-wrap class="label_12_b">\n\n              {{item.nome}} \n\n            </ion-label>\n\n          </ion-item>\n\n        </ng-template>\n\n  \n\n      </ionic-selectable>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Data de Validade</ion-label>\n\n      <ion-datetime disabled formControlName="datavalidade" ></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Quantidade</ion-label>\n\n      <ion-input disabled formControlName="quantidade" type="number"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Unidade de Entrada</ion-label>\n\n      <ionic-selectable \n\n        item-content \n\n        [items]="unidades"\n\n        formControlName="unidade"\n\n        itemValueField="id"\n\n        itemTextField="nome"\n\n        [canSearch]="true"\n\n        [focusSearchbar]="true"\n\n        (onChange)="insereunidadeEntradaDTO($event)">\n\n  \n\n        <ng-template ionicSelectableItemTemplate let-port="item">\n\n         \n\n          <ion-item>\n\n            <ion-label text-wrap class="label_12_b">\n\n              {{port.nome}} \n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label class="label_14">\n\n              Sigla: {{port.sigla}}\n\n            </ion-label>\n\n          </ion-item>\n\n  \n\n        </ng-template>\n\n  \n\n      </ionic-selectable>\n\n    </ion-item>\n\n\n\n    <ion-list radio-group\n\n    [formControl]="formGroup.controls.precisairradiacao" >\n\n    <ion-list-header>\n\n      Precisa de Irradiação?\n\n    </ion-list-header>\n\n      <ion-item>\n\n        <ion-label>Sim</ion-label>\n\n        <ion-radio value="true"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Não</ion-label>\n\n        <ion-radio value="false"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list radio-group \n\n    [formControl]="formGroup.controls.precisacontrolequalidade">\n\n    <ion-list-header>\n\n      Precisa de Controle da Qualidade?\n\n    </ion-list-header>\n\n      <ion-item>\n\n        <ion-label>Sim</ion-label>\n\n        <ion-radio value="true"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Não</ion-label>\n\n        <ion-radio value="false"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Taxa de Consumo</ion-label>\n\n      <ion-input formControlName="taxadeconsumo" type="number"></ion-input>\n\n    </ion-item>\n\n    \n\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Registrar</button>\n\n </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\cadastro-insumo\cadastro-insumo.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7_brmasker_ionic_3__["a" /* BrMaskerIonic3 */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_categoria_service__["a" /* CategoriaService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
            __WEBPACK_IMPORTED_MODULE_1__services_domain_unidade_service__["a" /* UnidadeService */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_orgao_service__["a" /* OrgaoService */]])
    ], CadastroInsumoPage);
    return CadastroInsumoPage;
}());

//# sourceMappingURL=cadastro-insumo.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(894);




var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
                ],
                schemas: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(893);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(894);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=2.js.map