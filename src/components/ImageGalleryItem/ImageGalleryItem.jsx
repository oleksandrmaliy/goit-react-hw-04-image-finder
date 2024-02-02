import React, { Component } from "react";

import styles from "./ImageGalleryItem.module.css";


class ImageGalleryItem extends Component {
    state = {

    }
render(){
    const {imageGalleryItems, sModal} = this.props;
    // const {sModal} = this.props;
    // console.log(smallPics);
    const smallPicsSet = imageGalleryItems.map(({id, webformatURL, largeImageURL}) => 
        <li key={id} onClick={() => sModal({largeImageURL})} className={styles.ImageGalleryItem}>
            <img src={webformatURL} alt="Ooops, no data" className={styles.ImageGalleryItemImage}/>
        </li>);
        console.log(smallPicsSet);
    return(
      <>
      {smallPicsSet}
      </>
    )
}};

export default ImageGalleryItem;


