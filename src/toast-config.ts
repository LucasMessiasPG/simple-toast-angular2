///<amd-module name="simple-toast-angular2/src/toast-config"/>
import {Injectable} from "@angular/core";
@Injectable()
export class ToastConfig{
    
    private _title = 'Aviso';
    private _timer = 4000;


    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }

    get timer():number {
        return this._timer;
    }

    set timer(value:number) {
        this._timer = value;
    }
}