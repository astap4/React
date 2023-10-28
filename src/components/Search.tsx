import React from 'react';

interface SearchState {
  searchValue: string;
}

export default class Search extends React.Component {
  state: SearchState = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  handleSearch = () => {
    localStorage.setItem('searchValue', this.state.searchValue);
  };

  componentDidMount() {
    const savedSearchValue = localStorage.getItem('searchValue');
    if (savedSearchValue) {
      this.setState({ searchValue: savedSearchValue });
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target?.value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchValue}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleSearch}>Search</button>
      </form>
    );
  }
}
