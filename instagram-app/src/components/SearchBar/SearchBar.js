import React from 'react';
import InstagramLogos from './InstagramLogos';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <InstagramLogos />
            <SearchForm />
            <Icons />
        </div>
    )
}

export default SearchBar;