import React, { Component } from "react";

import styles from "./Modal.module.css";

class Modal extends Component {
    state={

    }
    render() {
        return(
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <button type="button"><h3>sssssss</h3></button>
                </div>
            </div>
        )
    }
}

export default Modal;