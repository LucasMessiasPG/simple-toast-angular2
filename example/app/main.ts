import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {Toast} from "simple-toast-angular2/simple-toast-angular2";
import {ToastConfig} from "simple-toast-angular2/src/toast-config";
bootstrap(AppComponent,[ToastConfig]);

