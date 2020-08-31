import React from 'react';


function BookCard({ img, title, author, synopsis, averageRating, selfLink, saveBook, id }) {

  return (
    <>
      <div style={{ margin: "2rem" }}>
        <div className="card-body">
          <a href={selfLink}><img src={img} alt={title} /></a>
          <p className='card-text'>{averageRating}⭐</p>
          <a href={selfLink}><h5 className="card-title">{title}</h5></a>
          <p className="card-text">{author}</p>
          <p className="card-text">{synopsis}</p>
          <button className="btn btn-primary mr-2" id={id} onClick={saveBook}>Save</button>
          <a href={selfLink}><button className='btn btn-primary ml-2'>Google Play</button></a>
        </div>
      </div>
    </>
  )
}

export default BookCard;