import { Outlet, useLoaderData } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { createContext, useEffect, useState } from 'react';
import { getStoreBook } from '../Utility/Utility';


export const WishListDataContext = createContext();

const RootLayouts = () => {
   const data = useLoaderData();
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedBook = getStoreBook("wishList");
    const idNum = storedBook.map((id) => parseInt(id));
    const myWishList = data.filter((book) => idNum.includes(book.bookId));
    setWishList(myWishList);
  }, [data]); 
     
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='w-full'>
                <Header></Header>
            </div>
            <main className='flex-1 pt-20'>
                <WishListDataContext.Provider value={{wishList, setWishList}}>
                    <Outlet></Outlet>
                </WishListDataContext.Provider>
            </main> 
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;