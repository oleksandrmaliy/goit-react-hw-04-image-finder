import React, { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");
console.log(modalRoot);

class Modal extends Component {
     render() {
        const {children} = this.props;
        return createPortal(
            (<div className={styles.overlay}>
                <div className={styles.modal}>
                    {children}
                    <button className={styles.closeButton} type="button"></button>
                </div>
            </div>),
            modalRoot
        )
    }
}

export default Modal;