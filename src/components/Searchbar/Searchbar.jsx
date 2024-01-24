import React, {Component} from "react";
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import { Formik, ErrorMessage } from "formik";
// import * as yup from 'yup';
// import {} from './Form.styled'
// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number().min(1000000).max(9999999).integer().required(),
// })





class Searchbar extends Component {
    state = {
        
    }



    render(){
        // const { name, number } = this.state;
    return (
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>

   )}}
   
export default Searchbar;

// Searchbar.propTypes = {
//     //  addContact: PropTypes.func.isRequired,
//      };


     
// const key = 36683079-f7ca8efdb46bf14669a93b6f2;

// const zzz = 'https:/pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';