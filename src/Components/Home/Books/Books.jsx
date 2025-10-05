import React, { Suspense, useEffect, useState } from 'react';
import Book from './Book';
import { RiseLoader } from 'react-spinners';
import { useLoaderData } from 'react-router';

const Books = () => {
    // const bookData = useLoaderData()
    const [allBooks, setAllBooks] = useState([]); 
    // setAllBooks(bookData)
    useEffect(() => {
        fetch("/booksData.json").then(res => res.json())
        .then(data => {setAllBooks(data)})
    }, [])
   
    return (
        <div className='max-w-[1440px] mx-auto'>
            <h1 className='text-4xl text-center font-bold'>Books</h1>
           <Suspense fallback = {<span>Loadinnggg</span>}>
                <div  className='grid sm:grid-cols-3 grid-cols-1 w-full mx-auto gap-5 my-8'>
                    {
                        allBooks.map(book => <Book book = {book}></Book>)
                    }
                </div>
           </Suspense>
        </div>
    );
};

export default Books;<h1 className='text-4xl text-center font-bold'>Books</h1>