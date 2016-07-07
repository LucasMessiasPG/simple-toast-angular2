import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <div class="home">
        <h1>Simple Toast Angular 2</h1>
        <ul>
          <li><button (click)="toast()">Default</button></li>
          <li><button (click)="toast('success')" class="success">Success</button></li>
          <li><button (click)="toast('info')" class="info">Info</button></li>
          <li><button (click)="toast('warning')" class="warning">Warning</button></li>
          <li><button (click)="toast('error')" class="error">Error</button></li>
        </ul>
    </div>
    `,
    styles: [`
    .home{
        max-width: 1200px;
        margin: 0 auto;
        background-color: rgba(0,0,100,.1);
        padding: 10px 35px;
        min-height: 500px;
    }
    .home ul{
        margin:10px 10px;
        list-style: none;
    }
    .home ul li{
        display: inline-block;
    }
    button{
        -webkit-border-radius: 28;
        -moz-border-radius: 28;
        border-radius: 28px;
        -webkit-box-shadow: 0px 1px 3px #666666;
        -moz-box-shadow: 0px 1px 3px #666666;
        box-shadow: 0px 1px 3px #666666;
        font-family: Courier New;
        cursor: pointer;
        font-size: 14px;
        padding: 10px 20px 10px 20px;
        text-decoration: none;
        border-style: none;
    }
    button:hover{
        background: rgba(255,255,255,.2) !important;
    }
    button:hover.success{
        background: #34d976 !important;
    }
    button:hover.info{
        background: #3476d9 !important;
    }
    button:hover.warning{
        background: #d9b834 !important;
    }
    button:hover.error{
        background: #d93f34 !important;
    }
    button.success{
        color: #ffffff; 
        background: #34d976;
        background-image: -webkit-linear-gradient(top, #34d976, #2bb834);
        background-image: -moz-linear-gradient(top, #34d976, #2bb834);
        background-image: -ms-linear-gradient(top, #34d976, #2bb834);
        background-image: -o-linear-gradient(top, #34d976, #2bb834);
        background-image: linear-gradient(to bottom, #34d976, #2bb834);
    }
    button.info{
        color: #ffffff; 
        background: #3476d9;
        background-image: -webkit-linear-gradient(top, #3476d9, #2c38b8);
        background-image: -moz-linear-gradient(top, #3476d9, #2c38b8);
        background-image: -ms-linear-gradient(top, #3476d9, #2c38b8);
        background-image: -o-linear-gradient(top, #3476d9, #2c38b8);
        background-image: linear-gradient(to bottom, #3476d9, #2c38b8);
    }
    button.warning{
        color: #ffffff;
        background: #d9b834;
        background-image: -webkit-linear-gradient(top, #d9b834, #b8642c);
        background-image: -moz-linear-gradient(top, #d9b834, #b8642c);
        background-image: -ms-linear-gradient(top, #d9b834, #b8642c);
        background-image: -o-linear-gradient(top, #d9b834, #b8642c);
        background-image: linear-gradient(to bottom, #d9b834, #b8642c);
    }
    button.error{
        color: #ffffff;
        background: #d93f34;
        background-image: -webkit-linear-gradient(top, #d93f34, #b82c2c);
        background-image: -moz-linear-gradient(top, #d93f34, #b82c2c);
        background-image: -ms-linear-gradient(top, #d93f34, #b82c2c);
        background-image: -o-linear-gradient(top, #d93f34, #b82c2c);
        background-image: linear-gradient(to bottom, #d93f34, #b82c2c);
    }
    `]
})
export class AppComponent {

    toast(type){
        switch (type){
            case 'success':
                console.log('success')
                break;
            case 'info':
                console.log('info')
                break;
            case 'warning':
                console.log('warning')
                break;
            case 'error':
                console.log('error')
                break;
            default:
                console.log('default')
                break;
        }
    }
}
