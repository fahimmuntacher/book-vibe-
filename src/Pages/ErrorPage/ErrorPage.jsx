import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate, useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold mb-2">Something went wrong</h2>

        <p className="text-gray-600 mb-4">
          {error?.statusText || error?.message || "404 Not Found"}
        </p>
        <button onClick={() => navigate("/home")} className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"> Go Back Home </button>

      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
