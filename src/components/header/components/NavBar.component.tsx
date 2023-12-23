import { useEffect, useState } from 'react';
import logo from '../../../assets/logo.png';

function NavBar() {
  const Links = [
    { name: "About Nious", link: "#about-nious" },
    { name: "Solutions", link: "#solutions" },
    { name: "Contact Us", link: "#contact-us" },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos < prevScrollPos;

      setVisible(isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      style={{ zIndex: 101 }}
      className={`md:flex items-center content bg-white py-4 md:px-10 px-7 bg-dark transition-all duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${window.innerWidth > 768 ? 'fixed top-0 right-0 left-0' : 'relative transform translate-y-0'}`}
    >
      {/* logo section */}
      <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
        <img width={120} height={50} src={logo} alt="" />
      </div>
      {/* link items */}
      <ul
        className={`md:flex bg-grey hidden rounded-full md:items-center md:pb-0 pb-12 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9`}
      >
        {Links.map((link, index) => (
          <li key={index} className='px-3 hover:text-light text-dark md:my-0 my-7 font-semibold'>
            <a href={link.link} className='text-sm text-gray-800 hover:text-blue-400 duration-500'>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* button */}
      <div className='ml-auto md:block hidden rounded-full bg-green font-semibold '>
        <button className='bg-blue-500 hover:text-light transition-all duration-200 ease-in text-dark text-sm px-2 py-1 rounded-md'>Eng</button>
      </div>
    </nav>
  );
}

export default NavBar;
