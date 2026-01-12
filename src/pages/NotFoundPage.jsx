import { Link } from 'react-router-dom';

import Conatiner from '@/components/Container.jsx';
import NotFoundLottie from '@/lottie/404.json';
import Lottie from 'lottie-react';


function NotFound() {
  return (
    <div className='bg-white min-h-screen'>
      <Conatiner>
        <div className="flex   flex-col  w-full items-center space-y-4 mt-10 gap-5">
          <div className="min-w-64 max-w-64 aspect-square">
            <Lottie animationData={NotFoundLottie} className="w-full h-full" loop={true} />
          </div>

          <div className="font-liches text-2xl">are you lost?!</div>
          <Link
            to="/"
            className="text-white font-medium rounded-md hover:bg-transparent hover:text-black border border-black transition-colors duration-500 py-2 px-3 bg-black"
          >
            Home Page
          </Link>
        </div>
      </Conatiner>
    </div>
  );
}

export default NotFound;
