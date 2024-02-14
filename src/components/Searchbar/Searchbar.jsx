import React, {useState} from "react";

import styles from "./Searchbar.module.css";

const Searchbar = (props) => {

  const [search, setSearch] = useState('');

    const handleChange = ({target}) => {
      // const {name, value} = target;
      setSearch(target.value);
      // this.setState({
      //   [name]: value,
      // })
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit(search);
      console.log(search);
      setSearch('');
      // this.setState({
      //     search: "",
      //   })
    };

    // render(){
    //   const { handleChange, handleSubmit } = this;
    //   const { search } = this.state;

    return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button id="submitButton" type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
          name="search"
          value={search}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </form>
    </header>
   )}
   
export default Searchbar;