import React from "react"


function Modal({ children, modalTitle, modalWidth, modalid }) {

    return (
        <div className="contant-body">
            <div className="modal fade" id={`${modalid}`} tabindex="-1" aria-labelledby={`${modalid}`} aria-hidden="true">
                <div className={`modal-dialog ${modalWidth}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${modalid}`}>{modalTitle}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Modal;