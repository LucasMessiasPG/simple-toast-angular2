var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("simple-toast-angular2/src/toast", ["@angular/core", "simple-toast-angular2/src/toast-config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, toast_config_1;
    var Toast;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toast_config_1_1) {
                toast_config_1 = toast_config_1_1;
            }],
        execute: function() {
            Toast = (function () {
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
                    __param(0, core_1.Optional()), 
                    __metadata('design:paramtypes', [toast_config_1.ToastConfig])
                ], Toast);
                return Toast;
            }());
            exports_1("Toast", Toast);
        }
    }
});
System.register("simple-toast-angular2/src/simple-toast.component", ["@angular/core", "simple-toast-angular2/src/toast", "simple-toast-angular2/src/toast-config"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, toast_1, toast_config_2;
    var ToastComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (toast_1_1) {
                toast_1 = toast_1_1;
            },
            function (toast_config_2_1) {
                toast_config_2 = toast_config_2_1;
            }],
        execute: function() {
            ToastComponent = (function () {
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
                    core_2.Component({
                        selector: 'simple-toast',
                        providers: [toast_config_2.ToastConfig],
                        template: "\n    <div class=\"toast\" [ngClass]=\"toast.type\"  *ngFor=\"let toast of list_toast; let i = index\">\n        <div *ngIf=\"(toast && toast.message)\" class=\"toast-component\" (click)=\"remove(toast)\">\n            <div class=\"toast-text\">\n                <h3 class=\"toast-title\">{{ toast.title }}</h3>\n                <p class=\"toast-message\">{{toast.message}}</p>\n            </div> \n            <div class=\"toast-icon\">\n                <i *ngIf=\"toast.type == 'default'\" class=\"fa fa-info-circle\"></i>\n                <i *ngIf=\"toast.type== 'success'\" class=\"fa fa-check-circle\"></i>\n                <i *ngIf=\"toast.type == 'error'\" class=\"fa fa-exclamation-triangle\"></i>\n                <i *ngIf=\"toast.type == 'info'\" class=\"fa fa-info-circle\"></i>\n                <i *ngIf=\"toast.type == 'warning'\" class=\"fa fa-exclamation-circle\"></i>\n            </div>\n        </div>\n    </div>\n    ",
                        styles: ["\n    .toast{\n      background-color: rgba(0,0,0,.4);\n      width: 250px;\n      color: white;\n      border-radius: 4px;\n      box-shadow: 0 0 10px rgba(0,0,0,.4);\n      padding: 5px;\n      position: absolut;\n      margin-bottom: 10px;\n      margin-top: 10px;\n      cursor: pointer;\n    }\n    \n    .toast.default{\n      background-color: rgba(255,255,255,.4);\n      color: #000;\n    }\n    \n    .toast.success{\n      background-color: #51a351;\n      color: #fff;\n    }\n    \n    .toast.error{\n      background-color: #bd362f;\n      color: #fff;\n    }\n    \n    .toast.info{\n      background-color: #2f96b4;\n      color: #fff;\n    }\n    \n    .toast.warning{\n      background-color: #f89406;\n      color: #fff;\n    }\n    .toast-component > div {\n        display: inline-block;\n    }\n    .toast-text .toast-title{\n        font-size: 18px;\n        margin: 0px 50px;\n        width: 98px;\n        text-align: center;\n    }\n    .toast-text .toast-message{\n        font-size: 14px;\n        line-height: 14px;\n        width: 199px;\n        margin: 0;\n    }\n    .toast-icon{\n        font-size: 40px;\n        display: inline-block;\n        top: 2px;\n        position: absolute;\n        right: 10px;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [toast_1.Toast])
                ], ToastComponent);
                return ToastComponent;
            }());
            exports_2("ToastComponent", ToastComponent);
        }
    }
});
System.register("simple-toast-angular2/src/toast-config", ["@angular/core"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3;
    var ToastConfig;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            ToastConfig = (function () {
                function ToastConfig() {
                    this._title = 'Aviso';
                    this._timer = 4000;
                }
                Object.defineProperty(ToastConfig.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    set: function (value) {
                        this._title = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ToastConfig.prototype, "timer", {
                    get: function () {
                        return this._timer;
                    },
                    set: function (value) {
                        this._timer = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ToastConfig = __decorate([
                    core_3.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ToastConfig);
                return ToastConfig;
            }());
            exports_3("ToastConfig", ToastConfig);
        }
    }
});
System.register("simple-toast-angular2/simple-toast-angular2", ["simple-toast-angular2/src/simple-toast.component", "simple-toast-angular2/src/toast", "simple-toast-angular2/src/toast-config"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_4(exports);
    }
    return {
        setters:[
            function (simple_toast_component_1_1) {
                exportStar_1(simple_toast_component_1_1);
            },
            function (toast_2_1) {
                exportStar_1(toast_2_1);
            },
            function (toast_config_3_1) {
                exportStar_1(toast_config_3_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=simple-toast-angular2.js.map