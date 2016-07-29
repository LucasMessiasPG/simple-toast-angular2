///<amd-module name="simple-toast-angular2/src/simple-toast.component"/>
import {Component,EventEmitter} from "@angular/core";
import {Toast} from "./toast";
import {ToastConfig} from "simple-toast-angular2/src/toast-config";
@Component({
    selector:'simple-toast',
    providers:[ToastConfig],
    template:`
    <div class="toast" [ngClass]="toast.type"  *ngFor="let toast of list_toast; let i = index">
        <div *ngIf="(toast && toast.message)" class="toast-component" (click)="remove(toast)">
            <div class="toast-text">
                <h3 class="toast-title">{{ toast.title }}</h3>
                <p class="toast-message">{{toast.message}}</p>
            </div> 
            <div class="toast-icon">
                <i *ngIf="toast.type == 'default'" class="fa fa-info-circle"></i>
                <i *ngIf="toast.type== 'success'" class="fa fa-check-circle"></i>
                <i *ngIf="toast.type == 'error'" class="fa fa-exclamation-triangle"></i>
                <i *ngIf="toast.type == 'info'" class="fa fa-info-circle"></i>
                <i *ngIf="toast.type == 'warning'" class="fa fa-exclamation-circle"></i>
            </div>
        </div>
    </div>
    `,
    styles:[`
    .toast{
      background-color: rgba(0,0,0,.4);
      width: 250px;
      color: white;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0,0,0,.4);
      padding: 5px;
      position: absolut;
      margin-bottom: 10px;
      margin-top: 10px;
      cursor: pointer;
    }
    
    .toast.default{
      background-color: rgba(255,255,255,.4);
      color: #000;
    }
    
    .toast.success{
      background-color: #51a351;
      color: #fff;
    }
    
    .toast.error{
      background-color: #bd362f;
      color: #fff;
    }
    
    .toast.info{
      background-color: #2f96b4;
      color: #fff;
    }
    
    .toast.warning{
      background-color: #f89406;
      color: #fff;
    }
    .toast-component > div {
        display: inline-block;
    }
    .toast-text .toast-title{
        font-size: 18px;
        margin: 0px 50px;
        width: 98px;
        text-align: center;
    }
    .toast-text .toast-message{
        font-size: 14px;
        line-height: 14px;
        width: 199px;
        margin: 0;
    }
    .toast-icon{
        font-size: 40px;
        display: inline-block;
        top: 2px;
        position: absolute;
        right: 10px;
    }
    `]
})
export class ToastComponent{
    private toast$: EventEmitter<any>;
    private list_toast = [];
    constructor(toastService:Toast){
        this.toast$ = toastService.toast$;
        this.toast$.subscribe(toast => this.getToast(toast))
    }
    private getToast(toast:any) {
        this.list_toast.push(toast);
        var timeOut = toast.timer;
        setTimeout(() => { this.remove(toast) },timeOut)
    }

    private remove(toast:any) {
        this.list_toast.splice(this.list_toast.indexOf(toast),1);
    }
}