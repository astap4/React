import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import People from './components/People/People';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/loader';
import './styles/app.css';

export default function App() {
  const [people, setPeople] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  const fetchPeople = async () => {
    setIsDataLoading(true);
    try {
      const response = await PostService.getAll();
      setPeople(response.data.results);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsDataLoading(isDataLoading);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className="app-wrapper">
      <Search setSearchItem={setSearchItem} />
      {isDataLoading ? (
        <Loader></Loader>
      ) : (
        <People people={people} searchItem={searchItem} />
      )}
    </div>
  );
}
