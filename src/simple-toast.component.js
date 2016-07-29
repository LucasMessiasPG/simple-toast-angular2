"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<amd-module name="simple-toast-angular2/src/simple-toast.component"/>
var core_1 = require("@angular/core");
var toast_config_1 = require("simple-toast-angular2/src/toast-config");
var ToastComponent = (function () {
    function ToastComponent(toastService) {
        var _this = this;
        this.list_toast = [];
        this.toast$ = toastService.toast$;
        this.toast$.subscribe(function (toast) { return _this.getToast(toast); });
    }
    ToastComponent.prototype.getToast = function (toast) {
        var _this = this;
        this.list_toast.push(toast);
        var timeOut = toast.timer;
        setTimeout(function () { _this.remove(toast); }, timeOut);
    };
    ToastComponent.prototype.remove = function (toast) {
        this.list_toast.splice(this.list_toast.indexOf(toast), 1);
    };
    ToastComponent = __decorate([
        core_1.Component({
            selector: 'simple-toast',
            providers: [toast_config_1.ToastConfig],
            template: "\n    <div class=\"toast\" [ngClass]=\"toast.type\"  *ngFor=\"let toast of list_toast; let i = index\">\n        <div *ngIf=\"(toast && toast.message)\" class=\"toast-component\" (click)=\"remove(toast)\">\n            <div class=\"toast-text\">\n                <h3 class=\"toast-title\">{{ toast.title }}</h3>\n                <p class=\"toast-message\">{{toast.message}}</p>\n            </div> \n            <div class=\"toast-icon\">\n                <i *ngIf=\"toast.type == 'default'\" class=\"fa fa-info-circle\"></i>\n                <i *ngIf=\"toast.type== 'success'\" class=\"fa fa-check-circle\"></i>\n                <i *ngIf=\"toast.type == 'error'\" class=\"fa fa-exclamation-triangle\"></i>\n                <i *ngIf=\"toast.type == 'info'\" class=\"fa fa-info-circle\"></i>\n                <i *ngIf=\"toast.type == 'warning'\" class=\"fa fa-exclamation-circle\"></i>\n            </div>\n        </div>\n    </div>\n    ",
            styles: ["\n    .toast{\n      background-color: rgba(0,0,0,.4);\n      width: 250px;\n      color: white;\n      border-radius: 4px;\n      box-shadow: 0 0 10px rgba(0,0,0,.4);\n      padding: 5px;\n      position: absolut;\n      margin-bottom: 10px;\n      margin-top: 10px;\n      cursor: pointer;\n    }\n    \n    .toast.default{\n      background-color: rgba(255,255,255,.4);\n      color: #000;\n    }\n    \n    .toast.success{\n      background-color: #51a351;\n      color: #fff;\n    }\n    \n    .toast.error{\n      background-color: #bd362f;\n      color: #fff;\n    }\n    \n    .toast.info{\n      background-color: #2f96b4;\n      color: #fff;\n    }\n    \n    .toast.warning{\n      background-color: #f89406;\n      color: #fff;\n    }\n    .toast-component > div {\n        display: inline-block;\n    }\n    .toast-text .toast-title{\n        font-size: 18px;\n        margin: 0px 50px;\n        width: 98px;\n        text-align: center;\n    }\n    .toast-text .toast-message{\n        font-size: 14px;\n        line-height: 14px;\n        width: 199px;\n        margin: 0;\n    }\n    .toast-icon{\n        font-size: 40px;\n        display: inline-block;\n        top: 2px;\n        position: absolute;\n        right: 10px;\n    }\n    "]
        })
    ], ToastComponent);
    return ToastComponent;
}());
exports.ToastComponent = ToastComponent;
//# sourceMappingURL=simple-toast.component.js.map