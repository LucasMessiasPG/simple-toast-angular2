"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
///<amd-module name="simple-toast-angular2/src/toast"/>
var core_1 = require("@angular/core");
var Toast = (function () {
    function Toast(_toastConfig) {
        this.toast$ = new core_1.EventEmitter();
        this.timer = 4000;
        if (_toastConfig)
            this.config = _toastConfig;
    }
    Toast.prototype.default = function (message, title) {
        this.type = 'default';
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    };
    Toast.prototype.success = function (message, title) {
        this.type = 'success';
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    };
    Toast.prototype.info = function (message, title) {
        this.type = 'info';
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    };
    Toast.prototype.warning = function (message, title) {
        this.type = 'warning';
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    };
    Toast.prototype.error = function (message, title) {
        this.type = 'error';
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    };
    Toast.prototype.setToast = function () {
        return {
            type: this.type,
            message: this.message,
            title: (this.title) ? this.title : (this.config && this.config.title) ? this.config.title : 'Aviso',
            timer: (this.config && this.config.timer) ? this.config.timer : this.timer
        };
    };
    Toast = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional())
    ], Toast);
    return Toast;
}());
exports.Toast = Toast;
//# sourceMappingURL=toast.js.map