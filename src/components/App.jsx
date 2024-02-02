import React, { Component } from "react";

import styles from './App.module.css'

import getSearchPics from "./API";
import Searchbar from "./Searchbar";
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button';
import Modal from "./Modal";

export class App extends Component {
  
  state = {
    images: [],
    loading: false,
    error: null,
    search: "",
    page: 1,
    imageData: null,
    modalOpen: false,
    button: false,
  }

  handleSearch = ({search}) => {
    this.setState({
      search,
      images: [],
      page: 1,
    })
  }

  loadMore = () => {
    this.setState(({page}) => ({page: page + 1}))
  }

  showModal = ({largeImageURL}) => {
    this.setState({
        modalOpen: true,
        imageData: largeImageURL,
      })
  }

  closeModal = () => {
    this.setState({
        modalOpen: false,
        imageData: null,
    })
  }

  componentDidUpdate(_, prevState){
    const {search, page, images} = this.state;

    if(search && (search !== prevState.search || page !== prevState.page)){
      this.setState({
        loading: true,
        button: false,
      })

    getSearchPics(search, page)
      .then(({data}) => {
        this.setState({
          images: data.hits?.length ? [...images, ...data.hits] : images,
          button: (data.hits?.length === 12) ? true : false,
        })
      })
      .catch(error => {
        this.setState({
          error: error.message,
        })
    })
      .finally(()=>{
        this.setState({
          loading: false,
      })
    })
  }};

  render() {
    const {handleSearch, loadMore, showModal, closeModal} = this;
    const {images, loading, error, modalOpen, imageData, button } = this.state;
 
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
}};