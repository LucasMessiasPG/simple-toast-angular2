///<amd-module name="simple-toast-angular2/simple-toast-angular2"/>
export class Toast{
    public type;
    public message;
    public title;
    constructor(type, message, title){
        this.type = type;
        this.message = message;
        this.title = title;
    }
    
}