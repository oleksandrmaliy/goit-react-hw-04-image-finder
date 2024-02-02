import React, {Component} from "react";

import styles from "./Searchbar.module.css";
class Searchbar extends Component {
    state = {
        search: "",
    }

    handleChange = ({target}) => {
      const {name, value} = target;
      this.setState({
        [name]: value,
      })
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit({...this.state});
      this.setState({
          search: "",
        })
    };

    render(){
      const { handleChange, handleSubmit } = this;
      const { search } = this.state;

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
   )}}
   
export default Searchbar;