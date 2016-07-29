declare module "simple-toast-angular2/src/toast" {
    import { EventEmitter } from "@angular/core";
    export class Toast {
        toast$: EventEmitter<any>;
        private type;
        private message;
        private title;
        constructor();
        setTitleDefault(tilte: any): void;
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
        private _toast$;
        constructor(toastService: Toast);
        private getToast(toast);
    }
}
