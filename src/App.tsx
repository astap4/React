import React from 'react';
import './App.css';
import Search from './components/Search';
import People from './components/People/People';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/loader';
import './styles/app.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
export default class App extends React.Component {
  state = {
    people: [],
    isDataLoading: false,
    searchItem: '',
  };

  async fetchPeople() {
    this.setState({ isDataLoading: true });
    try {
      const response = await PostService.getAll();
      this.setState({ people: response.data.results });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    this.setState({ isDataLoading: false });
  }

  componentDidMount() {
    this.fetchPeople();
  }

  setSearchItem = (searchValue: string) => {
    this.setState({ searchItem: searchValue });
  };

  render() {
    return (
      <div className="app-wrapper">
        <Search setSearchItem={this.setSearchItem} />
        {this.state.isDataLoading ? (
          <Loader></Loader>
        ) : (
          <People
            people={this.state.people}
            searchItem={this.state.searchItem}
          />
        )}
      </div>
    );
  }
}
