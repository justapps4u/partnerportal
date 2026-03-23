(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js ***!
  \***************************************************************************/
/*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ButtonRadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RADIO_CONTROL_VALUE_ACCESSOR$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return ButtonCheckboxDirective; })),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    // view -> model
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = 
    // view -> model
    /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        btnCheckboxFalse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return ButtonCheckboxDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return ButtonRadioDirective; })),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        /** Current value of radio component or group */
        get: /**
         * Current value of radio component or group
         * @return {?}
         */
        function () {
            return this.group ? this.group.value : this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        /** If `true` — radio button is disabled */
        get: /**
         * If `true` — radio button is disabled
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype._onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: ButtonRadioGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ButtonRadioDirective.propDecorators = {
        btnRadio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        uncheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return ButtonRadioDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return ButtonRadioGroupDirective; })),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = /** @class */ (function () {
    function ButtonRadioGroupDirective(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (this.radioButtons) {
            this.radioButtons.forEach((/**
             * @param {?} buttons
             * @return {?}
             */
            function (buttons) {
                buttons.setDisabledState(disabled);
            }));
        }
    };
    ButtonRadioGroupDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ButtonRadioGroupDirective.propDecorators = {
        radioButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return ButtonRadioDirective; })),] }]
    };
    return ButtonRadioGroupDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                },] }
    ];
    return ButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-bootstrap-buttons.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"animated fadeIn\" appAutoLogout>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-body pb-0\">\r\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\r\n            <i class=\"icon-location-pin\"></i>\r\n          </button>\r\n          <div class=\"text-value\">9.823</div>\r\n          <div>Members online</div>\r\n        </div>\r\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart2Data\"\r\n          [labels]=\"lineChart2Labels\"\r\n          [options]=\"lineChart2Options\"\r\n          [colors]=\"lineChart2Colours\"\r\n          [legend]=\"lineChart2Legend\"\r\n          [chartType]=\"lineChart2Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-value\">9.823</div>\r\n          <div>Members online</div>\r\n        </div>\r\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n                  [datasets]=\"lineChart1Data\"\r\n                  [labels]=\"lineChart1Labels\"\r\n                  [options]=\"lineChart1Options\"\r\n                  [colors]=\"lineChart1Colours\"\r\n                  [legend]=\"lineChart1Legend\"\r\n                  [chartType]=\"lineChart1Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-value\">9.823</div>\r\n          <div>Members online</div>\r\n        </div>\r\n        <div class=\"chart-wrapper mt-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart3Data\"\r\n          [labels]=\"lineChart3Labels\"\r\n          [options]=\"lineChart3Options\"\r\n          [colors]=\"lineChart3Colours\"\r\n          [legend]=\"lineChart3Legend\"\r\n          [chartType]=\"lineChart3Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-body pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-value\">9.823</div>\r\n          <div>Members online</div>\r\n        </div>\r\n        <div class=\"chart-wrapper mt-3 mx-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"barChart1Data\"\r\n          [labels]=\"barChart1Labels\"\r\n          [options]=\"barChart1Options\"\r\n          [colors]=\"barChart1Colours\"\r\n          [legend]=\"barChart1Legend\"\r\n          [chartType]=\"barChart1Type\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"empty-image\">\r\n</div>-->\r\n<div class =\"banner\">\r\n  <h4 style=\"color: aliceblue;\">&nbsp;Important Announcement,</h4>\r\n  <h5 style=\"color: white;\">&nbsp;&nbsp;Providing timely status on all leads is necessary to continue getting new leads and support from company end</h5>\r\n</div>\r\n<div class =\"bannerpurple\">\r\n  <h5 style=\"color: white;\">&nbsp;&nbsp;We are facing technical issue with our sales number. <a href=\"https://web.whatsapp.com/send?phone=+91{{sales_number}}\" target=\"_blank\" class=\"chatlink\">Please click here to chat with us on WhatsApp</a>.</h5>\r\n</div>\r\n\r\n<div class=\"page-layout animated fadeIn\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 mt-3 mb-2\">\r\n        <h4>{{greeting}}, {{uname | titlecase}}</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 col-12\">\r\n      <table style=\"margin-bottom: 5px; height: 100%;\">\r\n        <thead>\r\n          <tr>\r\n            <th>Important Links</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th> <a href=\"mailto:sales@bookkeeperapp.net\" > Mail us</a></th>\r\n          </tr>\r\n          <tr>\r\n            <th> <a href=\"https://web.whatsapp.com/send?phone=+91{{sales_number}}\" target=\"_blank\">Chat with us</a></th>\r\n          </tr>\r\n          <tr>\r\n            <th> <a href=\"https://bookkeeperapp.net\" target=\"_blank\"> Website</a></th>\r\n          </tr>\r\n          <tr>\r\n            <th> <a href=\"https://bookkeeperapp.net/book-keeper-in-the-headlines\" target=\"_blank\">Book Keeper In The Headlines</a></th>\r\n          </tr>\r\n          <tr>\r\n            <th> <a href=\"https://drive.google.com/drive/folders/1ELDEBnlXCL_GWjEgxq0zUZ2ChTJc0lsQ?usp=drive_link\" target=\"_blank\">Dropbox link for EPS files of all marketing material</a></th>\r\n          </tr>\r\n          <tr>\r\n            <th> <a href=\"https://www.youtube.com/user/BookKeeperApp\" target=\"_blank\">YouTube Channel</a></th>\r\n          </tr>\r\n          <tr>\r\n            <th> <a href=\"https://bookkeeperapp.freshdesk.com/support/solutions/1060000035453\" target=\"_blank\">FAQ Page</a></th>\r\n          </tr>\r\n          <tr>\r\n            <th> <a href=\"https://bookkeeperapp.net/whats-new-in-book-keeper-windows\" target=\"_blank\">What's New in Book Keeper Windows</a></th>\r\n          </tr>\r\n          <tr>\r\n            <th> <a href=\"https://bookkeeperapp.net/bookkeeper-vs-tally-vs-busy-vs-quickbooks\" target=\"_blank\">Vyapar vs Tally vs Busy vs Marg vs myBillBook vs Book Keeper</a></th>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-md-7 col-12\">\r\n      <table style=\"height: 100%;\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"3\">Important Email Ids</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td colspan=\"1\">Sales</td>\r\n            <td colspan=\"2\"><a href=\"mailto:sales@bookkeeperapp.net\">&nbsp;sales@bookkeeperapp.net</a>&nbsp;&nbsp;Ph:+91 {{sales_number}}</td>\r\n          </tr>     \r\n          <tr>\r\n            <td colspan=\"1\">Senior Sales Executive</td>\r\n            <td colspan=\"2\"><a href=\"mailto:madhur@bookkeeperapp.net\">&nbsp;madhur@bookkeeperapp.net</a>&nbsp;&nbsp;Ph:+91 7011283549</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"1\">Senior Sales Executive</td>\r\n            <td colspan=\"2\"><a href=\"mailto:anshul@bookkeeperapp.net\">&nbsp;anshul@bookkeeperapp.net</a>&nbsp;&nbsp;Ph:+91 9001485599</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"1\">International Sales</td>\r\n            <td colspan=\"2\"><a href=\"mailto:mohit.sehgal@bookkeeperapp.net\">&nbsp;mohit.sehgal@bookkeeperapp.net</a>&nbsp;&nbsp;Ph:+91 8882903003</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"1\">Sales Head</td>\r\n            <td colspan=\"2\"><a href=\"mailto:vaibhav@bookkeeperapp.net\">&nbsp;vaibhav@bookkeeperapp.net</a>&nbsp;&nbsp;Ph:+91 9582593577</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"page-layout animated fadeIn\">\r\n  <div *ngIf=\"(left_data || right_data)\" class=\"col-12\">\r\n    <div class=\"row\">\r\n      <div *ngIf=\"(left_data && (left_data.length > 0))\" class=\"col-sm-6 col-12 mb-3\">\r\n        <div class=\"headingdata mb-2\">Lead Status</div>\r\n        <p-table [columns]=\"leftcolumns\" [value]=\"left_data\">\r\n          <ng-template pTemplate=\"header\" let-leftcolumns>\r\n            <tr>\r\n              <th *ngFor=\"let col of leftcolumns\" [pSortableColumn]=\"col.field\" [style.text-align]=\"col.align\">\r\n                {{ col.header }}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-left_data>\r\n            <tr>\r\n              <td>{{ left_data.status }}</td>\r\n              <td style=\"text-align: right;\">{{ left_data.records }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n      <div *ngIf=\"(left_data && (left_data.length > 0) && right_data && (right_data.length > 0))\" class=\"col-sm-1 shrinkgap\"></div>\r\n      <div *ngIf=\"(right_data && (right_data.length > 0))\" class=\"col-sm-5 col-12\">\r\n        <div class=\"headingdata mb-2\">About to Expire</div>\r\n        <p-table [columns]=\"rightcolumns\" [value]=\"right_data\">\r\n          <ng-template pTemplate=\"header\" let-rightcolumns>\r\n            <tr>\r\n              <th *ngFor=\"let col of rightcolumns\" [pSortableColumn]=\"col.field\">\r\n                {{ col.header }}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-right_data>\r\n            <tr>\r\n              <td>{{ right_data.username }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"nav\" *ngIf=\"isLoading\">\r\n  <app-spinner [toShow]=\"isLoading\"></app-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingdata {\n  text-align: center;\n  font-size: medium;\n  font-weight: bold;\n}\n\ntable {\n  table-layout: fixed;\n  width: 100%;\n  font-size: 15px;\n}\n\nth, td {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #BCBCBC;\n  word-wrap: break-word;\n}\n\n.col-lg-6 {\n  max-width: 80%;\n}\n\n.banner {\n  width: 100%;\n  background-color: #0176ba;\n}\n\n.bannerpurple {\n  width: 100%;\n  background-color: purple;\n}\n\n.chatlink {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL0Q6XFxBcnVuXFxXT1JLSU5HXFxDVVJSRU5UX1dPUktJTkdcXGNtcy9zcmNcXGFwcFxcdmlld3NcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRUo7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENFO0VBQ0UsY0FBQTtBQ0VKOztBREFFO0VBRUUsV0FBQTtFQUVBLHlCQUFBO0FDQ0o7O0FEQ0U7RUFFRSxXQUFBO0VBRUEsd0JBQUE7QUNBSjs7QURFRTtFQUNFLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ2RhdGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogI0JDQkNCQztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgLmNvbC1sZy02e1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5iYW5uZXJ7XHJcbiAgICAvL29iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2hlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxNzZiYTtcclxuICB9XHJcbiAgLmJhbm5lcnB1cnBsZXtcclxuICAgIC8vb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpwdXJwbGU7XHJcbiAgfVxyXG4gIC5jaGF0bGlua3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiBcclxuICAiLCIuaGVhZGluZ2RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG50aCwgdGQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjQkNCQ0JDO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jb2wtbGctNiB7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG4uYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTc2YmE7XG59XG5cbi5iYW5uZXJwdXJwbGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufVxuXG4uY2hhdGxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/views/dashboard/dashboard.service.ts");
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification/notification.service */ "./src/app/views/services/notification/notification.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/views/services/authentication/authentication.service.ts");




/*import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';*/


var DashboardComponent = /** @class */ (function () {
    /*radioModel: string = 'Month';
  
    // lineChart1
    public lineChart1Data: Array<any> = [
      {
        data: [65, 59, 84, 84, 51, 55, 40],
        label: 'Series A'
      }
    ];
    public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChart1Options: any = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          }
  
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: 40 - 5,
            max: 84 + 5,
          }
        }],
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
      legend: {
        display: false
      }
    };
    public lineChart1Colours: Array<any> = [
      {
        backgroundColor: getStyle('--primary'),
        borderColor: 'rgba(255,255,255,.55)'
      }
    ];
    public lineChart1Legend = false;
    public lineChart1Type = 'line';
  
    // lineChart2
    public lineChart2Data: Array<any> = [
      {
        data: [1, 18, 9, 17, 34, 22, 11],
        label: 'Series A'
      }
    ];
    public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChart2Options: any = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          }
  
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: 1 - 5,
            max: 34 + 5,
          }
        }],
      },
      elements: {
        line: {
          tension: 0.00001,
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
      legend: {
        display: false
      }
    };
    public lineChart2Colours: Array<any> = [
      { // grey
        backgroundColor: getStyle('--info'),
        borderColor: 'rgba(255,255,255,.55)'
      }
    ];
    public lineChart2Legend = false;
    public lineChart2Type = 'line';
  
  
    // lineChart3
    public lineChart3Data: Array<any> = [
      {
        data: [78, 81, 80, 45, 34, 12, 40],
        label: 'Series A'
      }
    ];
    public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChart3Options: any = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
      legend: {
        display: false
      }
    };
    public lineChart3Colours: Array<any> = [
      {
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
      }
    ];
    public lineChart3Legend = false;
    public lineChart3Type = 'line';
  
  
    // barChart1
    public barChart1Data: Array<any> = [
      {
        data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
        label: 'Series A'
      }
    ];
    public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
    public barChart1Options: any = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 0.6,
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      }
    };
    public barChart1Colours: Array<any> = [
      {
        backgroundColor: 'rgba(255,255,255,.3)',
        borderWidth: 0
      }
    ];
    public barChart1Legend = false;
    public barChart1Type = 'bar';
  
    // mainChart
  
    public mainChartElements = 27;
    public mainChartData1: Array<number> = [];
    public mainChartData2: Array<number> = [];
    public mainChartData3: Array<number> = [];
  
    public mainChartData: Array<any> = [
      {
        data: this.mainChartData1,
        label: 'Current'
      },
      {
        data: this.mainChartData2,
        label: 'Previous'
      },
      {
        data: this.mainChartData3,
        label: 'BEP'
      }
    ];*/
    /* tslint:disable:max-line-length */
    //public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    /* tslint:enable:max-line-length */
    /*public mainChartOptions: any = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function(tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: function(value: any) {
              return value.charAt(0);
            }
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        }
      },
      legend: {
        display: false
      }
    };
    public mainChartColours: Array<any> = [
      { // brandInfo
        backgroundColor: hexToRgba(getStyle('--info'), 10),
        borderColor: getStyle('--info'),
        pointHoverBackgroundColor: '#fff'
      },
      { // brandSuccess
        backgroundColor: 'transparent',
        borderColor: getStyle('--success'),
        pointHoverBackgroundColor: '#fff'
      },
      { // brandDanger
        backgroundColor: 'transparent',
        borderColor: getStyle('--danger'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5]
      }
    ];
    public mainChartLegend = false;
    public mainChartType = 'line';
  
    // social box charts
  
    public brandBoxChartData1: Array<any> = [
      {
        data: [65, 59, 84, 84, 51, 55, 40],
        label: 'Facebook'
      }
    ];
    public brandBoxChartData2: Array<any> = [
      {
        data: [1, 13, 9, 17, 34, 41, 38],
        label: 'Twitter'
      }
    ];
    public brandBoxChartData3: Array<any> = [
      {
        data: [78, 81, 80, 45, 34, 12, 40],
        label: 'LinkedIn'
      }
    ];
    public brandBoxChartData4: Array<any> = [
      {
        data: [35, 23, 56, 22, 97, 23, 64],
        label: 'Google+'
      }
    ];
  
    public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public brandBoxChartOptions: any = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          display: false,
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        }
      },
      legend: {
        display: false
      }
    };
    public brandBoxChartColours: Array<any> = [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff'
      }
    ];
    public brandBoxChartLegend = false;
    public brandBoxChartType = 'line';
  
    public random(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }*/
    function DashboardComponent(_dashboardservice, _notificationservice, _authenticationservice) {
        this._dashboardservice = _dashboardservice;
        this._notificationservice = _notificationservice;
        this._authenticationservice = _authenticationservice;
        this.leftcolumns = null;
        this.rightcolumns = null;
        this.isLoading = false;
        this.left_data = null;
        this.right_data = null;
        this.greeting = '';
        this.uname = '';
        this.IsVisiblejpg = true;
        this.IsVisiblejpeg = true;
        this.IsVisiblepng = true;
        this.sales_number = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        /*for (let i = 0; i <= this.mainChartElements; i++) {
          this.mainChartData1.push(this.random(50, 200));
          this.mainChartData2.push(this.random(80, 100));
          this.mainChartData3.push(65);
        }*/
        this.greeting = this.greetingForUser();
        this.uname = this._authenticationservice.currentUserValue.partnerinfo[0].cname;
        this.isLoading = true;
        this.leftcolumns = [
            { field: 'status', header: 'Status', align: 'left' },
            { field: 'records', header: 'Count', align: 'right' }
        ];
        this.rightcolumns = [
            { field: 'username', header: 'Username' }
        ];
        this._dashboardservice.getData().subscribe(function (result) {
            if (result.error) {
                _this._notificationservice.error(result.message);
            }
            else {
                _this.left_data = result.leftdata;
                _this.right_data = result.rightdata;
                _this._notificationservice.success(result.message);
            }
            _this.isLoading = false;
        }, function (error) {
            _this._notificationservice.error('There were some issues at the server');
            _this.isLoading = false;
        });
        this._dashboardservice.getAllConfigurations().subscribe(function (result) {
            if (result.error) {
                _this._notificationservice.error(result.message);
            }
            else {
                //console.log(result.data);     
                var salesItem = result.data.find(function (item) { return item.meta_key === 'url_sales_number_partner_portal'; });
                _this.sales_number = salesItem ? salesItem.meta_value : null;
            }
            _this.isLoading = false;
        }, function (error) {
            _this._notificationservice.error('There were some issues at the server');
            _this.isLoading = false;
        });
    };
    DashboardComponent.prototype.greetingForUser = function (time) {
        if (time === void 0) { time = null; }
        var datee = time != null ? time : moment__WEBPACK_IMPORTED_MODULE_4__(new Date(), 'YYYY-MM-DD HH:mm:ss');
        //datee = datee.add(5, 'hours')
        //datee = datee.add(30, 'minutes')
        var hr = datee.format('HH');
        var ampm = datee.format('a');
        if ((hr < +12 && ampm == 'am')) {
            var greeting = "Good Morning";
        }
        else if ((hr <= +4 && ampm == 'pm') || (hr >= +12 && hr < +16 && ampm == "pm")) {
            var greeting = "Good Afternoon";
        }
        else {
            var greeting = "Good Evening";
        }
        return greeting;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
        { type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
            _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../spinner/spinner.module */ "./src/app/views/spinner/spinner.module.ts");











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_10__["SpinnerModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/views/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var DashboardService = /** @class */ (function () {
    function DashboardService(_authenticationservice, _httpclient) {
        this._authenticationservice = _authenticationservice;
        this._httpclient = _httpclient;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    DashboardService.prototype.refreshCredentials = function () {
        this.currentuser = this._authenticationservice.currentUserValue;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.currentuser.token
            })
        };
    };
    DashboardService.prototype.getData = function () {
        this.refreshCredentials();
        return this._httpclient.get(this.baseUrl + "/dashboarddata" + (((this.currentuser.partnerinfo[0].cname === 'admin') || (this.currentuser.partnerinfo[0].cname === 'sales') || (this.currentuser.partnerinfo[0].cname === 'manager')) ? "" : "?partnerid=" + this.currentuser.partnerinfo[0].id), this.httpOptions);
    };
    DashboardService.prototype.getAllConfigurations = function () {
        var req_headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        req_headers.append('Content-Type', 'application/json');
        return this._httpclient.get(this.baseUrl + "/getconfig", { headers: req_headers });
    };
    DashboardService.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map