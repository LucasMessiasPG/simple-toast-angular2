import { EventEmitter } from "@angular/core";
import { ToastConfig } from "simple-toast-angular2/src/toast-config";
export declare class Toast {
    toast$: EventEmitter<any>;
    private type;
    private message;
    private title;
    private timer;
    private config;
    constructor(_toastConfig: ToastConfig);
    default(message: any, title?: any): void;
    success(message: any, title?: any): void;
    info(message: any, title?: any): void;
    warning(message: any, title?: any): void;
    error(message: any, title?: any): void;
    private setToast();
}
