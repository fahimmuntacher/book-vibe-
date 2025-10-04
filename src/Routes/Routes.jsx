import { createBrowserRouter } from "react-router";
import RootLayouts from '../Pages/RootLayouts';
import Home from "../Pages/Home";
import ListedBooks from "../Pages/Listed Books/ListedBooks";
import PagesToRead from "../Pages/Pages to Read/PagesToRead";
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
        Component: Home
      },
      {
        path: "/listed-books", 
        Component: ListedBooks
      }, 
      {
        path : "/pages-to-read", 
        Component: PagesToRead
      }
    ]
  }
])