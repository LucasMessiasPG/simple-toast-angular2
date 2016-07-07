declare module "simple-toast-angular2/src/simple-toast.component" {
    export class SimpleToastComponent {
        constructor();
    }
}
declare module "simple-toast-angular2/src/toast" {
    export class Toast {
        type: any;
        message: any;
        title: any;
        constructor(type: any, message: any, title: any);
    }
}
declare module "simple-toast-angular2" {
    export * from "simple-toast-angular2/src/simple-toast.component";
    export * from "simple-toast-angular2/src/toast";
}
