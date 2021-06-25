import React, { useState } from 'react';
import './SearchFunc.css' ;

export const SearchFunc = () => {

    const [Searchh, setSearchh] = useState("");

    return (
        <div className="taskbar">
            <h1>Search Photos</h1>
            <input
                type="text"
                className="search-bar"
                placeholder="Search Photos"
                value={Searchh}
                onChange={(e) => { setSearchh(e.target.value) }}
            />
        </div>
    )
}