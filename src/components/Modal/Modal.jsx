import React, { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");
console.log(modalRoot);
const documentBody = document.getElementsByTagName('body')[0];
console.log(documentBody);

class Modal extends Component {

    componentDidMount(){
        document.addEventListener("keydown", this.closeModal);
        // documentBody.style.overflow = 'hidden';
        // documentBody.classList.add('scrollHidden');
        this.hideBodyOverflow();
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.closeModal);
        // documentBody.style.overflow = null;
        // documentBody.classList.remove('scrollHidden');
        this.showBodyOverflow();
    }

    showBodyOverflow = () => {
        // documentBody.style.overflow = null;
        documentBody.classList.remove('scrollHidden');
      };
      
    hideBodyOverflow = () => {
        // documentBody.style.overflow = 'hidden';
        documentBody.classList.add('scrollHidden');
      };

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