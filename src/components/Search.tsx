import React from 'react';
interface SearchProps {
  setSearchItem: (searchValue: string) => void;
}

export default class Search extends React.Component<SearchProps> {
  state = {
    searchValue: localStorage.getItem('searchValue') || '',
    postsList: [],
  };

  handleSearch = () => {
    localStorage.setItem('searchValue', this.state.searchValue);
    this.props.setSearchItem(this.state.searchValue);
  };

  componentDidMount() {
    const savedSearchValue = localStorage.getItem('searchValue');
    if (savedSearchValue) {
      this.setState({ searchValue: savedSearchValue });
      this.props.setSearchItem(this.state.searchValue);
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target?.value });
  };

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
