"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<amd-module name="simple-toast-angular2/src/simple-toast.component"/>
var core_1 = require("@angular/core");
var ToastComponent = (function () {
    function ToastComponent(toastService) {
        var _this = this;
        this._toast$ = toastService.toast$;
        this._toast$.subscribe(function (toast) { return _this.getToast(toast); });
        console.log(12, this._toast$);
    }
    ToastComponent.prototype.getToast = function (toast) {
        console.log(toast);
    };
    ToastComponent = __decorate([
        core_1.Component({
            selector: 'simple-toast',
            template: "<code>teste2</code>"
        })
    ], ToastComponent);
    return ToastComponent;
}());
exports.ToastComponent = ToastComponent;
//# sourceMappingURL=simple-toast.js.map