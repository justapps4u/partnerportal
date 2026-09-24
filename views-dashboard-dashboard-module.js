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

module.exports = "<div class=\"text-banner\">\r\n  <div class=\"banner-content\">\r\n    <strong>Important Announcement,</strong>\r\n    <span>Providing timely status on all leads is necessary to continue getting new leads and support from company end.</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"text-banner text-banner-purple\">\r\n  <div class=\"banner-content\">\r\n    <span>We are facing a technical issue with our sales number. <a href=\"https://web.whatsapp.com/send?phone=+91{{sales_number}}\" target=\"_blank\">Please click here to chat with us on WhatsApp</a>.</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-layout animated fadeIn\">\r\n  <!-- Greeting -->\r\n  <div class=\"page-header\">\r\n    <h4>{{ greeting }}, {{ uname | titlecase }}</h4>\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <!-- LEFT COLUMN -->\r\n    <div class=\"col-md-5 col-12\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"info-table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Important Links</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr><td><a href=\"mailto:sales@bookkeeperapp.net\"><i class=\"fa fa-envelope\"></i> Mail Us</a></td></tr>\r\n            <tr><td><a href=\"https://web.whatsapp.com/send?phone=+91{{sales_number}}\" target=\"_blank\"><i class=\"fa fa-whatsapp\"></i> Chat with Us</a></td></tr>\r\n            <tr><td><a href=\"https://bookkeeperapp.net\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Website</a></td></tr>\r\n            <tr><td><a href=\"https://bookkeeperapp.net/book-keeper-in-the-headlines\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Book Keeper In The Headlines</a></td></tr>\r\n            <tr><td><a href=\"https://drive.google.com/drive/folders/1ELDEBnlXCL_GWjEgxq0zUZ2ChTJc0lsQ?usp=drive_link\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Dropbox link for EPS files of all marketing material</a></td></tr>\r\n            <tr><td><a href=\"https://www.youtube.com/user/BookKeeperApp\" target=\"_blank\"><i class=\"fa fa-youtube-play\"></i> YouTube Channel</a></td></tr>\r\n            <tr><td><a href=\"https://faq.bookkeeperapp.net\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> FAQ Page</a></td></tr>\r\n            <tr><td><a href=\"https://bookkeeperapp.net/whats-new-in-book-keeper-windows\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> What's New in Book Keeper Windows</a></td></tr>\r\n            <tr><td><a href=\"https://bookkeeperapp.net/bookkeeper-vs-tally-vs-busy-vs-quickbooks\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Book Keeper vs Vyapar, Tally, Busy, Marg, myBillBook </a></td></tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- RIGHT COLUMN -->\r\n    <div class=\"col-md-7 col-12\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"info-table\">\r\n          <thead>\r\n            <tr>\r\n              <th colspan=\"2\">Important Email IDs</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>Sales</td>\r\n              <td><a href=\"mailto:sales@bookkeeperapp.net\">sales@bookkeeperapp.net</a><br>+91 {{sales_number}}</td>\r\n            </tr>     \r\n            <tr>\r\n              <td>Senior Sales Executive</td>\r\n              <td><a href=\"mailto:madhur@bookkeeperapp.net\">madhur@bookkeeperapp.net</a><br>+91 7011283549</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Senior Sales Executive</td>\r\n              <td><a href=\"mailto:anshul@bookkeeperapp.net\">anshul@bookkeeperapp.net</a><br>+91 9001485599</td>\r\n            </tr>\r\n            <tr>\r\n              <td>International Sales</td>\r\n              <td><a href=\"mailto:mohit.sehgal@bookkeeperapp.net\">mohit.sehgal@bookkeeperapp.net</a><br>+91 8882903003</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Sales Head</td>\r\n              <td><a href=\"mailto:vaibhav@bookkeeperapp.net\">vaibhav@bookkeeperapp.net</a><br>+91 9582593577</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ========================================== -->\r\n    <!-- STANDARD USER MENUS (!isBKChapChapUser)    -->\r\n    <!-- ========================================== -->\r\n    <ng-container *ngIf=\"!isBKChapChapUser\"></ng-container>\r\n\r\n    <!-- ========================================== -->\r\n    <!-- NEW ROLE MENUS (isBKChapChapUser)          -->\r\n    <!-- ========================================== -->\r\n    <ng-container *ngIf=\"isNewRole\"></ng-container>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Dynamic Data Tables (Lead Status & Expiring) -->\r\n<div class=\"page-layout animated fadeIn\" *ngIf=\"(left_data || right_data)\">\r\n  <div class=\"page-header\">\r\n    <h4>Lead Management</h4>\r\n    <hr>\r\n  </div>\r\n  \r\n  <div class=\"row mt-3\">\r\n    <div *ngIf=\"(left_data && (left_data.length > 0))\" class=\"col-md-6 col-12 mb-4\">\r\n      <div class=\"headingdata\">Lead Status</div>\r\n      <div class=\"table-responsive\">\r\n        <p-table [columns]=\"leftcolumns\" [value]=\"left_data\" styleClass=\"p-datatable-sm\">\r\n          <ng-template pTemplate=\"header\" let-leftcolumns>\r\n            <tr>\r\n              <th *ngFor=\"let col of leftcolumns\" [pSortableColumn]=\"col.field\" [style.text-align]=\"col.align\">\r\n                {{ col.header }}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-left_data>\r\n            <tr>\r\n              <td>{{ left_data.status }}</td>\r\n              <td style=\"text-align: right;\">{{ left_data.records }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"(right_data && (right_data.length > 0))\" class=\"col-md-6 col-12 mb-4\">\r\n      <div class=\"headingdata\">About to Expire</div>\r\n      <div class=\"table-responsive\">\r\n        <p-table [columns]=\"rightcolumns\" [value]=\"right_data\" styleClass=\"p-datatable-sm\">\r\n          <ng-template pTemplate=\"header\" let-rightcolumns>\r\n            <tr>\r\n              <th *ngFor=\"let col of rightcolumns\" [pSortableColumn]=\"col.field\">\r\n                {{ col.header }}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-right_data>\r\n            <tr>\r\n              <td>{{ right_data.username }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"nav\" *ngIf=\"isLoading\">\r\n  <app-spinner [toShow]=\"isLoading\"></app-spinner>\r\n</div>"

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

module.exports = ":host {\n  --brand-700: #131814;\n  --brand-600: #276a33;\n  --brand-500: #3a8a49;\n  --brand-100: #f4f4f4;\n  --brand-50: #ecf4ed;\n  --ink-900: #000000;\n  --ink-600: #1c201d;\n  --ink-300: #69706b;\n  --line: #c6d1c9;\n  --line-soft: #d7e0da;\n  --line-strong: #a9b8ad;\n  --surface: #ffffff;\n  --shadow: 0 1px 2px rgba(16, 22, 15, 0.06), 0 1px 1px rgba(16, 22, 15, 0.08);\n  display: block;\n  color: var(--ink-900);\n  font-size: 14px;\n}\n\nh4 {\n  margin: 0;\n  font-size: 19px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--ink-900);\n}\n\nhr {\n  border: none;\n  height: 2px;\n  margin: 10px 0 18px;\n  background: linear-gradient(90deg, var(--brand-600) 0 48px, var(--line) 48px 100%);\n  border-radius: 2px;\n}\n\na {\n  color: var(--brand-600);\n  text-decoration: none;\n  transition: color 0.15s ease;\n}\n\na:hover {\n  color: var(--brand-700);\n  text-decoration: underline;\n}\n\n.fa-external-link, .fa-envelope, .fa-whatsapp, .fa-youtube-play {\n  font-size: 12px;\n  margin-right: 6px;\n  color: var(--brand-500);\n}\n\n.text-banner {\n  width: 100%;\n  background-color: var(--brand-600);\n  color: #ffffff;\n  padding: 14px 20px;\n  border-radius: 10px;\n  box-shadow: 0 1px 2px rgba(28, 77, 37, 0.12);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n\n.text-banner .banner-content {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.text-banner .banner-content strong {\n  white-space: nowrap;\n  font-size: 15px;\n}\n\n.text-banner.text-banner-purple {\n  background-color: #6f42c1;\n}\n\n.text-banner.text-banner-purple a {\n  color: #ffffff;\n  text-decoration: underline;\n  font-weight: 600;\n}\n\n.text-banner.text-banner-purple a:hover {\n  color: #e6d9f9;\n}\n\n@media (max-width: 768px) {\n  .text-banner .banner-content {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n}\n\n.page-layout {\n  background: var(--surface);\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 22px 24px 26px;\n  margin: 18px 0;\n  box-shadow: var(--shadow);\n}\n\n@media (max-width: 576px) {\n  .page-layout {\n    padding: 16px 14px 18px;\n    border-radius: 10px;\n    margin: 12px 0;\n  }\n}\n\n.page-header {\n  margin-bottom: 6px;\n}\n\n.table-responsive {\n  width: 100%;\n  max-height: 550px;\n  overflow-y: auto;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  border: none;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: var(--surface);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  scrollbar-width: thin;\n  scrollbar-color: var(--brand-100) transparent;\n}\n\n.table-responsive::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.table-responsive::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.table-responsive::-webkit-scrollbar-thumb {\n  background: var(--brand-100);\n  border-radius: 4px;\n}\n\n.table-responsive::-webkit-scrollbar-thumb:hover {\n  background: var(--ink-300);\n}\n\n.table-responsive table {\n  margin-bottom: 0;\n  border: none;\n}\n\ntable {\n  width: 100%;\n  min-width: 100%;\n  border-collapse: collapse;\n  font-size: 13.5px;\n  line-height: 1.45;\n}\n\nth,\ntd {\n  border: none;\n  border-bottom: 1px solid var(--line-soft);\n  border-right: 1px solid var(--line-strong);\n  padding: 9px 12px;\n  text-align: left;\n  vertical-align: middle;\n  word-wrap: break-word;\n  white-space: normal;\n}\n\nth:last-child,\ntd:last-child {\n  border-right: none;\n}\n\nthead th, ::ng-deep .p-datatable-thead > tr > th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: var(--brand-100) !important;\n  color: var(--brand-700) !important;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.01em;\n  border: 1px solid var(--line) !important;\n  border-bottom: 2px solid var(--brand-600) !important;\n  white-space: nowrap;\n  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n\ntbody tr:hover td, ::ng-deep .p-datatable-tbody > tr:hover > td {\n  background: var(--brand-50) !important;\n}\n\ntbody tr:last-child td {\n  border-bottom: none;\n}\n\n.info-table tbody td {\n  color: var(--ink-900);\n}\n\n.info-table tbody td:first-child {\n  color: var(--ink-600);\n  font-weight: 500;\n  width: 35%;\n}\n\n.headingdata {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--ink-900);\n  margin-bottom: 12px;\n  border-left: 3px solid var(--brand-600);\n  padding-left: 8px;\n}\n\n@media (max-width: 576px) {\n  table {\n    font-size: 12.5px;\n  }\n\n  th,\ntd {\n    padding: 7px 9px;\n  }\n\n  h4 {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcY21zL3NyY1xcYXBwXFx2aWV3c1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLDRFQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ1JGOztBRGVBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNaRjs7QURlQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrRkFBQTtFQUNBLGtCQUFBO0FDWkY7O0FEZUE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNaRjs7QURjRTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUNaSjs7QURnQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ2JGOztBRG9CQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNqQkY7O0FEbUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQ2pCSjs7QURtQkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNqQk47O0FEcUJFO0VBQ0UseUJBQUE7QUNuQko7O0FEcUJJO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNuQk47O0FEcUJNO0VBQ0UsY0FBQTtBQ25CUjs7QUR3QkU7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxRQUFBO0VDdEJKO0FBQ0Y7O0FEOEJBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUMzQkY7O0FENkJFO0VBUkY7SUFTSSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQzFCRjtBQUNGOztBRDZCQTtFQUNFLGtCQUFBO0FDMUJGOztBRGlDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSw4Q0FBQTtFQUVBLHFCQUFBO0VBQ0EsNkNBQUE7QUNoQ0Y7O0FEa0NFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNoQ0o7O0FEa0NFO0VBQ0UsdUJBQUE7QUNoQ0o7O0FEa0NFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtBQ2hDSjs7QURrQ0k7RUFDRSwwQkFBQTtBQ2hDTjs7QURvQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNsQ0o7O0FEMENBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN2Q0Y7O0FEMENBOztFQUVFLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ3ZDRjs7QUR5Q0U7O0VBQ0Usa0JBQUE7QUN0Q0o7O0FEMENBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUN2Q0Y7O0FEMENBO0VBQ0Usc0NBQUE7QUN2Q0Y7O0FEMENBO0VBQ0UsbUJBQUE7QUN2Q0Y7O0FEK0NFO0VBQ0UscUJBQUE7QUM1Q0o7O0FEOENFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUM1Q0o7O0FEZ0RBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7QUM3Q0Y7O0FEb0RBO0VBQ0U7SUFDRSxpQkFBQTtFQ2pERjs7RURvREE7O0lBRUUsZ0JBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2FsZXMgRGFzaGJvYXJkIOKAlCBjb21wb25lbnQgc3R5bGVzXHJcbi8vIEJyYW5kOiBEaXJlY3QgbWF0Y2ggdG8gdGhlIHN1cHBvcnQgdGVhbSBkYXNoYm9hcmQgKGdyZWVucyByb290ZWQgaW4gIzI3NmEzMykuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbjpob3N0IHtcclxuICAtLWJyYW5kLTcwMDogIzEzMTgxNDsgICAvLyBkZWVwIGdyZWVuIChhbG1vc3QgYmxhY2spIOKAlCBoZWFkaW5ncywgc3Ryb25nIGVtcGhhc2lzXHJcbiAgLS1icmFuZC02MDA6ICMyNzZhMzM7ICAgLy8gcHJpbWFyeSBicmFuZCBncmVlblxyXG4gIC0tYnJhbmQtNTAwOiAjM2E4YTQ5OyAgIC8vIGhvdmVyIC8gYWN0aXZlIHN0YXRlc1xyXG4gIC0tYnJhbmQtMTAwOiAjZjRmNGY0OyAgIC8vIHBhbGUgd2FzaCDigJQgaGVhZGVyIGJhY2tncm91bmRzLCBoaWdobGlnaHRzXHJcbiAgLS1icmFuZC01MDogICNlY2Y0ZWQ7ICAgLy8gZmFpbnQgdGludCDigJQgc3RyaXBpbmcsIHBhbmVsIGJhY2tncm91bmRzXHJcblxyXG4gIC0taW5rLTkwMDogIzAwMDAwMDsgICAgIC8vIHByaW1hcnkgYm9keSB0ZXh0IOKAlCBkYXJrLCBoaWdoLWNvbnRyYXN0XHJcbiAgLS1pbmstNjAwOiAjMWMyMDFkOyAgICAgLy8gc2Vjb25kYXJ5IHRleHQg4oCUIHN0aWxsIGNsZWFybHkgbGVnaWJsZVxyXG4gIC0taW5rLTMwMDogIzY5NzA2YjsgICAgIC8vIHBsYWNlaG9sZGVycywgZmFpbnQgdGV4dFxyXG5cclxuICAtLWxpbmU6ICNjNmQxYzk7ICAgICAgICAvLyBoYWlybGluZSBib3JkZXJzXHJcbiAgLS1saW5lLXNvZnQ6ICNkN2UwZGE7ICAgLy8gbGlnaHRlciBpbnRlcm5hbCBydWxlc1xyXG4gIC0tbGluZS1zdHJvbmc6ICNhOWI4YWQ7IC8vIGNvbHVtbiBkaXZpZGVycywgbmVlZHMgdG8gYWN0dWFsbHkgcmVhZCBhcyBhIGxpbmVcclxuICAtLXN1cmZhY2U6ICNmZmZmZmY7XHJcblxyXG4gIC0tc2hhZG93OiAwIDFweCAycHggcmdiYSgxNiwgMjIsIDE1LCAwLjA2KSwgMCAxcHggMXB4IHJnYmEoMTYsIDIyLCAxNSwgMC4wOCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmstOTAwKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQmFzZSBlbGVtZW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5oNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmstOTAwKTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBtYXJnaW46IDEwcHggMCAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYnJhbmQtNjAwKSAwIDQ4cHgsIHZhcigtLWxpbmUpIDQ4cHggMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogdmFyKC0tYnJhbmQtNjAwKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYnJhbmQtNzAwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG5cclxuLmZhLWV4dGVybmFsLWxpbmssIC5mYS1lbnZlbG9wZSwgLmZhLXdoYXRzYXBwLCAuZmEteW91dHViZS1wbGF5IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7IFxyXG4gIGNvbG9yOiB2YXIoLS1icmFuZC01MDApO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFRleHQgQmFubmVyc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4udGV4dC1iYW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLTYwMCk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjgsIDc3LCAzNywgMC4xMik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIC5iYW5uZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnRleHQtYmFubmVyLXB1cnBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY0MmMxOyBcclxuICAgIFxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZTZkOWY5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5iYW5uZXItY29udGVudCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBnYXA6IDRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUGFnZSBzZWN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4ucGFnZS1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjJweCAyNHB4IDI2cHg7XHJcbiAgbWFyZ2luOiAxOHB4IDA7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE0cHggMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJlc3BvbnNpdmUgdGFibGUgd3JhcHBlclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tYnJhbmQtMTAwKSB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtMTAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluay0zMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQmFzZSB0YWJsZSBsb29rXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LXNpemU6IDEzLjVweDtcclxuICBsaW5lLWhlaWdodDogMS40NTtcclxufVxyXG5cclxudGgsXHJcbnRkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmUtc29mdCk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbGluZS1zdHJvbmcpO1xyXG4gIHBhZGRpbmc6IDlweCAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnRoZWFkIHRoLCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtMTAwKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1icmFuZC03MDApICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1icmFuZC02MDApICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggLTJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbnRib2R5IHRyOmhvdmVyIHRkLCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHI6aG92ZXIgPiB0ZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtNTApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ3VzdG9tIENvbXBvbmVudCBDbGFzc2VzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5pbmZvLXRhYmxlIHtcclxuICB0Ym9keSB0ZCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW5rLTkwMCk7XHJcbiAgfVxyXG4gIHRib2R5IHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pbmstNjAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogMzUlOyBcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkaW5nZGF0YSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLWluay05MDApO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1icmFuZC02MDApO1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNtYWxsLXNjcmVlbiByZWZpbmVtZW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICB0YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDEyLjVweDtcclxuICB9XHJcblxyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDdweCA5cHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG59IiwiOmhvc3Qge1xuICAtLWJyYW5kLTcwMDogIzEzMTgxNDtcbiAgLS1icmFuZC02MDA6ICMyNzZhMzM7XG4gIC0tYnJhbmQtNTAwOiAjM2E4YTQ5O1xuICAtLWJyYW5kLTEwMDogI2Y0ZjRmNDtcbiAgLS1icmFuZC01MDogI2VjZjRlZDtcbiAgLS1pbmstOTAwOiAjMDAwMDAwO1xuICAtLWluay02MDA6ICMxYzIwMWQ7XG4gIC0taW5rLTMwMDogIzY5NzA2YjtcbiAgLS1saW5lOiAjYzZkMWM5O1xuICAtLWxpbmUtc29mdDogI2Q3ZTBkYTtcbiAgLS1saW5lLXN0cm9uZzogI2E5YjhhZDtcbiAgLS1zdXJmYWNlOiAjZmZmZmZmO1xuICAtLXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTYsIDIyLCAxNSwgMC4wNiksIDAgMXB4IDFweCByZ2JhKDE2LCAyMiwgMTUsIDAuMDgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWluay05MDApO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICBjb2xvcjogdmFyKC0taW5rLTkwMCk7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luOiAxMHB4IDAgMThweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1icmFuZC02MDApIDAgNDhweCwgdmFyKC0tbGluZSkgNDhweCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLWJyYW5kLTYwMCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYnJhbmQtNzAwKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mYS1leHRlcm5hbC1saW5rLCAuZmEtZW52ZWxvcGUsIC5mYS13aGF0c2FwcCwgLmZhLXlvdXR1YmUtcGxheSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGNvbG9yOiB2YXIoLS1icmFuZC01MDApO1xufVxuXG4udGV4dC1iYW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtNjAwKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjgsIDc3LCAzNywgMC4xMik7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZXh0LWJhbm5lciAuYmFubmVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi50ZXh0LWJhbm5lciAuYmFubmVyLWNvbnRlbnQgc3Ryb25nIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRleHQtYmFubmVyLnRleHQtYmFubmVyLXB1cnBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZjQyYzE7XG59XG4udGV4dC1iYW5uZXIudGV4dC1iYW5uZXItcHVycGxlIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udGV4dC1iYW5uZXIudGV4dC1iYW5uZXItcHVycGxlIGE6aG92ZXIge1xuICBjb2xvcjogI2U2ZDlmOTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGV4dC1iYW5uZXIgLmJhbm5lci1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNHB4O1xuICB9XG59XG5cbi5wYWdlLWxheW91dCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjJweCAyNHB4IDI2cHg7XG4gIG1hcmdpbjogMThweCAwO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYWdlLWxheW91dCB7XG4gICAgcGFkZGluZzogMTZweCAxNHB4IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgfVxufVxuXG4ucGFnZS1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLWJyYW5kLTEwMCkgdHJhbnNwYXJlbnQ7XG59XG4udGFibGUtcmVzcG9uc2l2ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cbi50YWJsZS1yZXNwb25zaXZlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtMTAwKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5rLTMwMCk7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDEzLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG59XG5cbnRoLFxudGQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lLXNvZnQpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saW5lLXN0cm9uZyk7XG4gIHBhZGRpbmc6IDlweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG50aDpsYXN0LWNoaWxkLFxudGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxudGhlYWQgdGgsIDo6bmctZGVlcCAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtMTAwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tYnJhbmQtNzAwKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1icmFuZC02MDApICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxudGJvZHkgdHI6aG92ZXIgdGQsIDo6bmctZGVlcCAucC1kYXRhdGFibGUtdGJvZHkgPiB0cjpob3ZlciA+IHRkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtNTApICFpbXBvcnRhbnQ7XG59XG5cbnRib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uaW5mby10YWJsZSB0Ym9keSB0ZCB7XG4gIGNvbG9yOiB2YXIoLS1pbmstOTAwKTtcbn1cbi5pbmZvLXRhYmxlIHRib2R5IHRkOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLWluay02MDApO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMzUlO1xufVxuXG4uaGVhZGluZ2RhdGEge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmstOTAwKTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1icmFuZC02MDApO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIHRhYmxlIHtcbiAgICBmb250LXNpemU6IDEyLjVweDtcbiAgfVxuXG4gIHRoLFxudGQge1xuICAgIHBhZGRpbmc6IDdweCA5cHg7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59Il19 */"

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
        // 1. Add a flag to track the user's view state
        this.isBKChapChapUser = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.greeting = this.greetingForUser();
        var currentUser = this._authenticationservice.currentUserValue;
        this.uname = currentUser.partnerinfo[0].cname;
        console.log(this.uname);
        // this.uname= this._authenticationservice.currentUserValue.partnerinfo[0].cname;  
        // 2. Check the role.
        var role = this.uname;
        this.isBKChapChapUser = (role === 'BKChapChap');
        if (this.isBKChapChapUser) {
            this.loadBKChapChapData();
        }
        else {
            this.loadStandardDashboardData();
        }
    };
    // 4. Create a dedicated method for the new role's setup
    DashboardComponent.prototype.loadBKChapChapData = function () {
        this.isLoading = false;
    };
    // 5. Extract your existing API calls into a separate method
    DashboardComponent.prototype.loadStandardDashboardData = function () {
        var _this = this;
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