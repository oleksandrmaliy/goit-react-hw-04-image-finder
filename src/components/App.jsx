import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Posts from './Posts';

export class App extends Component {
  
  state = {

  }

  render() {
    
  
  return (
    <div>
      React homework template
      <Searchbar></Searchbar>
      <Posts></Posts>
      {/* <ImageGallery>2</ImageGallery>
      <ImageGalleryItem>3</ImageGalleryItem>
      <Loader>4</Loader>
      <Button>5</Button>
      <Modal>6</Modal> */}
    </div>
    
  );
}};
