import React from 'react';

const Searchbar = (props) => {
    return(
       <div className="search-bar">
       <form onSubmit={props.searchrequestMethod} action="">
       <input onChange={props.withinSearch} type="text"/>
       <button type="submit">SEARCH</button>
       </form>
       
       </div>
    )
}

export default Searchbar;
