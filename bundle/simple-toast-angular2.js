var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("simple-toast-angular2/simple-toast-angular2", ["@angular/core/"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _1;
    var SimpleToastComponent;
    return {
        setters:[
            function (_1_1) {
                _1 = _1_1;
            }],
        execute: function() {
            SimpleToastComponent = (function () {
                function SimpleToastComponent() {
                    console.log('teste3');
                }
                SimpleToastComponent = __decorate([
                    _1.Component({
                        selector: 'simple-toast',
                        template: "<code>teste2</code>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleToastComponent);
                return SimpleToastComponent;
            }());
            exports_1("SimpleToastComponent", SimpleToastComponent);
        }
    }
});
System.register("simple-toast-angular2/simple-toast-angular2", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Toast;
    return {
        setters:[],
        execute: function() {
            Toast = (function () {
                function Toast(type, message, title) {
                    this.type = type;
                    this.message = message;
                    this.title = title;
                }
                return Toast;
            }());
            exports_2("Toast", Toast);
        }
    }
});
System.register("simple-toast-angular2", ["simple-toast-angular2/simple-toast-angular2"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_3(exports);
    }
    return {
        setters:[
            function (simple_toast_1_1) {
                exportStar_1(simple_toast_1_1);
                exportStar_1(simple_toast_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=simple-toast-angular2.js.map