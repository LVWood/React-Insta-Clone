import React from 'react';

const SearchForm = props => {
    return (
        <form>
            <input 
                name='search'
                value={props.search}
                placeholder="" 
                onChange={props.handleSearchInput}></input>
            <button onClick={props.filterSearch}>search</button>
        </form>
    )
}



export default SearchForm;