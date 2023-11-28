

type ArrowProps = {
  direction: 'up' | 'down' | 'left' | 'right';
  onClick: any | undefined
};
import './arrow.css'
const Arrow = ({onClick, direction }: ArrowProps) => {
  const rotation = {
    up: 'rotate-180',
    right: 'rotate-90',
    down: 'rotate-0',
    left: 'rotate-270',
  };

  const gradientStyle = {
    background: 'linear-gradient(47deg, rgba(115,124,243,1) 0%, rgba(61,166,219,1) 35%, rgba(13,204,196,1) 100%)'};

  return (
    <button onClick={onClick} className="flex btn items-center mr-0 mt-2 justify-center w-16 h-16 cursor-pointer rounded-full shadow-lg animate-pulse" style={gradientStyle}>
      <svg
        className={`w-10 h-10 text-white ${rotation[direction]}`} // Increased size from w-5 h-5 to w-12 h-12
        fill="white"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2} // Reduced stroke width for a balanced appearance
          d="M12 4v16m0 0l-7-7m7 7l7-7"
        ></path>
      </svg>
    </button>
  );
};

export default Arrow;
