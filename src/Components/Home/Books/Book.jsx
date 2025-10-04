import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
const Book = ({book}) => {
    const { bookId ,bookName, author, image, rating, category, tags} = book;
    console.log(tags);
    return (
        <div>
             <div key={bookId} className=" bg-base-100 shadow-lg rounded-2xl flex flex-col justify-between h-full border-2 border-gray-300">
               
                <div className='p-5'>
                    <figure className='p-10 h-fit bg-gray-200 rounded-2xl'>
                        <img
                            src={image}
                            className='mx-auto h-[170px] '
                            alt="Shoes" />
                    </figure>
                </div>
                 <div className='flex gap-4 pl-6'>
                    {
                        tags.map(tag => <button className=" p-3 text-green-600 bg-green-100 border-0 rounded-2xl text-xl font-semibold">{tag}</button>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="text-3xl">{bookName}</h2>
                    <p className='text-lg font-semibold'>By: {author}</p>
                </div>
                <div className="flex justify-between p-6 border-t-2 border-dotted border-gray-300">
                    <h3 className='text-lg'>{category}</h3>
                    <div className='flex items-center gap-2.5'>
                            <h3 className='text-lg'>{rating}</h3>
                            <FaRegStarHalfStroke color='#ffa534'/>
                    </div>
                </div>
                </div>
                </div>)
            }
    

export default Book;