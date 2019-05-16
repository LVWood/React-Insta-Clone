import React from 'react';
import InstagramLogos from './InstagramLogos/InstagramLogos';
import SearchForm from './SearchForm/SearchForm';
import Icons from './Icons/Icons';
import { SearchBarContainer } from './SearchBarStyles'

const SearchBar = props => {
    return (
        <SearchBarContainer >
            <InstagramLogos />
            <SearchForm 
                handleChanges={props.handleChanges}
                filterSearch={props.filterSearch}
                search={props.search} />
            <Icons />
        </SearchBarContainer>
    )
}

export default SearchBar;