import React, { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");
const documentHTML = document.getElementsByTagName('HTML')[0];
class Modal extends Component {

    componentDidMount(){
        document.addEventListener("keydown", this.closeModal);
        documentHTML.style.overflow = 'hidden';
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.closeModal);
        documentHTML.style.overflow = null;
    }

    closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape"){
            this.props.close()
        }
    }
    
     render() {
        const {closeModal} = this;
        const {children, close} = this.props;
        return createPortal(
            (<div onClick={closeModal} className={styles.overlay}>
                <div className={styles.modal}>
                    {children}
                    <button onClick={close} className={styles.closeButton} type="button"></button>
                </div>
            </div>),
            modalRoot
        )
    }
}

export default Modal;