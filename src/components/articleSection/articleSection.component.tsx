import React from 'react';
import './article.css'
import Arrow from '../arrow/arrow.component';
const MenuButton: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <button
        className="animate-pulse bg-green rounded-full p-4 shadow-lg flex items-center justify-center"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const ArticleSection = () => {
  return (
    <>
    <MenuButton></MenuButton>
    <div id='solutions' className="relative bg-gray-200 p-10">
      <div className="blur-edge"></div> {/* Apply the blur-edge class */}
      <div style={{maxHeight:'600px'}} className="relative overflow-y-scroll">
      <div className="flex justify-center items-center bg-gray-200 p-10">
      <div className="flex-1 md:flex hidden flex-col items-center justify-center">
        {/* Placeholder for the graphic, replace with actual graphic or component */}
        <div style={{borderRadius:'70px'}} className="bg-darker flex p-28 mt-4 w-16 relative">
          {/* Example of circles to simulate the particles */}
          <span className="absolute bg-light z-10 top-10 right-10 w-11 h-11 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-8 left-20 w-7 h-7 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-10 left-10 w-3 h-3 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-20 left-6 w-7 h-7 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-36 left-6 w-9 h-9 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-50 left-24 w-3 h-3 bg-teal-500 rounded-full"></span>
        </div>
        <div style={{borderRadius:'70px'}} className="bg-green flex p-28 mt-4 w-16 relative">
          {/* Example of circles to simulate the particles */}
          <span className="absolute bg-light z-10 top-10 right-10 w-11 h-11 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-8 left-20 w-7 h-7 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-10 left-10 w-3 h-3 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-20 left-6 w-7 h-7 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-36 left-6 w-9 h-9 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-50 left-24 w-3 h-3 bg-teal-500 rounded-full"></span>
        </div>
        <div style={{borderRadius:'70px'}} className="bg-grey flex p-28 mt-4 w-16 relative">
          {/* Example of circles to simulate the particles */}
          <span className="absolute bg-light z-10 top-10 right-10 w-11 h-11 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-8 left-20 w-7 h-7 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-10 left-10 w-3 h-3 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-20 left-6 w-7 h-7 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-36 left-6 w-9 h-9 bg-teal-500 rounded-full"></span>
          <span className="absolute bg-light z-10 top-50 left-24 w-3 h-3 bg-teal-500 rounded-full"></span>
        </div>
      </div>
      <div className="flex-1">
        {/* Text content */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-grey mb-2">Particles</h2>
          <p className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-grey mb-2">Particles</h2>
          <p className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-grey mb-2">Particles</h2>
          <p className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-grey mb-2">Particles</h2>
          <p className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-grey mb-2">Fluid</h2>
          <p className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-grey mb-2">Particles</h2>
          <p className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-grey mb-2">Particles</h2>
          <p className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <div onClick={()=>scroll({top:20,behavior:'smooth'})} className='sticky bottom-10 left-0'>

    <Arrow onClick={()=>{}} direction='down'></Arrow>
    </div>
    </div>
    </div>
    
    
    </>
   
  );
};

export default ArticleSection;
