import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");
const documentHTML = document.getElementsByTagName('HTML')[0];

const Modal = (props) => {

    const {children, close} = props;

    useEffect(() => {
        document.addEventListener("keydown", closeModal);
        documentHTML.style.overflow = 'hidden';

        return () => {
            document.removeEventListener("keydown", closeModal);
            documentHTML.style.overflow = null;
        } 
    }, []);

    // componentDidMount(){
    //     document.addEventListener("keydown", closeModal);
    //     documentHTML.style.overflow = 'hidden';
    // }

    // useEffect(() => {
    //     document.removeEventListener("keydown", closeModal);
    //     documentHTML.style.overflow = null;
    // }, [])

    // componentWillUnmount(){
    //     document.removeEventListener("keydown", closeModal);
    //     documentHTML.style.overflow = null;
    // }

    const closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape"){
            props.close()
        }
    }
    
    // const {children, close} = props;
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

export default Modal;