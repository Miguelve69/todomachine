import React from "react";

import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, loading}) {
    

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return(
        <div >
            <input 
            className="TodoSearch" 
            placeholder="Buscar ......" 
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
            autoFocus
            />    
        </div>    
    )
}

export {TodoSearch};