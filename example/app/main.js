System.register(['@angular/platform-browser-dynamic', './app.component', "simple-toast-angular2/simple-toast-angular2"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, simple_toast_angular2_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (simple_toast_angular2_1_1) {
                simple_toast_angular2_1 = simple_toast_angular2_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [simple_toast_angular2_1.Toast]);
        }
    }
});
//# sourceMappingURL=main.js.map