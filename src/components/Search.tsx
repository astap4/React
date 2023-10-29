import axios from 'axios';
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

  async fetchPosts(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      console.log('Hello');
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log('response', response.data);
      this.setState({ postsList: response.data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

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
