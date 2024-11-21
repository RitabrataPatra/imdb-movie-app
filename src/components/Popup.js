import React from 'react'

function Popup({selected , closePopUp}) {
  return (
    <section className='popup'>
        <div className="content">
            <h2>{selected.Title} <span>({selected.Year})</span></h2>
            <p className="rating">Rated : {selected.imdbRating}</p>
            <div className='plot'>
                <img src={selected.Poster} alt={selected.Title} />
                <p>{selected.Plot}</p>
            </div>
            <button className="close" onClick={closePopUp}>Close</button>
        </div>
    </section>
  )
}

export default Popup