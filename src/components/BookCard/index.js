import React from 'react';


function BookCard({ img, title, author, synopsis, averageRating, selfLink, saveBook, id }) {

  return (
    <>
      <div style={{ margin: "2rem" }}>
        <div className="card-body">
          <img src={img} alt={title} />
          <p className='card-text'>{averageRating}⭐</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <p className="card-text">{synopsis}</p>
          <p className="card-text">{selfLink}</p>
          <button className="btn btn-primary" id={id} onClick={saveBook}>Save</button>
        </div>
      </div>
    </>
  )
}

export default BookCard;