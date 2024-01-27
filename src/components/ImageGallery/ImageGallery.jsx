import React, { Component } from "react";

import styles from "./ImageGallery.module.css";


class ImageGallery extends Component {
    state = {

    }
render(){
    const smallPics = this.props.imageGallery;
    console.log(smallPics);
    const smallPicsSet = smallPics.map(({id, webformatURL, largeImageURL}) => 
        // <li >
        //    <img src={webformatURL} alt="aaa" />
        // </li>
        <li key={id} className={styles.ImageGalleryItem}>
            <img src={webformatURL} alt="Very good" className={styles.ImageGalleryItemImage}/>
        </li>);
    return(
    <div>
        <ul className={styles.ImageGallery}>
            {smallPicsSet}
        </ul>
    </div>
    )
}};

export default ImageGallery;