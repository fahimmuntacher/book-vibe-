import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { deleteId, getStoreBook } from '../../Utility/Utility';

const ListedBooks = () => {
    const data = useLoaderData();
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState("")

    useEffect(() => {
        const storedBook = getStoreBook()
        const idNum = storedBook.map(id => parseInt(id));
        const myReadList = data.filter(book => idNum.includes(book.bookId));
        setReadList(myReadList);
    },[data])

    const handleSort = (type) => {
        setSort(type)
        if(type === "Pages"){
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            console.log(readList);
            return
        } else if(type === "Ratings"){
            const sortedByPage = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedByPage);
            console.log(readList);
        }
    }

    const removeBookList = (id) => {
        deleteId(id);
        const filterBook = readList.filter(readId => readId.bookId !== id);  
        setReadList(filterBook)
    }

   
    return (
        <div className='max-w-[1440px] mx-auto  min-h-[calc(100vh-30vh)]'>
            <div className='p-20 bg-gray-300 my-5 rounded-2xl'>
                <h1 className='text-4xl text-center font-bold'>Books</h1>
            </div>

          
        <div className="relative flex justify-center mt-6">
            <div className="dropdown">
                <div
                tabIndex={0}
                role="button"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition-all duration-200"
                >
               Sort By : {sort ? sort : ""}
                </div>

                <ul
                tabIndex={0}
                className="dropdown-content menu absolute right-0 mt-2 bg-white rounded-xl shadow-lg w-52 p-2 border border-gray-100 animate-fadeIn"
                >
                <li>
                    <a onClick={() => {handleSort("Pages")}} className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150">
                    Pages
                    </a>
                </li>
                <li>
                    <a onClick={() => {handleSort("Ratings")}} className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150">
                    Ratings
                    </a>
                </li>
                </ul>
            </div>
        </div>


         {/* tabs section */}
            <div className="mx-auto mt-10 px-3">
            <Tabs>
                {/* 🔹 Tabs Header */}
                <TabList className="flex flex-wrap justify-center sm:justify-start gap-3 bg-gray-100 p-2 rounded-xl">
                <Tab
                    className="px-5 py-2 text-gray-600 font-medium rounded-lg cursor-pointer transition-all duration-100"
                    selectedClassName="bg-blue-600 text-white shadow-md scale-105"
                >
                    Read Books : {readList.length}
                </Tab>

                <Tab
                    className="px-5 py-2 text-gray-600 font-medium rounded-lg cursor-pointer transition-all duration-100"
                    selectedClassName="bg-blue-600 text-white shadow-md scale-105"
                >
                    Wishlist Books
                </Tab>
                </TabList>

                {/* 🔹 Tab Panels */}
                <TabPanel>
               {
                readList.length === 0 ? 
                
                (<div className="text-center py-20 bg-gray-100 rounded-xl shadow-inner mt-4">
                <h2 className="text-2xl font-semibold text-gray-700">No books found 😢</h2>
                <p className="text-gray-500 mt-2">Start adding books to your read list!</p>
                </div>) : 
                
                (readList.map(readed =>  <div onClick={()=> {removeBookList(readed.bookId)}} className="p-5 bg-white mt-4 rounded-xl shadow-lg transition-all border-2 border-gray-400 duration-200 mb-5 cursor-pointer">

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
                </TabPanel>

                <TabPanel>
                <div className="p-5 bg-white mt-4 rounded-xl shadow-sm transition-all duration-200 animate-fadeIn">
                    <h2 className="text-lg font-semibold text-gray-800">💭 Wishlist Books</h2>
                    <p className="text-gray-600 mt-2">Your saved books appear here.</p>
                </div>
                </TabPanel>
            </Tabs>
    </div>
        </div>
    );
};

export default ListedBooks;<h1>This is from listed books</h1>