import React, { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { searchQuery, value } = e.currentTarget;
    this.setState({ [searchQuery]: value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.value.trim() === '') {
      alert(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({
      searchQuery: '',
    });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={this.searchQuery}
            name="name"
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
