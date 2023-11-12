import './search.css';
import React, { useEffect, useState } from 'react';
interface SearchProps {
  setSearchItem: (searchValue: string) => void;
}

export default function Search({ setSearchItem }: SearchProps) {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  const handleSearch = () => {
    localStorage.setItem('inputValue', inputValue);
    setSearchItem(inputValue);
  };

  useEffect(() => {
    const savedSearchValue = localStorage.getItem('inputValue');
    if (savedSearchValue) {
      setInputValue(savedSearchValue);
      setSearchItem(savedSearchValue);
    }
  }, [setSearchItem]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value.trim().toLowerCase();
    setInputValue(value || '');
  };

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
        className="input-search"
      ></input>
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
}
