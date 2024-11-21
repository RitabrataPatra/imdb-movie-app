import React from 'react'

function Result({result , openPopUp}) {
  return (
    <div className='result' onClick={() => openPopUp(result.imdbID)}>
        <img src={result.Poster} alt={result.Title} />
        {/* <p>{result.Type}</p> */}
        <h3>{result.Title}</h3>
        
    </div>
  )
}

export default Result