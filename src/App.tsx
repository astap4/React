import React from 'react';
import './App.css';
import Search from './components/Search';
import People from './components/People';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/loader';
import './styles/app.css';
export default class App extends React.Component {
  state = {
    people: [],
    isDataLoading: false,
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

  render() {
    return (
      <div className="app-wrapper">
        <Search />
        {this.state.isDataLoading ? (
          <Loader></Loader>
        ) : (
          <People people={this.state.people} />
        )}
      </div>
    );
  }
}
