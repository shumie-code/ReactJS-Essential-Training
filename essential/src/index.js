// Required imports for react to be functionally available to the component
// Methods have been destructed using es6 syntax for objects
import React, { Component } from 'react';
import { render } from 'react-dom';
import Library from './Library';
import Hiring from './Hiring';
import NotHiring from './NotHiring';


// bookList is a variable that stores book data in an array to be used by the Library Component
let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway"},
    {"title": "Saba", "author": "Medhin", pages: 160},
    {"title": "Emanuel", "author": "Nega", pages: 360},
    {"title": "Petros", "author": "Medhin & Nega", "pages": 200}
]

render(
   <Library books={bookList} />,
    document.getElementById('root')
)