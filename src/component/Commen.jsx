// import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default async function sweetAlertMsg(title, text, icon, withCancel = 'nocancel', confirmText = 'Ok', cancelText = "Cancel") {
    var cancel = (withCancel === 'cancel') ? 0 : 1;
    const result = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: !cancel,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#f46a6a",
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
    });
    return result.isConfirmed;
}