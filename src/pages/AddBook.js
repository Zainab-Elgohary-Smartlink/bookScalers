import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import booksData from '../demo/booksData';
import ReactStars from 'react-rating-stars-component';
import { getItem, setItem, removeItem } from '../utility/localStorageControl';
import { useHistory } from 'react-router-dom';

const AddBook = () => {
  const history = useHistory();
  const [newBooks, setNewBooks] = useState(booksData);

  console.log(newBooks);
  useEffect(() => {
    setItem('books', newBooks);
  }, [newBooks]);

  return (
    <Formik
      initialValues={{
        title: '',
        author: '',
        isbn: '',
        pages: '',
        rating: 0,
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        isbn: Yup.string().required('Required'),
        pages: Yup.string().required('Required'),
        rating: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {
        setNewBooks((books) => [
          {
            title: values.title,
            author: values.author,
            isbn: values.isbn,
            pages: Number(values.pages),
            rating: Number(values.rating),
          },
          ...books,
        ]);
        history.push('/');
      }}>
      {({ setFieldValue, values }) => (
        <div className='row d-flex justify-content-center pt-5 position-relative m-0'>
          <Form className='col-7'>
            <label htmlFor='title' className='form-label'>
              Book Title
            </label>
            <Field
              name='title'
              type='text'
              className='form-control'
              placeholder='Enter book title here'
            />
            <div className='error-msg'>
              <ErrorMessage name='title' />
            </div>

            <label htmlFor='author' className='form-label'>
              Author
            </label>
            <Field
              name='author'
              type='text'
              className='form-control'
              placeholder='Enter book author here'
            />
            <div className='error-msg'>
              <ErrorMessage name='author' />
            </div>

            <label htmlFor='isbn' className='form-label'>
              ISBN
            </label>
            <Field
              name='isbn'
              type='text'
              className='form-control'
              placeholder='Enter book ISBN here'
            />
            <div className='error-msg'>
              <ErrorMessage name='isbn' />
            </div>

            <label htmlFor='pages' className='form-label'>
              Pages
            </label>
            <Field
              name='pages'
              type='number'
              className='form-control'
              placeholder='Enter book pages here'
            />
            <div className='error-msg'>
              <ErrorMessage name='pages' />
            </div>

            <div className='d-flex align-items-center align-items-center'>
              <label htmlFor='rating' className='form-label'>
                Rating
              </label>
              <ReactStars
                id='rating'
                name='rating'
                onChange={(e) => setFieldValue('rating', e)}
                value={values['rating']}
                count={5}
                size={24}
                isHalf={true}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                activeColor='#ffd700'
              />
            </div>
            <div className='error-msg'>
              <ErrorMessage name='rating' />
            </div>

            <button
              type='submit'
              className='btn btn-primary d-block mx-auto add-btn'>
              Add Book
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddBook;
