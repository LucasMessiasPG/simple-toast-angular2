///<amd-module name="simple-toast-angular2/src/toast"/>
import {Injectable,EventEmitter} from "@angular/core";
@Injectable()
export class Toast{
    public toast$: EventEmitter<any> = new EventEmitter();
    private type;
    private message;
    private title;

    constructor(){
        this.title = 'Aviso';
    }

    public setTitleDefault(tilte){
        if(typeof tilte == 'string')
            this.title = tilte;
        else
            throw('Erro: title is not a string')
    }

    public default(message, title?){
        this.type = 'default'
        this.message = message;
        if(title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }
    public success(message, title?){
        this.type = 'success'
        this.message = message;
        if(title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }
    public info(message, title?){
        this.type = 'info'
        this.message = message;
        if(title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }
    public warning(message, title?){
        this.type = 'warning'
        this.message = message;
        if(title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }
    public error(message, title?){
        this.type = 'error'
        this.message = message;
        if(title)
            this.title = title;
        this.toast$.emit(this.setToast());
    }
    
    private setToast() {
        return {
            type: this.type,
            message: this.message,
            title: this.title
        }
    }
}