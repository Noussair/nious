import React from 'react'


const ArrowUp = () => {
    const gradientStyle = {
      background: 'linear-gradient(47deg, rgba(115,124,243,1) 0%, rgba(61,166,219,1) 35%, rgba(13,204,196,1) 100%',
      marginLeft:'85%'
    };
  
    return (
      <div className="flex  items-center mr-0 mt-1 justify-center w-16 h-16 cursor-pointer rounded-full" style={gradientStyle}>
        <svg
          className="w-5 h-5 text-white"
          fill="white"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </div>
    );
  };


  export default ArrowUp