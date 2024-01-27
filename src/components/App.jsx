import React, { Component } from "react";
// import axios from 'axios';
// import imagesRequest from '../components/API/Api';
import getAllPics from "./API";
import Searchbar from "./Searchbar";
// import Posts from './Posts';
import ImageGallery from './ImageGallery'

export class App extends Component {
  
  state = {
    images: [],
    loading: false,
    error: null,
  }

  componentDidMount(){
    this.setState({
      loading: true,
    })
    getAllPics()
    .then(({data}) => {
        this.setState({
          images: data.hits?.length ? data.hits : [],
        })
      })
    .catch(error => {
      console.log('aaa', error);
        this.setState({
          error: error.message,
        })
    })
    .finally(()=>{
      this.setState({
        loading: false,
      })
    })
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
      {loading && <p>...Loading</p>}
      <ImageGallery imageGallery = {images} />
      {/* <ImageGalleryItem>3</ImageGalleryItem>
      <Loader>4</Loader>
      <Button>5</Button>
      <Modal>6</Modal> */}
    </div>
    
  );
}};
