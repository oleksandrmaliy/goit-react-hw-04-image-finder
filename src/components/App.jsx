import React, { Component } from "react";
import axios from 'axios';
// import imagesRequest from '../components/API/Api';
import Searchbar from "./Searchbar";
// import Posts from './Posts';
import ImageGallery from './ImageGallery'

export class App extends Component {
  
  state = {
    images: [],
  }

  componentDidMount(){
    axios.get('https://pixabay.com/api/?q=girl&page=1&key=36683079-f7ca8efdb46bf14669a93b6f2&image_type=photo&orientation=horizontal&per_page=12')
    .then(({data})=>{
      this.setState({images: data.hits});
  }
);
// imagesRequest();
  }

  render() {
    // console.log(this.state);
  const {images} = this.state;
  // console.log({images});
  return (
    <div>
      <Searchbar></Searchbar>
      {/* <Posts></Posts> */}
      <ImageGallery imageGallery = {images} />
      {/* <ImageGalleryItem>3</ImageGalleryItem>
      <Loader>4</Loader>
      <Button>5</Button>
      <Modal>6</Modal> */}
    </div>
    
  );
}};
