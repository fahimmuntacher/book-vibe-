import { createBrowserRouter } from "react-router";
import RootLayouts from '../Pages/RootLayouts';
export const router = createBrowserRouter([
  {
    index: true, 
    Component: RootLayouts, 
  },
]);