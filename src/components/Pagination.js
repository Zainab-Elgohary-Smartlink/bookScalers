import React, { useState, useEffect } from 'react';
import booksData from '../demo/booksData';
import { getItem } from '../utility/localStorageControl';

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  let booksInStorage = getItem('books');
  console.log(booksInStorage);

  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  let sorted = '';
  let paginatedData = [];
  // initial state should be an empty array
  const [books, setBooks] = useState(
    booksInStorage ? booksInStorage : booksData
  );
  const [sortType, setSortType] = useState('all');

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return books.slice(startIndex, endIndex);
  };

  paginatedData = getPaginatedData();

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        all: 'all',
        author: 'author',
        title: 'title',
        pages: 'pages',
        rating: 'rating',
      };
      const sortProperty = types[type];

      // Display data from local storage instead of diplaying it from the demo JSON
      if (sortProperty === 'author' || sortProperty === 'title') {
        sorted = [...books].sort((a, b) => {
          let fa = a[sortProperty].toLowerCase(),
            fb = b[sortProperty].toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      } else if (sortProperty === 'all') {
        sorted = [...books];
      } else {
        sorted = [...books].sort((a, b) => b[sortProperty] - a[sortProperty]);
      }
      setBooks(sorted);
    };
    //booksData was spreaded above
    sortArray(sortType);
  }, [sortType]);

  return (
    <div>
      <div className='mb-3'>
        <span className='sort-label'>Sort by:</span>
        <select
          name='sort'
          id='sort'
          onChange={(e) =>
            setSortType(e.target.value, console.log(e.target.value))
          }>
          <option value='all'>All</option>
          <option value='author'>Author</option>
          <option value='title'>Title</option>
          <option value='pages'>Pages</option>
          <option value='rating'>Rating</option>
        </select>
      </div>

      {/* show the posts, 10 posts at a time */}
      <div className='book-list'>
        {paginatedData.map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      {/* show the pagiantion
          it consists of next and previous buttons
          along with page numbers, in our case, 5 page
          numbers at a time
      */}
      <div className='pagination'>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? 'active' : null
            }`}>
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}>
          next
        </button>
      </div>
    </div>
  );
}
export default Pagination;
