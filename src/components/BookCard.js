import React from 'react';
import ReactStars from 'react-rating-stars-component';

const BookCard = (props) => {
  const { title, author, isbn, rating, pages, id } = props.data;

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className='book-card' key={id}>
        <div className='d-flex justify-content-between'>
          <div className='pl'>
            <h4>{title}</h4>
            <p>{`Author: ${author}`}</p>
            <p>{`ISBN: ${isbn}`}</p>
            <p>{`Pages: ${pages}`}</p>
            <div className='d-flex align-items-center mb-3'>
              <span>Rating: </span>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                edit={false}
                value={rating}
                size={24}
                isHalf={true}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                activeColor='#ffd700'
              />
            </div>
          </div>
          {/* <img src={image} className='book-img' /> */}
        </div>

        {/* <div className='d-flex justify-content-around mt-3'>
          <button type='button' className='btn btn-primary w-16'>
            Update Book
          </button>
          <button type='button' className='btn btn-secondary w-16'>
            Delete Book
          </button>
        </div> */}
      </div>
    </>
  );
};

export default BookCard;
