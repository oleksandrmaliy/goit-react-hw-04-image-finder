import React, { useState, useEffect } from "react";

import styles from './App.module.css'

import getSearchPics from "./API";
import Searchbar from "./Searchbar";
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button';
import Modal from "./Modal";

const App = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [imageData, setImageData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [button, setButton] = useState(false);
  
  const handleSearch = (search) => {
    setSearch(search);
    setImages([]);
    setPage(1);
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  const showModal = ({largeImageURL}) => {
    setModalOpen(true);
    setImageData(largeImageURL);
  }

  const closeModal = () => {
      setModalOpen(false);
      setImageData(null);
  }
    
  useEffect(() => {
   
    const fetchImages = async () => {
      try {
        setLoading(true);
        const {data} = await getSearchPics(search, page);
        setImages(data.hits?.length ? [...images, ...data.hits] : images);
        setButton(data.hits?.length === 12 ? true : false);
      }
      catch(error){
        setError(error.message);
      }
      finally{
        setLoading(false);
      }
    }
     if(search){
      fetchImages();
     }
  }, [search, page]);

  return (
    <div className={styles.App}>
      <Searchbar onSubmit = {handleSearch} />
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {loading && <Loader />}
      {(!loading & !images.length) ? 
      (<p style={{ color: 'red', textAlign: 'center' }}>No photo to show</p>) : 
      (<ImageGallery>
        <ImageGalleryItem imageGalleryItems = {images} sModal = {showModal}/>
      </ImageGallery>)}
      {button && <Button onClick={loadMore} type='button'>Load more</Button>}
      {modalOpen && <Modal close={closeModal}>
        <img src={imageData} alt="Big view" />
        </Modal>}
    </div>
  );
};

export default App;