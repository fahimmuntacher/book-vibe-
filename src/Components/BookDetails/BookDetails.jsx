import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { getStoreBook, setStoreBook } from '../../Utility/Utility';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {id} = useParams();
    const idNum = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === idNum);
    const { bookId,bookName,image, author, review, category, totalPages, rating, tags, publisher, yearOfPublishing} = singleBook;
    
    const [readed, setReaded] = useState(false)
     
    useEffect(() => {
        const stored = getStoreBook();
        if(stored.includes(bookId)){
            setReaded(true)
        }
    }, [bookId])
    
    const handleAsMark = (id) => {
        setStoreBook(id)
        setReaded(true)

        MySwal.fire({
        title: "Good job!",
        text: "Mark As Read!",
        icon: "success"
});
        
    }
    // console.log(id);
    return (
        <div className='sm:max-w-[1440px] mx-auto my-10'>
            <div className='flex sm:flex-row flex-col gap-10 h-full'>
               <figure className='sm:py-10 rounded-2xl bg-gray-300 sm:w-1/2 mx-auto w-10/12'>
                 <img className=' mx-auto sm:w-[450px] rounded-xl' src={image} alt="" />
               </figure>
                <section className='sm:w-1/2 text-center sm:text-start'>
                    <div className='space-y-2.5 border-b-1 pb-2 border-gray-400'>
                        <h1 className='text-5xl font-bold'>{bookName}</h1>
                        <p className='text-lg font-semibold text-gray-500'>Author: {author}</p>
                    </div>
                    <div className='border-b-1 pb-2 border-gray-400'>
                        <p className='text-lg font-semibold text-gray-500 my-2 '>{category}</p>
                    </div>
                    <div className='py-3 space-y-5 border-b-1 border-gray-400'>
                        <p className='px-5 sm:px-0'><span className='text-lg font-bold'>Review : </span><span className='text-gray-600 text-lg '>{review}</span></p>
                        <div className='flex items-center space-x-2.5 sm:justify-start justify-center'> 
                            <h1 className='text-xl font-bold'>Tag</h1>

                           {
                            tags.map(tag => <button className=" p-3 text-green-600 bg-green-100 border-0 rounded-2xl text-xl font-semibold">#{tag}</button>)
                            }
                        </div>
                    </div>
                    <div className='flex items-center sm:justify-start justify-center gap-16 my-5 border-b-1 pb-5 border-gray-400'>
                        <div className='space-y-3'>
                            <h3 className='text-xl font-semibold text-gray-500'>Number of Pages :</h3>
                            <h3 className='text-xl font-semibold text-gray-500'>Publisher :</h3>
                            <h3 className='text-xl font-semibold text-gray-500'>Year of Publishing :</h3>
                            <h3 className='text-xl font-semibold text-gray-500'>Ratings :</h3>
                        </div>
                        <div className='space-y-3'>
                            <h3 className='text-xl font-bold'>{totalPages}</h3>
                            <h3 className='text-xl font-bold'>{publisher}</h3>
                            <h3 className='text-xl font-bold'>{yearOfPublishing}</h3>
                            <h3 className='text-xl font-bold'>{rating}</h3>

                        </div>

                    </div>
                    <div className='flex gap-5 justify-center sm:justify-start'>
                        <Link>
                        <button onClick={() => handleAsMark(bookId)} disabled = {readed} className={` ${readed ? "bg-gray-600 text-gray-500 cursor-not-allowed" : "hover:bg-blue-500 hover:text-white"} btn px-7 py-5 text-xl font-bold border-2 rounded-xl border-gray-400`}>{readed ? "Marked" : "Mark As Read"}</button>
                        </Link>
                        <Link><button className="btn  px-7 py-5 border-2 text-xl text-white font-bold rounded-xl border-[#50B1C9] bg-[#50B1C9]">Wishlist</button></Link>
                    </div>
                   
                </section>
            </div> 
        </div>
    );
};

export default BookDetails;