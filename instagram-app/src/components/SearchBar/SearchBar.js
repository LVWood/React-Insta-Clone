import React from 'react';
import compass from './compass.png';
import Instagram_text_logo from './Instagram_text_logo.png';
import Instagram_simple_icon from './Instagram_simple_icon.png';
import open_heart from './open_heart.png';
import person from './person.png';


import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="left-logos">
                <img className="img-logo" src={Instagram_simple_icon} alt="logo"></img>
                <p>|</p>
                <img className="text-logo" src={Instagram_text_logo} alt="text-logo"></img>
            </div>

            <div className="input-container">
                <input type="text" value="" placeholder="search" />
            </div>
            <div className="right-logos">
                <img className="img-logo" src={compass} alt="compass"></img>
                <img className="img-logo" src={open_heart} alt="heart"></img>
                <img className="img-logo" src={person} alt="person"></img>
            </div>
            
        </div>
    )
}

export default SearchBar;