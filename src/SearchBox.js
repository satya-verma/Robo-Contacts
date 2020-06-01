import React from 'react';

const SearchBox = ( {searchChange} ) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                className="tc pa3 bg-near-black yellow mb3"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
