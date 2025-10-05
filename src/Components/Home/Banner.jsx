
import HeroImg from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className='max-w-[1440px] my-5 mx-auto bg-gray-200 rounded-2xl mb-10'>
        <div className=" sm:flex sm:justify-center py-10">
            <div className="flex sm:flex-row flex-col items-center text-center sm:space-x-35">
            <img
            src={HeroImg}
            className="max-w-sm rounded-lg "
            />
            <div>
            <h1 className="text-5xl font-bold py-10">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn bg-green-600 text-white border-0 rounded-xl">View the List</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;