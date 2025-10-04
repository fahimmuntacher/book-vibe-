
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;