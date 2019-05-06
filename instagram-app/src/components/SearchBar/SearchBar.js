import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="left-logos">
                <img src="" alt="logo"></img>
                <p>|</p>
                <img src="" alt="textlogo"></img>
            </div>

            <div className="input-container">
                <input type="text" value="" placeholder="search" />
            </div>
            <div className="right-logos">
                <img src="" alt="compass"></img>
                <img src="" alt="heart"></img>
                <img src="" alt="person"></img>
            </div>
            
        </div>
    )
}

export default SearchBar;