webpackJsonp([8],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalQuantidademinimaPageModule", function() { return ModalQuantidademinimaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_quantidademinima__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalQuantidademinimaPageModule = /** @class */ (function () {
    function ModalQuantidademinimaPageModule() {
    }
    ModalQuantidademinimaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__modal_quantidademinima__["a" /* ModalQuantidademinimaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__modal_quantidademinima__["a" /* ModalQuantidademinimaPage */]),
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], ModalQuantidademinimaPageModule);
    return ModalQuantidademinimaPageModule;
}());

//# sourceMappingURL=modal-quantidademinima.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__ = __webpack_require__(724);
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

/***/ 724:
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

/***/ })

});
//# sourceMappingURL=8.js.map