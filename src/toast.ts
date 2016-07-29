///<amd-module name="simple-toast-angular2/src/toast"/>
import {Injectable, EventEmitter, Optional} from "@angular/core";
import {ToastConfig} from "simple-toast-angular2/src/toast-config";

@Injectable()
export class Toast {
    public toast$:EventEmitter<any> = new EventEmitter();
    private type;
    private message;
    private title;
    private timer = 4000;
    private config;

    constructor(@Optional() _toastConfig:ToastConfig) {
        if (_toastConfig)
            this.config = _toastConfig;
    }

    public default(message, title?) {
        this.type = 'default'
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }

    public success(message, title?) {
        this.type = 'success'
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }

    public info(message, title?) {
        this.type = 'info'
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }

    public warning(message, title?) {
        this.type = 'warning'
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }

    public error(message, title?) {
        this.type = 'error'
        this.message = message;
        if (title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }

    private setToast() {
        return {
            type: this.type,
            message: this.message,
            title: (this.title) ? this.title : (this.config && this.config.title) ? this.config.title : 'Aviso',
            timer: (this.config && this.config.timer) ? this.config.timer : this.timer
        }
    }
}