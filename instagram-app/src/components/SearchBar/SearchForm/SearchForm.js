import React from 'react';

const SearchForm = props => {
    return (
        <form>
            <input value='' placeholder="" onChange={props.handleChanges}></input>
            <button>search</button>
        </form>
    )
}

export default SearchForm;