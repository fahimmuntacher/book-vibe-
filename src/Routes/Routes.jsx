import { createBrowserRouter } from "react-router";
import RootLayouts from '../Pages/RootLayouts';
import Home from "../Pages/Home";
import ListedBooks from "../Pages/Listed Books/ListedBooks";
import PagesToRead from "../Pages/Pages to Read/PagesToRead";
import About from "../Pages/About/About";
import BookDetails from "../Components/BookDetails/BookDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import WishListUI from "../Pages/Listed Books/wishListUI";
import BookReaded from "../Pages/Listed Books/BookReaded";
export const router = createBrowserRouter([
  {
   
    path: '/', 
    loader: ()=> fetch("/booksData.json"),
    element: <RootLayouts></RootLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true, 
        path: "/",
        element: <Home></Home>
      }, 
      {
        path: "/home",
        loader: () => fetch("/booksData.json"), 
        element: <Home></Home>
      },
      {
        path: "/listed-books", 
        loader: ()=> fetch("/booksData.json"),
        element: <ListedBooks></ListedBooks>
      }, 
      {
        path : "/pages-to-read", 
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/about",
        element: <About></About>
      }, 
      {
        path: "/bookDetails/:id",
        loader: ()=> fetch("../booksData.json"),
        element: <BookDetails></BookDetails>
      }, 
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])