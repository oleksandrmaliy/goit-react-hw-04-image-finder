import React, { Component } from "react";

import styles from "./ImageGalleryItem.module.css";


class ImageGalleryItem extends Component {
    state = {

    }
render(){
    const smallPics = this.props.imageGalleryItems;
    // console.log(smallPics);
    const smallPicsSet = smallPics.map(({id, webformatURL, largeImageURL}) => 
        <li key={id} className={styles.ImageGalleryItem}>
            <img src={webformatURL} alt="Very good" className={styles.ImageGalleryItemImage}/>
        </li>);
        console.log(smallPicsSet);
    return(
      <>
      {smallPicsSet}
      </>
    )
}};

export default ImageGalleryItem;


