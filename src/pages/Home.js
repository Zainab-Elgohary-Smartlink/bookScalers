import React from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';
import booksData from '../demo/booksData';
import { getItem } from '../utility/localStorageControl';

const Home = () => {
  const books = booksData;

  return (
    <>
      <div className='App layout'>
        <Header />
        <BookList className='mt-4' data={books} />
      </div>
    </>
  );
};

export default Home;
