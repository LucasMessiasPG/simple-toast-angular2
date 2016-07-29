import { Toast } from "./toast";
export declare class ToastComponent {
    private toast$;
    private list_toast;
    constructor(toastService: Toast);
    private getToast(toast);
    private remove(toast);
}
