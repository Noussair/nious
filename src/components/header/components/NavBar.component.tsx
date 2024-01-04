import { useEffect, useState } from 'react';
import logo from '../../../assets/logo.png';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.component';

function NavBar() {
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log(t('solutions'));
    
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
    <nav style={{ zIndex: 99999 }} className={`md:flex items-center content bg-white py-4 md:px-10 px-7 bg-dark transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'} ${window.innerWidth > 768 ? 'fixed top-0 right-0 left-0' : 'bg-transparent z-0' }`}>
      <div className={`flex items-center gap-1 ${window.innerWidth <= 768 ? 'fixed top-0 right-0 left-0 bg-dark py-4' : ''}`}>
        <img width={120} height={50} src={logo} alt="" className='cursor-pointer' />
      </div>

      <ul className={`md:flex bg-grey hidden rounded-full md:items-center md:pb-0 pb-4 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 ${window.innerWidth > 768 ? 'relative' : 'hidden'}`}>
        {window.innerWidth > 768 &&
          <React.Fragment>
            <li className='px-2 md:px-3 hover:text-light text-dark md:my-0 my-2 md:font-semibold'>
              <a href="#about-nious" className='text-sm text-gray-800 hover:text-blue-400 duration-500 block md:inline-block'>
                {t('about_nious')}
              </a>
            </li>
            <li className='px-2 md:px-3 hover:text-light text-dark md:my-0 my-2 md:font-semibold'>
              <a href="#solutions" className='text-sm text-gray-800 hover:text-blue-400 duration-500 block md:inline-block'>
                {t('solutions')}
              </a>
            </li>
            <li className='px-2 md:px-3 hover:text-light text-dark md:my-0 my-2 md:font-semibold'>
              <a href="#contact-us" className='text-sm text-gray-800 hover:text-blue-400 duration-500 block md:inline-block'>
                {t('contact_us')}
              </a>
            </li>
          </React.Fragment>
        }
      </ul>

      <div className={`ml-auto md:block rounded-full bg-green font-semibold mt-2 md:mt-0 ${window.innerWidth <= 768 ? 'hidden' : ''}`}>
        <LanguageSwitcher />
      </div>

    </nav>
  );
}

export default NavBar;
