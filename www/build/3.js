webpackJsonp([3],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsumoPageModule", function() { return InsumoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insumos__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(875);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InsumoPageModule = /** @class */ (function () {
    function InsumoPageModule() {
    }
    InsumoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__insumos__["a" /* InsumosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__insumos__["a" /* InsumosPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */].forRoot(),
            ],
        })
    ], InsumoPageModule);
    return InsumoPageModule;
}());

//# sourceMappingURL=insumos.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);


var TooltipBox = (function () {
    function TooltipBox(elementRef, rnd) {
        var _this = this;
        this.elementRef = elementRef;
        this.rnd = rnd;
        this.fadeState = 'invisible';
        this.init = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
    }
    Object.defineProperty(TooltipBox.prototype, "arrow", {
        set: function (side) {
            this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posTop", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posLeft", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    TooltipBox.prototype.getNativeElement = function () {
        return this.elementRef.nativeElement;
    };
    TooltipBox.prototype.ngAfterViewInit = function () {
        this.initResolve();
    };
    TooltipBox.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    selector: 'tooltip-box',
                    template: "\n    <div *ngIf=\"tooltipHtml; else txt\" [innerHTML]=\"tooltipHtml\"></div>\n    <ng-template #txt>{{ text }}</ng-template>\n  ",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms linear')),
                        ]),
                    ],
                    styles: [
                        "\n          :host {\n              background-color: rgba(0, 0, 0, 0.8);\n              color: white;\n              display: inline-block;\n              position: fixed;\n              padding: 15px 25px;\n              font-size: 15px;\n          }\n    ",
                        "\n          :host.has-arrow:before {\n              content: '';\n              border: 5px solid transparent;\n              position: absolute;\n              width: 0;\n              height: 0;\n          }\n    ",
                        ':host.has-arrow.arrow-top:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }',
                        ':host.has-arrow.arrow-left:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }',
                        ':host.has-arrow.arrow-right:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }',
                        ':host.has-arrow.arrow-bottom:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }',
                    ],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    TooltipBox.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
    ]; };
    TooltipBox.propDecorators = {
        "fadeState": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"], args: ['@fade',] },],
        "text": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "posTop": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
        "posLeft": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    };
    return TooltipBox;
}());

//# sourceMappingURL=tooltip-box.component.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var TooltipController = (function () {
    function TooltipController() {
        this.allowMultiple = true;
        this.activeTooltips = [];
    }
    TooltipController.prototype.addTooltip = function (instance) {
        if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
            this.hideAll();
        }
        this.activeTooltips.push(instance);
    };
    TooltipController.prototype.removeTooltip = function (instance) {
        this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
    };
    TooltipController.prototype.hideAll = function () {
        this.activeTooltips.forEach(function (tooltip) {
            tooltip.removeTooltip();
        });
    };
    TooltipController.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    return TooltipController;
}());

//# sourceMappingURL=tooltip.cotroller.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(735);




var Tooltip = (function () {
    function Tooltip(el, appRef, platform, _componentFactoryResolver, tooltipCtrl) {
        this.el = el;
        this.appRef = appRef;
        this.platform = platform;
        this._componentFactoryResolver = _componentFactoryResolver;
        this.tooltipCtrl = tooltipCtrl;
        this.mobileEvent = 'press';
        this.desktopEvent = 'hover';
        this.duration = 3000;
        this._arrow = false;
        this._navTooltip = false;
        this._canShow = true;
        this._active = false;
    }
    Object.defineProperty(Tooltip.prototype, "navTooltip", {
        get: function () {
            return this._navTooltip;
        },
        set: function (val) {
            this._navTooltip = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "arrow", {
        get: function () {
            return this._arrow;
        },
        set: function (val) {
            this._arrow = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            this._active = typeof val !== 'boolean' || val !== false;
            this._active ? this.canShow && this.showTooltip() : this.removeTooltip();
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.ngAfterViewInit = function () {
        // Show the tooltip immediately after initiating view if set to
        if (this._active) {
            this.trigger();
        }
    };
    Tooltip.prototype.ngOnInit = function () {
        // Set default event type by platform if event is not defined
        if (!this.event) {
            this.event = this.platform.is('mobile') ? this.mobileEvent : this.desktopEvent;
        }
    };
    Object.defineProperty(Tooltip.prototype, "canShow", {
        /**
         * @return {boolean} TRUE if the tooltip can be shown
         */
        get: /**
           * @return {boolean} TRUE if the tooltip can be shown
           */
        function () {
            return this._canShow && ((typeof this.tooltip === 'string' && this.tooltip !== '') || (typeof this.tooltipHtml === 'string' && this.tooltipHtml !== ''));
        },
        /**
         * Set the canShow property
         * Ensure that tooltip is shown only if the tooltip string is not falsey
         */
        set: /**
           * Set the canShow property
           * Ensure that tooltip is shown only if the tooltip string is not falsey
           */
        function (show) {
            this._canShow = show;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     */
    /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    Tooltip.prototype.trigger = /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    function () {
        if (!this.canShow) {
            return;
        }
        if (this.tooltipElement) {
            this._resetTimer();
        }
        else {
            this.showTooltip();
        }
    };
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     */
    /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    Tooltip.prototype.showTooltip = /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    function () {
        var _this = this;
        this._createTooltipComponent();
        var tooltipComponent = this.tooltipElement.instance;
        tooltipComponent.text = this.tooltip;
        tooltipComponent.tooltipHtml = this.tooltipHtml;
        tooltipComponent.init.then(function () {
            var tooltipPosition = _this._getTooltipPosition();
            tooltipComponent.posLeft = tooltipPosition.left;
            tooltipComponent.posTop = tooltipPosition.top;
            tooltipComponent.fadeState = 'visible';
            if (_this.arrow) {
                var arrowPosition = void 0;
                if (_this.positionV === 'top') {
                    arrowPosition = 'bottom';
                }
                else if (_this.positionV === 'bottom') {
                    arrowPosition = 'top';
                }
                else if (_this.positionH === 'left') {
                    arrowPosition = 'right';
                }
                else {
                    arrowPosition = 'left';
                }
                tooltipComponent.arrow = arrowPosition;
            }
            if (!_this._active) {
                _this.tooltipTimeout = setTimeout(_this.removeTooltip.bind(_this), _this.duration);
            }
        });
    };
    Tooltip.prototype.onClick = function () {
        if (this.event === 'click') {
            this.trigger();
        }
    };
    Tooltip.prototype.onPress = function () {
        if (this.event === 'press') {
            this.trigger();
        }
    };
    Tooltip.prototype.onMouseEnter = function () {
        if (this.event === 'hover') {
            this.active = true;
        }
    };
    Tooltip.prototype.onMouseLeave = function () {
        if (this.event === 'hover') {
            this.active = false;
        }
    };
    Tooltip.prototype._createTooltipComponent = function () {
        var viewport = this.appRef.components[0]._component
            ._viewport, componentFactory = this._componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__["a" /* TooltipBox */]);
        this.tooltipElement = viewport.createComponent(componentFactory);
        this.tooltipCtrl.addTooltip(this);
    };
    Tooltip.prototype._getTooltipPosition = function () {
        var tooltipNativeElement = this.tooltipElement.instance.getNativeElement(), el = this.el.nativeElement, rect = el.getBoundingClientRect();
        var positionLeft, positionTop, spacing = 10;
        if (this.navTooltip) {
            this.positionV = 'bottom';
            this.arrow = false;
            spacing = 20;
        }
        if (this.positionH === 'right') {
            positionLeft = rect.right + spacing;
        }
        else if (this.positionH === 'left') {
            positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth;
        }
        else if (this.navTooltip) {
            positionLeft = rect.left + el.offsetWidth / 2;
        }
        else {
            positionLeft = rect.left;
        }
        if (this.positionV === 'top') {
            positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
        }
        else if (this.positionV === 'bottom') {
            positionTop = rect.bottom + spacing;
        }
        else {
            positionTop =
                rect.top + el.offsetHeight / 2 - tooltipNativeElement.offsetHeight / 2;
        }
        if (+this.topOffset) {
            positionTop += +this.topOffset;
        }
        if (+this.leftOffset) {
            positionLeft += +this.leftOffset;
        }
        if (positionLeft + tooltipNativeElement.offsetWidth + spacing >
            this.platform.width()) {
            positionLeft =
                this.platform.width() - tooltipNativeElement.offsetWidth - spacing;
        }
        else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
            positionLeft = spacing;
        }
        if (positionTop + tooltipNativeElement.offsetHeight + spacing > this.platform.height()) {
            positionTop = this.platform.height() - tooltipNativeElement.offsetHeight - spacing;
        }
        else if (positionTop + tooltipNativeElement.offsetHeight - spacing < 0) {
            positionTop = spacing;
        }
        return {
            left: positionLeft,
            top: positionTop,
        };
    };
    Tooltip.prototype.removeTooltip = function () {
        var _this = this;
        if (!this.tooltipElement) {
            this.tooltipElement = undefined;
            this.tooltipTimeout = undefined;
            return;
        }
        this.tooltipElement.instance.fadeState = 'invisible';
        this.canShow = false;
        // wait for animation to finish then clear everything out
        setTimeout(function () {
            if (_this.tooltipElement &&
                typeof _this.tooltipElement.destroy === 'function') {
                _this.tooltipElement.destroy();
            }
            _this.tooltipCtrl.removeTooltip(_this);
            _this.tooltipElement = _this.tooltipTimeout = undefined;
            _this.canShow = true;
        }, 300);
    };
    Tooltip.prototype._resetTimer = function () {
        var _this = this;
        clearTimeout(this.tooltipTimeout);
        this.tooltipTimeout = setTimeout(function () {
            _this.active = false;
        }, this.duration);
    };
    Tooltip.prototype.ngOnDestroy = function () {
        // if the timer hasn't expired or active is true when the component gets destroyed, the tooltip will remain in the DOM
        // this removes it
        this.removeTooltip();
    };
    Tooltip.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[tooltip]',
                },] },
    ];
    /** @nocollapse */
    Tooltip.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__["a" /* TooltipController */], },
    ]; };
    Tooltip.propDecorators = {
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "tooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "positionV": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "positionH": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "mobileEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "desktopEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "topOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "leftOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "hideOthers": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "navTooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "duration": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "active": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
        "onPress": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['press',] },],
        "onMouseEnter": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
        "onMouseLeave": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
    };
    return Tooltip;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_box_component__ = __webpack_require__(734);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__(871);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltips_module__ = __webpack_require__(876);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__tooltips_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(735);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_directive__ = __webpack_require__(871);





var TooltipsModule = (function () {
    function TooltipsModule() {
    }
    TooltipsModule.forRoot = function () {
        return {
            ngModule: TooltipsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__["a" /* TooltipController */]]
        };
    };
    TooltipsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */], __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */]]
                },] },
    ];
    return TooltipsModule;
}());

//# sourceMappingURL=tooltips.module.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsumosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
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
 * Generated class for the InsumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InsumosPage = /** @class */ (function () {
    function InsumosPage(navCtrl, navParams, insumoService, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.insumoService = insumoService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.itensInsumos = [];
        this.page = 0;
    }
    InsumosPage.prototype.ionViewDidLoad = function () {
        this.getItens();
    };
    InsumosPage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CadastroInsumoPage', { cssClass: 'select-modal' });
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    InsumosPage.prototype.openModalAjuste = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AjusteEstoquePage', { cssClass: 'select-modal' });
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    /*getItens(){
      this.insumoService.findAll()
      .subscribe(response => {
        this.itensInsumos = new ConverteListaIonItemDivider().retornaArrayGroup(response.sort());
      },
      error => {})
    }*/
    InsumosPage.prototype.searchInsumo = function (event) {
        var text = event.srcElement.value;
        if (!text) {
            this.getItens();
        }
        this.itensInsumos = this.filterPorts(this.itensInsumos, text);
        console.log("aqui: " + this.itensInsumos);
    };
    InsumosPage.prototype.filterPorts = function (ports, text) {
        return ports.filter(function (port) {
            return port.nomecodalmox.toLowerCase().indexOf(text) !== -1;
        });
    };
    InsumosPage.prototype.getItens = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.itensInsumos = [];
        this.insumoService.findTotosPaginado(this.page, 30)
            .subscribe(function (response) {
            var start = _this.itensInsumos.length;
            _this.itensInsumos = _this.itensInsumos.concat(response['content']);
            var end = _this.itensInsumos.length - 1;
            //console.log( this.itensInsumos);
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    InsumosPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({ content: "Aguarde..." });
        loader.present();
        return loader;
    };
    InsumosPage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.itensInsumos = [];
        this.getItens();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    InsumosPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.getItens();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    InsumosPage.prototype.excluirItem = function (itemId) {
        this.getItens();
    };
    InsumosPage.prototype.editarItem = function (itemId) {
        var _this = this;
        var modal = this.modalCtrl.create('CadastroInsumoPage', { itemId: itemId });
        modal.onDidDismiss(function () {
            _this.getItens();
        });
        modal.present();
    };
    InsumosPage.prototype.openPdf = function () {
        this.insumoService.relatorioInsumos().subscribe(function (response) {
            var file = new Blob([response], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        });
    };
    InsumosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-insumos',template:/*ion-inline-start:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\insumo\insumos.html"*/'<!--\n\n  Generated template for the InsumoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Insumos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="openPdf()" >\n\n        <span ion-text color="primary" showWhen="ios">Pdf</span>\n\n        <ion-icon name="md-document"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModalAjuste()">\n\n        <ion-icon name="hammer"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n      <ion-icon name="add-circle" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-searchbar showcancelbutton="" (ionInput)="searchInsumo($event)"></ion-searchbar>\n\n    <ion-row *ngFor="let item of itensInsumos">\n\n      <ion-col>\n\n        <h6>Cód: {{item.codigoalmox}}</h6>\n\n        <h3>{{item.nome}}</h3>\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <ion-icon name="create" (click)="editarItem(item.id)" title="Editar Insumo" positionV="bottom"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <ion-icon name="close-circle" (click)="excluirItem(item.id)" title="Excluir Insumo" positionV="bottom"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\DesenvolvimentoApp\CestoqueApp\src\pages\insumo\insumos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_domain_insumo_service__["a" /* InsumoService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
    ], InsumosPage);
    return InsumosPage;
}());

//# sourceMappingURL=insumos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map