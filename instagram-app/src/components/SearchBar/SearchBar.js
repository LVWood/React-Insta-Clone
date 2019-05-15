import React from 'react';
import InstagramLogos from './InstagramLogos/InstagramLogos';
import SearchForm from './SearchForm/SearchForm';
import Icons from './Icons/Icons';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-container">
            <InstagramLogos />
            <SearchForm 
                handleChanges={props.handleChanges}
                filterSearch={props.filterSearch}
                search={props.search} />
            <Icons />
        </div>
    )
}

export default SearchBar;