import React from 'react';
import BookCard from './BookCard';
import Pagination from './Pagination';
import config from '../config/config';

const BookList = ({ data }) => {
  return (
    <>
      <Pagination
        data={data}
        RenderComponent={BookCard}
        author={BookCard.author}
        pageLimit={5}
        dataLimit={config.paginatedItems}
      />
    </>
  );
};

export default BookList;
