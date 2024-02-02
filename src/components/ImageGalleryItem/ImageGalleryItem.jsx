import React, { Component } from "react";

import styles from "./ImageGalleryItem.module.css";
class ImageGalleryItem extends Component {
  render(){
    const {imageGalleryItems, sModal} = this.props;
    const smallPicsSet = imageGalleryItems.map(({id, webformatURL, largeImageURL}) => 
        <li key={id} onClick={() => sModal({largeImageURL})} className={styles.ImageGalleryItem}>
            <img src={webformatURL} alt="Ooops, no data" className={styles.ImageGalleryItemImage}/>
        </li>);

    return(
      <>
      {smallPicsSet}
      </>
    )
}};

export default ImageGalleryItem;


