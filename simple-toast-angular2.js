System.register(['./src/simple_toast', './src/toast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (simple_toast_1_1) {
                exportStar_1(simple_toast_1_1);
            },
            function (toast_1_1) {
                exportStar_1(toast_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=simple-toast-angular2.js.map