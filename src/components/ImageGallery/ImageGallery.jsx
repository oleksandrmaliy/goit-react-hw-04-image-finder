import React, { Component } from "react";

import styles from "./ImageGallery.module.css";
class ImageGallery extends Component {
  render(){
    const children = this.props.children;
     return(
    <div>
        <ul className={styles.ImageGallery}>
            {children}
        </ul>
    </div>
    )
}};

export default ImageGallery;