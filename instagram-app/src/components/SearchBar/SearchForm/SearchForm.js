import React from 'react';

const SearchForm = props => {
    return (
        <form>
            <input 
                name='search'
                value={props.handleChanges}
                placeholder="" 
                onChange={props.handleChanges}></input>
            <button onClick={props.filterSearch}>search</button>
        </form>
    )
}



export default SearchForm;