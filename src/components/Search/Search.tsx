import './search.css';
import React, { useEffect, useState } from 'react';
interface SearchProps {
  setSearchItem: (searchValue: string) => void;
}

export default function Search(props: SearchProps) {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  const handleSearch = () => {
    localStorage.setItem('searchValue', searchValue);
    props.setSearchItem(searchValue);
  };

  useEffect(() => {
    const savedSearchValue = localStorage.getItem('searchValue');
    if (savedSearchValue) {
      setSearchValue(savedSearchValue);
      props.setSearchItem(searchValue);
    }
  }, [props.setSearchItem]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target?.value);
  };

  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
        className="input-search"
      ></input>
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}
