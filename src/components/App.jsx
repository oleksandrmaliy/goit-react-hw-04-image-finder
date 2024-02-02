import React, { Component } from "react";
// import axios from 'axios';
// import { Hourglass } from 'react-loader-spinner'
// import imagesRequest from '../components/API/Api';
// import getAllPics from "./API/Request";
import styles from './App.module.css'
import getSearchPics from "./API/RequestSearch";
import Searchbar from "./Searchbar";
// import Posts from './Posts';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button';
import Modal from "./Modal/Modal";
// import Modal from './Modal';

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

  closeModal = (e) => {
    this.setState({
        modalOpen: false,
        imageData: null,
    })
  }


  // async componentDidMount(){
  //   this.setState({
  //     loading: true,
  //   })

  //   try {
  //     const {data} = await getAllPics();
  //     this.setState({
  //             images: data.hits?.length ? data.hits : [],
  //           })
  //   }
  //   catch(error) {
  //     this.setState({
  //             error: error.message,
  //           })
  //   }
  //   finally {
  //     this.setState({
  //           loading: false,
  //         })
  //   }
  // }

  async componentDidUpdate(_, prevState){
    const {search, page} = this.state;

    // if(images < 12 || images.length === prevState.images.length){
    //   this.setState({
    //     button: true,
    //   })
    // }

    if(search && (search !== prevState.search || page !== prevState.page)){
      this.setState({
        loading: true,
      })
    
      try {
        const {data} = await getSearchPics(search, page);
        this.setState(({images}) => ({
          images: data.hits?.length ? [...images, ...data.hits] : images,
          button: (data.hits?.length === 12) ? true : false,
        }))
      }
      catch(error) {
        this.setState({
                error: error.message,
              })
      }
      finally {
        this.setState({
              loading: false,
            })
      }
    }
    
}

    // getAllPics()
    // .then(({data}) => {
    //     this.setState({
    //       images: data.hits?.length ? data.hits : [],
    //     })
    //   })
    // .catch(error => {
    //   console.log('aaa', error);
    //     this.setState({
    //       error: error.message,
    //     })
    // })
    // .finally(()=>{
    //   this.setState({
    //     loading: false,
    //   })
    // })

    // const isImages = Boolean(images.length);


  render() {
    const {handleSearch, loadMore, showModal, closeModal} = this;
    // console.log(this.state);
  const {images, loading, error, modalOpen, imageData, button } = this.state;
  // const isImages = Boolean(images.length);
  // console.log({images});
  return (
    <div className={styles.App}>
      <Searchbar onSubmit = {handleSearch} />
      {/* <Posts></Posts> */}
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
