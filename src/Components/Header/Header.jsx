import { NavLink } from "react-router";
import "./Active.css"
const Header = () => {
    return (
        <div>
        <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-300 text-black z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="/listed-books">Listed Books</NavLink>
                        <NavLink to="/pages-to-read">Pages to Read</NavLink>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5 text-xl">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="/listed-books">Listed Books</NavLink>
                    <NavLink to="/pages-to-read">Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
                </div>
        </div>
    );
};

export default Header;