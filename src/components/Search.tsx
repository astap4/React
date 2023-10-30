import React from 'react';
interface SearchState {
  searchValue: string;
  postsList: [];
}

export default class Search extends React.Component {
  state: SearchState = {
    searchValue: localStorage.getItem('searchValue') || '',
    postsList: [],
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

  onSearch() {}

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchValue}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleSearch}>Search</button>
        </form>
      </div>
    );
  }
}
