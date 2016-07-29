declare module "simple-toast-angular2/src/toast-config" {
    export class ToastConfig {
        private _title;
        private _timer;
        title: string;
        timer: number;
    }
}
declare module "simple-toast-angular2/src/toast" {
    import { EventEmitter } from "@angular/core";
    import { ToastConfig } from "simple-toast-angular2/src/toast-config";
    export class Toast {
        toast$: EventEmitter<any>;
        private type;
        private message;
        private title;
        private timer;
        constructor(_toastConfig: ToastConfig);
        default(message: any, title?: any): void;
        success(message: any, title?: any): void;
        info(message: any, title?: any): void;
        warning(message: any, title?: any): void;
        error(message: any, title?: any): void;
        private setToast();
    }
}
declare module "simple-toast-angular2/src/simple-toast.component" {
    import { Toast } from "simple-toast-angular2/src/toast";
    export class ToastComponent {
        private toast$;
        private list_toast;
        constructor(toastService: Toast);
        private getToast(toast);
    }
}
declare module "simple-toast-angular2/simple-toast-angular2" {
    export * from "simple-toast-angular2/src/simple-toast.component";
    export * from "simple-toast-angular2/src/toast";
}
