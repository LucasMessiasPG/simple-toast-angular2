import { EventEmitter } from "@angular/core";
export declare class Toast {
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
