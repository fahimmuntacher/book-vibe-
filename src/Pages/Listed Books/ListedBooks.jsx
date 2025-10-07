import {  useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishListUI from './wishListUI';
import BookReaded from './BookReaded';
import { WishListDataContext } from '../RootLayouts';


const ListedBooks = () => {
    const {wishList, setWishList} = useContext(WishListDataContext)
    console.log("listed page:", wishList);
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    const [activeTab, setActivetab] = useState('');

    const handleSort = (type) => {
        setSort(type)

        if(activeTab === "read") {
             if(type === "Pages"){
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            return;
        } else if(type === "Ratings"){
            const sortedByPage = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedByPage);
            return;
        }
        } else if(activeTab === "wishlist") {
             if(type === "Pages"){
            const sortedByPage = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
            setWishList(sortedByPage);
            return;
        } else if(type === "Ratings"){
            const sortedByPage = [...wishList].sort((a, b) => b.rating - a.rating);
            setWishList(sortedByPage);
            return;
        }
    }}

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
                    onClick={() => setActivetab("read")}
                    className="px-5 py-2 text-gray-600 font-medium rounded-lg cursor-pointer transition-all duration-100"
                    selectedClassName="bg-blue-600 text-white shadow-md scale-105"
                >
                    Read Books : {readList.length}
                </Tab>

                 <Tab
                    onClick={() => setActivetab("wishlist")}
                    className="px-5 py-2 text-gray-600 font-medium rounded-lg cursor-pointer transition-all duration-100"
                    selectedClassName="bg-blue-600 text-white shadow-md scale-105"
                >
                    Wishlist Books : {wishList.length}
                </Tab>
             
                </TabList>

                {/* 🔹 Tab Panels */}
                <TabPanel>
                    <BookReaded   readList = {readList} setReadList = {setReadList}></BookReaded>
                </TabPanel>

               
                 <TabPanel>
                    <WishListUI wishList = {wishList} setWishList = {setWishList}></WishListUI>
                </TabPanel>
            </Tabs>
    </div>
        </div>
    );
    };

export default ListedBooks;
