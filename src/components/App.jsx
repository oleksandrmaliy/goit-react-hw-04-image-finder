import React, { useState, useEffect, useRef } from "react";

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
  
  // state = {
  //   images: [],
  //   loading: false,
  //   error: null,
  //   search: "",
  //   page: 1,
  //   imageData: null,
  //   modalOpen: false,
  //   button: false,
  // }

  const handleSearch = (search) => {
    setSearch(search);
    setImages([]);
    setPage(1);

    // this.setState({
    //   search,
    //   images: [],
    //   page: 1,
    // })
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);

    // this.setState(({page}) => ({page: page + 1}))
  }

  const showModal = ({largeImageURL}) => {
    setModalOpen(true);
    setImageData(largeImageURL);

    // this.setState({
    //     modalOpen: true,
    //     imageData: largeImageURL,
    //   })
  }

  const closeModal = () => {
      setModalOpen(false);
      setImageData(null);

    // this.setState({
    //     modalOpen: false,
    //     imageData: null,
    // })
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

    //   }
  // }

  // componentDidUpdate(_, prevState){
  //   const {search, page, images} = this.state;

  //   if(search && (search !== prevState.search || page !== prevState.page)){
  //     this.setState({
  //       loading: true,
  //       button: false,
  //     })

  //   getSearchPics(search, page)
  //     .then(({data}) => {
  //       this.setState({
  //         images: data.hits?.length ? [...images, ...data.hits] : images,
  //         button: (data.hits?.length === 12) ? true : false,
  //       })
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error: error.message,
  //       })
  //   })
  //     .finally(()=>{
  //       this.setState({
  //         loading: false,
  //     })
  //   })
  // }};

  // render() {
  //   const {handleSearch, loadMore, showModal, closeModal} = this;
  //   const {images, loading, error, modalOpen, imageData, button } = this.state;
 
  return (
    <div className={styles.App}>
      <Searchbar onSubmit = {handleSearch} />
      {error && <p style={{ color: 'red' } }>{error}</p>}
      {loading && <Loader />}
      <ImageGallery>
        <ImageGalleryItem imageGalleryItems = {images} sModal = {showModal}/>
      </ImageGallery>
      {button && <Button onClick={loadMore} type='button'>Load more</Button>}
      {modalOpen && <Modal close={closeModal}>
        <img src={imageData} alt="Big Wiew" />
        </Modal>}
    </div>
  );
};

export default App;