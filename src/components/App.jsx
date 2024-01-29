import React, { Component } from "react";
// import axios from 'axios';
// import { Hourglass } from 'react-loader-spinner'
// import imagesRequest from '../components/API/Api';
import getAllPics from "./API";
import Searchbar from "./Searchbar";
// import Posts from './Posts';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';

export class App extends Component {
  
  state = {
    images: [],
    loading: false,
    error: null,
  }

  async componentDidMount(){
    this.setState({
      loading: true,
    })

    try {
      const {data} = await getAllPics();
      this.setState({
              images: data.hits?.length ? data.hits : [],
            })
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
}



  render() {
    // console.log(this.state);
  const {images, loading, error} = this.state;
  // console.log({images});
  return (
    <div>
      <Searchbar></Searchbar>
      {/* <Posts></Posts> */}
      {error && <p style={{ color: 'red' } }>{error}</p>}
      {loading && <Loader />}
      <ImageGallery>
        <ImageGalleryItem imageGalleryItems = {images} />
      </ImageGallery>
      {/* <ImageGalleryItem imageGallery = {images} />
      <Loader>4</Loader>
      <Button>5</Button>
      <Modal>6</Modal> */}
    </div>
    
  );
}};
