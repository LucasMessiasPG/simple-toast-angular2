System.register(['@angular/core', "simple-toast-angular2/simple-toast-angular2", "simple-toast-angular2/src/simple-toast.component", "simple-toast-angular2/src/toast-config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, simple_toast_angular2_1, simple_toast_component_1, toast_config_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (simple_toast_angular2_1_1) {
                simple_toast_angular2_1 = simple_toast_angular2_1_1;
            },
            function (simple_toast_component_1_1) {
                simple_toast_component_1 = simple_toast_component_1_1;
            },
            function (toast_config_1_1) {
                toast_config_1 = toast_config_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_configToast, _toast) {
                    this._configToast = _configToast;
                    this.timer = 4000;
                    this.content = 'Conteudo de Exemplo';
                    this.title = 'Aviso';
                    this._configToast.title = 'teste';
                    this._configToast.timer = this.timer;
                    this.toast = _toast;
                }
                AppComponent.prototype.showToast = function (type) {
                    this._configToast.timer = this.timer;
                    switch (type) {
                        case 'success':
                            this.toast.success(this.content, this.title);
                            break;
                        case 'info':
                            this.toast.info(this.content, this.title);
                            break;
                        case 'warning':
                            this.toast.warning(this.content, this.title);
                            break;
                        case 'error':
                            this.toast.error(this.content, this.title);
                            break;
                        default:
                            this.toast.success(this.content, this.title);
                            break;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"home\">\n        <h1>Simple Toast Angular 2</h1>\n        <label>Titulo\n          <input type=\"text\" [(ngModel)]=\"title\">\n        </label>\n        <label>Conteudo\n          <input type=\"text\" [(ngModel)]=\"content\">\n        </label>\n        <label>Tempo\n          <input type=\"text\" [(ngModel)]=\"timer\">\n        </label>\n        <ul>\n          <li><button (click)=\"showToast()\">Default</button></li>\n          <li><button (click)=\"showToast('success')\" class=\"success\">Success</button></li>\n          <li><button (click)=\"showToast('info')\" class=\"info\">Info</button></li>\n          <li><button (click)=\"showToast('warning')\" class=\"warning\">Warning</button></li>\n          <li><button (click)=\"showToast('error')\" class=\"error\">Error</button></li>\n        </ul>\n    </div>\n    <simple-toast></simple-toast>\n    ",
                        directives: [simple_toast_component_1.ToastComponent],
                        providers: [simple_toast_angular2_1.Toast],
                        styles: ["\n    .home{\n        max-width: 1200px;\n        margin: 0 auto;\n        background-color: rgba(0,0,100,.1);\n        padding: 10px 35px;\n        min-height: 500px;\n    }\n    .home ul{\n        margin:10px 10px;\n        list-style: none;\n    }\n    .home ul li{\n        display: inline-block;\n    }\n    button{\n        -webkit-border-radius: 28;\n        -moz-border-radius: 28;\n        border-radius: 28px;\n        -webkit-box-shadow: 0px 1px 3px #666666;\n        -moz-box-shadow: 0px 1px 3px #666666;\n        box-shadow: 0px 1px 3px #666666;\n        font-family: Courier New;\n        cursor: pointer;\n        font-size: 14px;\n        padding: 10px 20px 10px 20px;\n        text-decoration: none;\n        border-style: none;\n    }\n    button:hover{\n        background: rgba(255,255,255,.2) !important;\n    }\n    button:hover.success{\n        background: #34d976 !important;\n    }\n    button:hover.info{\n        background: #3476d9 !important;\n    }\n    button:hover.warning{\n        background: #d9b834 !important;\n    }\n    button:hover.error{\n        background: #d93f34 !important;\n    }\n    button.success{\n        color: #ffffff; \n        background: #34d976;\n        background-image: -webkit-linear-gradient(top, #34d976, #2bb834);\n        background-image: -moz-linear-gradient(top, #34d976, #2bb834);\n        background-image: -ms-linear-gradient(top, #34d976, #2bb834);\n        background-image: -o-linear-gradient(top, #34d976, #2bb834);\n        background-image: linear-gradient(to bottom, #34d976, #2bb834);\n    }\n    button.info{\n        color: #ffffff; \n        background: #3476d9;\n        background-image: -webkit-linear-gradient(top, #3476d9, #2c38b8);\n        background-image: -moz-linear-gradient(top, #3476d9, #2c38b8);\n        background-image: -ms-linear-gradient(top, #3476d9, #2c38b8);\n        background-image: -o-linear-gradient(top, #3476d9, #2c38b8);\n        background-image: linear-gradient(to bottom, #3476d9, #2c38b8);\n    }\n    button.warning{\n        color: #ffffff;\n        background: #d9b834;\n        background-image: -webkit-linear-gradient(top, #d9b834, #b8642c);\n        background-image: -moz-linear-gradient(top, #d9b834, #b8642c);\n        background-image: -ms-linear-gradient(top, #d9b834, #b8642c);\n        background-image: -o-linear-gradient(top, #d9b834, #b8642c);\n        background-image: linear-gradient(to bottom, #d9b834, #b8642c);\n    }\n    button.error{\n        color: #ffffff;\n        background: #d93f34;\n        background-image: -webkit-linear-gradient(top, #d93f34, #b82c2c);\n        background-image: -moz-linear-gradient(top, #d93f34, #b82c2c);\n        background-image: -ms-linear-gradient(top, #d93f34, #b82c2c);\n        background-image: -o-linear-gradient(top, #d93f34, #b82c2c);\n        background-image: linear-gradient(to bottom, #d93f34, #b82c2c);\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [toast_config_1.ToastConfig, simple_toast_angular2_1.Toast])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map