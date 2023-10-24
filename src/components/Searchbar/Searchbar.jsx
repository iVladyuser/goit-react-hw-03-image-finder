import React, { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styles';

export class Searchbar extends Component {
  state = {};

  render() {
    return (
      <SearchbarHeader>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images
            and photos"
          ></SearchFormInput>
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
