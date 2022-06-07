import React from 'react'

function SearchBox( {searchChange}){
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue' onChange={searchChange} type='search' placeholder='Search Robo'></input>
        </div>
    )
}

export default SearchBox;