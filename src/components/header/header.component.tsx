

import logo from '../../assets/logo.png'
import './header.css'
import Slider from '../slider/slider.component';

const Header = () => {
    const Links = [
        { name: "About Nious", link: "#about-nious" },
        { name: "Solutions", link: "#solutions" },
        { name: "Contact Us", link: "#contact-us" },

    ];

    const slides = [
        { url: 'https://swiperjs.com/demos/images/nature-1.jpg', alt: 'Image 1' },
        { url: 'https://swiperjs.com/demos/images/nature-2.jpg', alt: 'Image 2' },
        { url: 'https://swiperjs.com/demos/images/nature-3.jpg', alt: 'Image 3' },
        { url: 'https://swiperjs.com/demos/images/nature-4.jpg', alt: 'Image 4' },
        { url: 'https://swiperjs.com/demos/images/nature-5.jpg', alt: 'Image 5' },
        { url: 'https://swiperjs.com/demos/images/nature-6.jpg', alt: 'Image 6' },
        { url: 'https://swiperjs.com/demos/images/nature-7.jpg', alt: 'Image 7' },
        { url: 'https://swiperjs.com/demos/images/nature-8.jpg', alt: 'Image 8' },
        { url: 'https://swiperjs.com/demos/images/nature-9.jpg', alt: 'Image 9' },
        { url: 'https://swiperjs.com/demos/images/nature-10.jpg', alt: 'Image 10' },
    ]

    return (
        <>
        <header id='header' className='w-ful'>
            <div className='md:flex items-center content bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <img width={120} height={50} src={logo} alt="" />
                </div>
                {/* linke items */}
                <ul className={`md:flex bg-grey hidden rounded-full md:items-center md:pb-0 pb-12 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in top-[-490px]`}>
                    {Links.map((link, index) => (
                        <li key={index} className='px-3 hover:text-light text-dark md:my-0 my-7 font-semibold'>
                            <a href={link.link} className='text-sm text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            {/* Adjusted the font size with text-sm class */}
                        </li>
                    ))}
                </ul>

                {/* button */}
                <div className='ml-auto md:block hidden rounded-full bg-green font-semibold '>
                    <button className='bg-blue-500 hover:text-light transition-all duration-200 ease-in text-dark text-sm  px-2 py-1 rounded-md'>Eng</button>
                </div>
            </div>
        </header>
        {/* <FloatingMenu></FloatingMenu> */}
        <div style={{zIndex:100}} className='absolute top-40 left-0 right-0'>

        <Slider slides={slides} />
        </div>
        </>
    );
};

export default Header;