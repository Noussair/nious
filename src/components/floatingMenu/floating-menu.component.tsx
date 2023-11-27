// FloatingMenu.tsx
import React, {  useRef, useState } from 'react';
import './floating-menu.css'
const FloatingMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);


  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
    if (buttonRef.current) {
      buttonRef.current.classList.toggle('flipped');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      const buttonRect = button.getBoundingClientRect();
      const distanceThreshold = 120; // Distance in pixels to trigger the move

      const dx = e.clientX - (buttonRect.left + buttonRect.width / 2);
      const dy = e.clientY - (buttonRect.top + buttonRect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < distanceThreshold) {
        const attractionFactor = 1 - distance / distanceThreshold; 
        const tx = attractionFactor * dx;
        const ty = attractionFactor * dy;

        button.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        button.style.transition = 'transform 0.2s ease-out';
      } else {
        button.style.transform = 'translate3d(0px, 0px, 0px)';
        button.style.transition = 'transform 0.2s ease-out';
      }
    }
  };
  

  return (
    <div onMouseMove={handleMouseMove} className="menu-btn flex justify-center mt-10">
     <button onClick={toggleMenu} ref={buttonRef} style={{ zIndex: 9999 }}
        className={`bg-green rounded-full p-4 shadow-lg flex items-center justify-center`}
      >
        {menuOpen ? (
          // SVG for 'X' icon
          <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="#04d3c0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Original SVG icon
          <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>
      <div style={{zIndex:999,backgroundColor:'#04d3c0'}}
        className={`fixed bg-green top-0 left-0 w-full h-full bg-orange-500 bg-opacity-90 z-10 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
       <div className="menu-items-container text-light">
  <a className="menu-item text-white text-center text-xl mt-4" onClick={toggleMenu} href='#about-nious'>About Nious</a>
  <a className="menu-item text-white text-center text-xl mt-4" onClick={toggleMenu} href='#solutions'>Solutions</a>
  <a className="menu-item text-white text-center text-xl mt-4" onClick={toggleMenu} href='#contact-us'>Contact Us</a>
  {/* Add other menu items here */}
</div>
      </div>
      
    </div>
  );
};

export default FloatingMenu;
