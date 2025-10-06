import { createBrowserRouter } from "react-router";
import RootLayouts from '../Pages/RootLayouts';
import Home from "../Pages/Home";
import ListedBooks from "../Pages/Listed Books/ListedBooks";
import PagesToRead from "../Pages/Pages to Read/PagesToRead";
import About from "../Pages/About/About";
import BookDetails from "../Components/BookDetails/BookDetails";
export const router = createBrowserRouter([
  {
   
    path: '/', 
    Component: RootLayouts,
    children: [
      {
        index: true, 
        path: "/",
        Component: Home
      }, 
      {
        path: "/home",
        loader: () => fetch("/booksData.json"), 
        Component: Home
      },
      {
        path: "/listed-books", 
        loader: ()=> fetch("../booksData.json"),
        Component: ListedBooks
      }, 
      {
        path : "/pages-to-read", 
        Component: PagesToRead
      },
      {
        path: "/about",
        Component: About
      }, 
      {
        path: "/bookDetails/:id",
        loader: ()=> fetch("../booksData.json"),
        Component: BookDetails
      }
    ]
  }
])