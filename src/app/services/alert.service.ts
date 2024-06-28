import { Injectable } from '@angular/core';
// import swal, { SweetAlertOptions} from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toaster: ToastrService) { }

  // showAlert(alertText, alertType, outsideClick: boolean = true, timer?: number) {
  //   const swalOptions: SweetAlertOptions = {
  //     text: alertText,
  //      icon: alertType,
  //     allowOutsideClick: outsideClick,
  //     showConfirmButton: false
  //   };
  //   if (timer) {
  //     swalOptions.timer = timer;
  //   }
  //   swalOptions.timer = 2000;
  //   return swal.fire(swalOptions);
  // }

  msg( toasterType, message, title ) {
    const inst = this.toaster;
    switch (toasterType) {
      case 'success':
        inst.success(message, title);
        break;
      case 'error':
        inst.error(message, title);
        break;
      case 'info':
        inst.info(message, title);
        break;
      case 'warning':
        inst.warning(message, title);
        break;
      default:
        inst.info(message, title);
        break;
    }
    // inst.success(message, title);
  }

  showSuccess(message, title = 'Success') {
    this.msg('success', message, title);
  }

  showError(message, title = 'Error') {
    this.msg('error', message, title);
  }

  showInfo(message, title = 'Info') {
    this.msg('info', message, title);
  }

  showWarning(message, title = 'Warning') {
    this.msg('warning', message, title);
  }

  showAlert(text, type, outsideClick: boolean = false) {
    return Swal.fire({
        icon: type,
        title: text,
        allowOutsideClick: outsideClick
    });
}
}
