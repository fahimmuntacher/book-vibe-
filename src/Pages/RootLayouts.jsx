
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const RootLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header></Header>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main> 
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;