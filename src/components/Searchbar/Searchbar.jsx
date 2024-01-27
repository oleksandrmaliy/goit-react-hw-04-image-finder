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

import styles from "./Searchbar.module.css";



class Searchbar extends Component {
    state = {
        
    }



    render(){
        // const { name, number } = this.state;
    return (
<header className={styles.Searchbar}>
  <form className={styles.SearchForm}>
    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
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