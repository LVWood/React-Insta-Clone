import React from 'react';
import InstagramLogos from './InstagramLogos/InstagramLogos';
import SearchForm from './SearchForm/SearchForm';
import Icons from './Icons/Icons';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <InstagramLogos />
            <SearchForm />
            <Icons />
        </div>
    )
}

export default SearchBar;