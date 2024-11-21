import React from 'react'

function Search({handleInput , search}) {
  return (
    <section className='searchBox-wrap'>
        <input 
        type="text" 
        name="" 
        placeholder='Search for a movie...' 
        className="searchBox" 
        onChange = {handleInput}
        onKeyDown={search}
        />
    </section>
  )
}

export default Search