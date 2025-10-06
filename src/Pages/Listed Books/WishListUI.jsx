import React, { useEffect } from 'react';
import { deleteId, getStoreBook } from '../../Utility/Utility';
import { useLoaderData } from 'react-router';

const WishListUI = ({wishList, setWishList}) => {
    const data = useLoaderData()
    console.log(wishList)
     useEffect(() => {
        const storedBook = getStoreBook("wishList")
        const idNum = storedBook.map(id => parseInt(id));
        const myWishList = data.filter(book => idNum.includes(book.bookId));
        setWishList(myWishList);
    },[data, setWishList])


      const removeBookList = (id) => {
        deleteId("wishList",id);
        const filterBook = wishList.filter(readId => readId.bookId !== id);  
        setWishList(filterBook)
    }
    return (
    <div>
        {
                wishList.length === 0 ? 
                
                (<div className="text-center py-20 bg-gray-100 rounded-xl shadow-inner mt-4">
                <h2 className="text-2xl font-semibold text-gray-700">No books found 😢</h2>
                <p className="text-gray-500 mt-2">Start adding books to your Wishlist!</p>
                </div>) : 
                
                (wishList.map(readed =>  <div onClick={()=> {removeBookList(readed.bookId)}} className="p-5 bg-white mt-4 rounded-xl shadow-lg transition-all border-2 border-gray-400 duration-200 mb-5 cursor-pointer">

                    <div className='flex gap-10'>
                        <div className='sm:p-5 sm:bg-gray-300 rounded-xl'>
                            <img className='rounded-lg sm:w-[150px] w-[8rem] h-[10rem] object-contain mx-auto sm:h-[150px]' src={readed.image} alt="" />
                        </div>
                       <div>
                            <h2 className="text-3xl font-semibold text-gray-800">{readed.bookName}</h2>
                            <p className="text-gray-600 mt-2 text-lg font-semibold">By: {readed.author}</p>
                            <p className="text-gray-600 mt-2 text-lg font-semibold">Pages: {readed.totalPages}</p>
                            <p className="text-gray-600 mt-2 text-lg font-semibold">Ratings: {readed.rating}</p>
                       </div>
                    </div>
                </div>))
               }
    </div>
    );
};

export default WishListUI;